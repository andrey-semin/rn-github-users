import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { Spinner, List, UserRow, Error } from 'components'
import { scenes } from 'constants'
import styles from './styles'

export default class UserList extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar_url: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        html_url: PropTypes.string.isRequired
      })
    ),
    fetchUsersPage: PropTypes.func.isRequired,
    error: PropTypes.string
  }

  componentDidMount() {
    this.props.fetchUsersPage()
  }

  createUserRowPressHandler = user => () =>
    this.props.navigation.navigate(scenes.followers, { user })

  handleEndReached = () => this.props.fetchUsersPage()

  extractKey = item => `user-${item.login}-${item.id}`

  renderUser = ({ item }) => (
    <UserRow user={item} onPress={this.createUserRowPressHandler(item)} />
  )

  renderFooter = () => (
    <View style={styles.footerContainer}>
      <Spinner />
    </View>
  )

  render() {
    const { isLoading, users, error } = this.props

    if (isLoading && !users.length && !error) {
      return <Spinner />
    }

    if (error) {
      return <Error label={error} />
    }

    return (
      <List
        data={users}
        renderItem={this.renderUser}
        keyExtractor={this.extractKey}
        ListFooterComponent={
          this.props.isLoading && users.length && this.renderFooter
        }
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0.2}
      />
    )
  }
}
