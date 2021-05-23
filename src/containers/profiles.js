import React from "react"
import { Header, Profiles } from "../components"
import * as ROUTES from "../constants/routes"

function SelectProfileContainer({ user, setProfile }) {
    return(
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo
                        src={`${process.env.PUBLIC_URL}/images/misc/logo.png`}
                        to={ROUTES.HOME}
                        alt="Netflix"/> 
                </Header.Frame>
            </Header>
        
            <Profiles>
                <Profiles.Title>Who is Watching?</Profiles.Title> 
                <Profiles.List>
                        <Profiles.User 
                            onClick={() => setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL
                            })}
                        >
                        <Profiles.Picture src={user.photoURL}/>
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}

export { SelectProfileContainer }