import React, { useState, useContext, createContext} from "react"
import ReactDOM from "react-dom"
import { Container, Overlay, Inner, Button, Close } from "./styles/player"

export const PlayerContext = createContext()

function Player({ children, ...restProps }) {
    const [showPlayer, setShowPlayer] = useState(false)
    
    return(
        <PlayerContext.Provider value={{showPlayer, setShowPlayer}}>
            <Container {...restProps}>{children}</Container>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    
    return showPlayer
        ? ReactDOM.createPortal(
            <Overlay onClick={() => setShowPlayer(false)}>
                <Inner>
                    <video id="netflix-player" controls>
                        <source src={`${process.env.PUBLIC_URL}/images/video/tiger-king.mp4`} type="video/mp4" />
                    </video>
                    <Close>
                        <i className="far fa-times-circle" style={{fontSize:"25px", color:"#fff"}}></i>
                    </Close>
                </Inner>
            </Overlay>,
            document.body
        ) : null;
}

Player.Button = function PlayerButton({ ...restProps }) {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext);
    
    return <Button onClick={() => setShowPlayer(!showPlayer)}><i className="fas fa-play" style={{marginRight:"15px", paddingTop:"3px", paddingLeft:"10px", fontSize:"15px"}}></i>Play</Button>;
}

export default Player