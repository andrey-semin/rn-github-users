import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'

import { Spinner, List, UserRow } from 'components'
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
    fetchUsersPage: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetchUsersPage()
  }

  createUserRowPressHandler = user => () =>
    this.props.navigation.navigate('Followers', { user })

  renderUser = ({ item }) => (
    <UserRow
      user={item}
      key={`user-${item.login}-${item.id}`}
      onPress={this.createUserRowPressHandler(item)}
    />
  )

  renderFooter = () => (
    <View style={styles.footerContainer}>
      <Spinner />
    </View>
  )

  handleEndReached = () => this.props.fetchUsersPage()

  render() {
    const { isLoading, users } = this.props

    if (isLoading && !users.length) {
      return <Spinner />
    }

    return (
      <List
        data={users}
        renderItem={this.renderUser}
        ListFooterComponent={
          this.props.isLoading && users.length && this.renderFooter
        }
        onEndReached={this.handleEndReached}
        onEndReachedThreshold={0.2}
      />
    )
  }
}
