import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import NotFound from './components/not-found'
import Dashboard from './modules/gifs/dashboard'
import Favourite from './modules/gifs/favourite'
import withLayout from './hocs/with-layout'

export const App = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={withLayout(Dashboard)} />
        <Route exact path="/favourite" component={withLayout(Favourite)} />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>
)

App.propTypes = {
  history: PropTypes.object, // eslint-disable-line
  store: PropTypes.object, // eslint-disable-line
}
