import React from 'react';
import { Header, Products, SingleProduct } from './components'
import { graphql } from '@apollo/client/react/hoc'
import { categoriesAndCurrencies } from './queries/queries';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
          title: '',
          currency: '',
          isModalOpen: false,
          isCurrencySwitcherOpen: false
      }
    }

    componentDidMount = () => {
      console.log('did mount')
      this.userData = JSON.parse(localStorage.getItem('user'))
      if (localStorage.getItem('user')) {
        this.setState({
            title: this.userData.title,
            id: this.userData.id,
            currency: this.userData.currency
        })
    } else {
        this.setState({
            title: '',
            id: '',
            currency: ''
        })
    }
    }

    componentWillUpdate = (nextProps, nextState) => {
      localStorage.setItem('user', JSON.stringify(nextState))
  }

    componentWillReceiveProps = (nextProps) => {
      if (nextProps && this.state.currency === '' && this.state.title === '') {
          console.log('will')
          this.setState({
              title: nextProps.data.categories[0].name,
              currency: nextProps.data.currencies[0].symbol
          })
      }

    }

    changeCategory = (category) => {
      this.setState({
        title: category
      })
    }

    openModal = () => {

      if (this.state.isModalOpen === false) {
          this.setState({
              isModalOpen: true,
              isCurrencySwitcherOpen: false
          })
      } else {
          this.setState({
              isModalOpen:false
          })
      }
  }

  openCurrencySwitcher = () => {
    if (this.state.isCurrencySwitcherOpen === false) {
        this.setState({
          isCurrencySwitcherOpen: true,
          isModalOpen: false
        })
    } else {
        this.setState({
          isCurrencySwitcherOpen:false
        })
    }
  }

  setCurrency = (currency) => {
    this.setState({
        currency: currency
    })
    this.setState({
        isCurrencySwitcherOpen: false
    })
}

  render() {
    return (
      <>
        <Header
          isModalOpen={this.state.isModalOpen}
          openModal={this.openModal}
          changeCategory={this.changeCategory}
          categories={this.props.data.categories}
          category={this.state.title}
          currency={this.state.currency}
          currencies={this.props.data.currencies}
          openCurrencySwitcher={this.openCurrencySwitcher}
          isCurrencySwitcherOpen={this.state.isCurrencySwitcherOpen}
          setCurrency={this.setCurrency}
        />
        <Routes>
          <Route path='/' element={<Products
            category={this.state.title}
            currency={this.state.currency}
          />} />
          <Route path='/:id' element={<SingleProduct
          
          />} />
        </Routes>
      </>
    )
  }
}

export default graphql(categoriesAndCurrencies)(App);
