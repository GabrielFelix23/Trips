import React from 'react'
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux'

import Routes from './router'
import Header from './components/Header'

import history from './Services/history'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header/>
        <Routes/>  
      </Router>
    </Provider>
  )
}