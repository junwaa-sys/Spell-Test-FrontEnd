import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import store from './App/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain="tohora-2023-joon.au.auth0.com"
    clientId="0tCJtNl7S1CxvO9qQQFw3m0LoBk5ZDfz"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: 'https://spell-test/',
    }}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
