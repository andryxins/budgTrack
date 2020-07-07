import React, { Component } from 'react';

export default class HomePage extends Component {
  componentDidMount() {
    const { user, getAllTransactions, history } = this.props;
    if (!user) return history.replace('/authorisation');

    getAllTransactions();
  }
  render() {
    return <p>HomePage</p>;
  }
}
