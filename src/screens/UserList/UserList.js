import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

import { Spinner } from 'components'

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

  render() {
    const { isLoading, users } = this.props

    if (isLoading) {
      return <Spinner />
    }

    return <Text>List of users - {users.length}</Text>
  }
}
