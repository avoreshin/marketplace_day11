import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {SnackbarProvider} from "notistack";
import {Action, createStore} from "redux";
import {Provider} from "react-redux";
import {StoreState} from './types';

const defaultState = {
    orders: []
}
const reducer = (state = defaultState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "ADD_ORDER":
            return {...state, orders: [...state.orders, action.payload]}
        default:
            return state
    }
}

// @ts-ignore
const store = createStore<StoreState, Action<any>, unknown, unknown>(reducer)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLBRElement);
root.render(
    <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </SnackbarProvider>
);

