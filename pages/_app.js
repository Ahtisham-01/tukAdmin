import '../styles/globals.css'
import React from 'react'
import { Provider } from "react-redux"
import store from "../store/store"
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}
