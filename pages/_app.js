import App from 'next/app';
import {Provider} from 'react-redux';
import store from './store';
import withRedux from "next-redux-wrapper";
import React from 'react';
import axios from "axios";
import { setUser } from './action/authActions';

if (typeof(window)  !== "undefined") {
    if (localStorage.getItem("jwtToken")) {
        var token = localStorage.getItem("jwtToken");
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        // store.dispatch(setUser())
    }
  }

class MyApp extends App {

    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

        //Anything returned here can be accessed by the client
        return {pageProps: pageProps};
    }
    
    render() {
        const {Component, pageProps, store} = this.props;
        
        return (
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        );
    }

}

const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);