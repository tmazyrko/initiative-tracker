import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<App />} />
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
