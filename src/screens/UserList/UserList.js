import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Spinner } from 'components'

export default class UserList extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired
    }).isRequired
  }

  render() {
    return <Spinner />
  }
}
