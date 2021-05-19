import React, { useState, useContext } from "react"
import { useHistory } from 'react-router-dom';
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from "../containers/footer"
import { FirebaseContext } from "../context/firebase"
import { Form } from "../components"
import * as ROUTES from "../constants/routes"

function Signup({ children, ...RestProps }){
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)

    const [ firstName, setFirstName ] = useState("")
    const [ emailAddress, setEmailAddress ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ error, setError ] = useState("")
    
    const isInvalid = firstName === "" || emailAddress === "" || password === ""

    const handleSignup = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) => 
                result.user
                .updateProfile({
                    displayName: firstName,
                    photoURL: Math.floor(Math.random() * 4 ) + 1
                })
                .then(() => {
                    
                    history.push(ROUTES.BROWSE)
                })
                ).catch((error) =>{
                    setPassword("")
                    setError("")
                    setError(error.message)
                    setEmailAddress("")    
                } 
                    )
    }
    
    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input 
                            placeholder="First Name"
                            value={firstName}
                            onChange = {({ target })=> setFirstName(target.value)}
                        />

                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />

                        <Form.Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            autocomplete="off"
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit disabled={isInvalid}type="submit">
                            Sign Up
                        </Form.Submit>

                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign in now.</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>

                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}

export default Signup
