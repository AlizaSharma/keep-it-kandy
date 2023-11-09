import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable fixed="top" inverted borderless>
        <Menu.Item>
          <img alt="logo" src='https://fedandfit.com/wp-content/uploads/2019/10/Halloween-Candy-Fed-and-Fit-3.jpg' />
        </Menu.Item>

        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          Home
        </Menu.Item>

        <Menu.Item
          name='store'
          active={activeItem === 'store'}
          onClick={this.handleItemClick}
        >
          Store
        </Menu.Item>

        <Menu.Item
          name='sign-in'
          active={activeItem === 'sign-in'}
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
        <Menu.Item
          name='sign-up'
          active={activeItem === 'sign-up'}
          onClick={this.handleItemClick}
        >
          Sign-up
        </Menu.Item>
        <Menu.Item
          name='cart'
          active={activeItem === 'cart'}
          onClick={this.handleItemClick}
        >
          Cart
        </Menu.Item>
      </Menu>
    )
  }
}
