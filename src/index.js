import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import { App } from './app'
import { rootReducer } from './root-reducer'
import { configureStore } from './configureStore'
import { sagas } from './sagas'
import './assets/styles/custom.scss'
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

const { store, history } = configureStore(rootReducer, sagas)

const render = (Component) => {
  const root = document.getElementById('root')

  /* istanbul ignore next */
  if (root) {
    ReactDOM.render(
      <AppContainer>
        <Component store={store} history={history} />
      </AppContainer>,
      root,
    )
  }
}

render(App)

if (module.hot) {
  module.hot.accept('./app', () => render(App))
}
