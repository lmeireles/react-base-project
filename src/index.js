import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import Reducers from './reducers'
import Root from './components/root'

import registerServiceWorker from './registerServiceWorker';

let store = createStore(Reducers)

render(
    <Root store={store} />, 
    document.getElementById('root')
);
registerServiceWorker();
