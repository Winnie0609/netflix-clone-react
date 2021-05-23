import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyles } from "./global-style" 
import { FirebaseContext } from "./context/firebase" 

// import { seedDatabase } from './seed'

const config = {
    apiKey: "AIzaSyBRKW2LL6Y0fTW8BZe1djY6lHGS4CryUyk",
    authDomain: "netflix-clone-7b40c.firebaseapp.com",
    projectId: "netflix-clone-7b40c",
    storageBucket: "netflix-clone-7b40c.appspot.com",
    messagingSenderId: "358802132598",
    appId: "1:358802132598:web:87b1e2358828ed48ddd957"
}

const firebase = window.firebase.initializeApp(config)
// seedDatabase(firebase)

ReactDOM.render(
    <>
      <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyles/>
        <BrowserRouter basename="/netflix-clone-react">
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider> 
      </>,
  document.getElementById('root')
);

