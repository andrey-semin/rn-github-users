import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Spinner, List } from 'components'
import { UserRow } from './components'

export default class UserList extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired,
    fetchUsersList: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    users: PropTypes.array
  }

  componentDidMount() {
    this.props.fetchUsersList()
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

  render() {
    const { isLoading, users } = this.props

    if (isLoading) {
      return <Spinner />
    }

    return <List data={users} renderItem={this.renderUser} />
  }
}
