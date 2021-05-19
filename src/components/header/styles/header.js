import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: url(${({ src }) => (src ? `${process.env.PUBLIC_URL}/images/misc/${src}.jpg` : `${process.env.PUBLIC_URL}/images/misc/home-bg.jpg`)}) top left / cover no-repeat;
    
    @media (max-width: 1100px) {
        ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
    }
`

export const Container = styled.div`
    display: flex;
    margin: 0 56px;
    height: 64px;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;
    
    a {
        display: flex;
    }
    
    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const Link = styled.p`
    color: #fff;
    text-decoration: none;
    margin-right: 30px;
    font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
    cursor: pointer;
    
    &:hover {
        font-weight: bold;
    }
    // &:last-of-type {
    //     margin-right: 0;
    // }
`;

export const ButtonLink = styled(ReachRouterLink)`
    display: block;
    background-color: #e50914;
    width: 84px;
    height: fit-content;
    color: white;
    border: 0;
    font-size: 15px;
    border-radius: 3px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    
    &:hover {
        background: #f40612;
    }
`;

export const Logo = styled.img`
    height: 32px;
    width: 108px;
    margin-right: 40px;
    
    @media (min-width: 1449px) {
        height: 45px;
        width: 167px;
    }
`;

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const Span = styled.div`
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Group = styled.div`
    display: flex;
    align-items: center;

    ${Text} {
        font-size: 18px;
        // margin: 2px 25px  0 15px ;
        color: #333333;
        line-height: normal;
        text-shadow: none;
        font-weight: 600;
        cursor: pointer;
    }

    ${Span} {
        width: 200px
    }
`;

export const Feature = styled(Container)`
    padding: 150px 0 500px 0;
    flex-direction: column;
    align-items: normal;
    width: 50%;
    
    @media (max-width: 1100px) {
        display: none;
    }
`;

export const FeatureCallOut = styled.h2`
    color: white;
    font-size: 50px;
    line-height: normal;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const InfoButton = styled.button`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: rgba(105, 105, 105, 0.8);
    color: #fff;
    border-width: 0;
    padding: 13px 20px;
    border-radius: 5px;
    max-width: 150px;
    font-weight: bold;
    font-size: 15px;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color: 0.5s ease;
    
    &:hover {
        background: rgba(105, 105, 105, 0.5);
        color: white;
    }
`

export const PlayButton = styled.a`
    box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
    background-color: rgba(230,230,230,1);
    color: #000;
    border-width: 0;
    padding: 12px 30px 12px 20px;
    margin-right: 20px;
    border-radius: 5px;
    max-width: 300px;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    margin-top: 10px;
    cursor: pointer;
    transition: background-color: 0.5s ease;
    
    &:hover {
        background: rgba(230,230,230,0.8);
    }
`


export const Search = styled.div`
    display: flex;
    align-item: center;

    @media (max-width: 700px) {
        display: none;
    }
`

export const SearchIcon = styled.div`
    cursor: pointer;
`

export const SearchInput = styled.input`
    background-color: rgba(105, 105, 105, 0.3);
    color: #fff;
    border: 1px solid #fff;
    transition: width 0.5s;
    height: 30px;
    font-size: 14px;
    margin-left: ${({ active }) => (active === true ? '10px' : '0')};
    padding: ${({ active }) => (active === true ? '0 10px' : '0')};
    opacity: ${({ active }) => (active === true ? '1' : '0')};
    width: ${({ active }) => (active === true ? '200px' : '0px')};
`

export const Picture = styled.button`
    background: url(${({ src }) => src});
    background-size: contain;
    border: 0;
    width: 32px;
    height: 32px;
    cursor: pointer;
    border-radius: 3px;
`

export const Dropdown = styled.div`
    display: none;
    position: absolute;
    background-color: black;
    padding: 10px;
    width: 100px;
    top: 32px;
    right: 10px;

    ${Text} {
        color:#fff;
    }

    ${Group}:last-of-type ${Link} {
        width: 95px;
        cursor: pointer;
        text-align: center;
        padding: 15px 0;
        border-top: solid 1px #fff;
    }

    ${Group}:last-of-type ${Link}:hover {
        font-weight: 300;
        text-decoration: underline;
    }

    ${Group} {
        margin-bottom: 10px;
        padding-left: 5px;
        
        &:last-of-type {
            margin-bottom: 0;
        }
        
        ${Link}, ${Picture} {
            cursor: default;
            display: flex;
            flex-direction: column;
            margin-right: 10px;
        }

        ${Span} {
            flex-direction: column;
            
        }
    }

    button {
        margin-right: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 0;
        margin-top: 0;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    position: relative;

    button {
        cursor: pointer;
    }

    &:hover > ${Dropdown} {
        display: flex;
        flex-direction: column;
    }

   
`