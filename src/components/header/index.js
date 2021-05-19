import React, { useState } from "react"
import { Link as ReachRouterLink } from "react-router-dom"
import { 
    Background, 
    Container, 
    Logo, 
    ButtonLink, 
    Group, 
    Link, 
    Text, 
    Feature, 
    FeatureCallOut ,
    PlayButton,
    InfoButton,
    Span,
    Search,
    SearchIcon,
    SearchInput,
    Profile,
    Dropdown,
    Picture,
} from "./styles/header"

function Header({ bg= true, children, ...restProps }){
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...restProps }){
    return(
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }){
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }){
    const [ searchActive, setSearchActive ] = useState(false)
    
    return(
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <i className="fas fa-search"  style={{marginTop:"10px",marginRight:"20px"}}></i>
            </SearchIcon>

            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search files and series"
                active={searchActive}
            />
        </Search>
    ) 
}

Header.Link = function HeaderLink({ children, ...restProps }){
    return <Link {...restProps}>{children}</Link>
}

Header.Text = function HeaderText({ children, ...restProps }){
    return <Text {...restProps}>{children}</Text>
}

Header.Feature = function HeaderFeature({ children, ...restProps }){
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }){
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.InfoButton = function HeaderInfoButton({ children, ...restProps }){
    return <InfoButton {...restProps}>{children}</InfoButton>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Span = function HeaderSpan({ children, ...restProps }){
    return <Span {...restProps}>{children}</Span>
}

Header.Profile = function HeaderProfile({ children, ...restProps }){
    return <Profile {...restProps}>{children}</Profile>
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }){
    return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Picture = function HeaderPicture({ src, ...restProps }){
    return <Picture {...restProps} src={`/images/users/${src}.png`}/>
}

export default Header