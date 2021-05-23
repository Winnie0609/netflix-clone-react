import React from "react"
import { Container, Title, List, Item, Name, Picture } from "./styles/profiles"

function Profiles({ children, ...restProps }) {
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.List = function ProfilesList({ children, ...restProps }) {
    return <List {...restProps}>{children}</List>
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>
}

Profiles.Name = function ProfilesName({ children, ...restProps }) {
    return <Name {...restProps}>{children}</Name>
}

Profiles.Picture = function ProfilesPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`${process.env.PUBLIC_URL}/images/users/${src}.png`} />
}
export default Profiles