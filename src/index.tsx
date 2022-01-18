import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import './index.css';
import Routes from './Routes'
import { Provider } from 'react-redux'
import { Store } from 'redux'
import configureStore from './Store'
import { IApplicationState } from './Store'

interface IProps {
  store: Store<IApplicationState>
}
const Root: React.FC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <Route />
    </Provider>
  )
}

const store = configureStore()
ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
