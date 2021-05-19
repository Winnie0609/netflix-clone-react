import styled from 'styled-components';

export const Container = styled.div``;

export const Overlay = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    margin: 0 20px;
`

export const Inner = styled.div`
    position: relative;
    width: 100%;
    max-width: 900px;
    margin: auto;
    
    video {
        height: 100%;
        width: 100%;
    }
`

export const Close = styled.button`
    position: absolute;
    right: 22px;
    top: 15px;
    width: 22px;
    height: 22px;
    opacity: 1;
    border: 0;
    cursor: pointer;
    background-color: transparent;
`
export const Button = styled.button`
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
    margin-top: 20px;
    cursor: pointer;
    transition: background-color: 0.5s ease;

    &:hover {
        background: rgba(230,230,230,0.8);
    }
`