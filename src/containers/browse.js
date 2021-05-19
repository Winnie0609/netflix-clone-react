import React, { useState, useContext, useEffect } from "react"
import Fuse from 'fuse.js';
import { Card, Header, Player } from "../components"
import { FirebaseContext } from "../context/firebase"
import { FooterContainer } from "./footer"
import { SelectProfileContainer } from "./profiles"
import * as ROUTES from "../constants/routes"


function BrowseContainer({ slides }) {
    const [category, setCategory] = useState('series');
    const [profile, setProfile] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [slideRows, setSlideRows] = useState([])

    const { firebase } = useContext(FirebaseContext);
    
    const user = {
        displayName: "Karl",
        photoURL: "1"
    };

    useEffect(()=>{
        setSlideRows(slides[category])
    },[slides, category])

    useEffect(()=>{
        const fuse = new Fuse(slideRows, {keys : ['data.decription', 'data.title', 'data.genre']})
        const results = fuse.search(searchTerm).map(({item}) => item)

        if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0){
            setSlideRows(results)
        } else {
            setSlideRows(slides[category])
        }

    }, [searchTerm])

    return profile.displayName ? (
        <>
            <Header src="extraction" dontShowOnSmallViewPort>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo 
                                to={ROUTES.HOME}
                                src="images/misc/logo.png"  
                                alt="Netflix"/>
                        
                        <Header.Link
                                active ={category === "series"? "true":"false"}
                                onClick={() => setCategory("series")}
                            >
                                Series
                            </Header.Link>

                        <Header.Link
                                active ={category === "films"? "true":"false"}
                                onClick={() => setCategory("films")}
                            >
                                Film
                        </Header.Link>
                    </Header.Group>

                    <Header.Group>
                            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        <Header.Span>
                            <Header.Text>KIDS</Header.Text>
                            <i className="fas fa-gift" style={{fontSize:"23px", cursor:"pointer"}}></i>
                            <i className="fas fa-bell" style={{fontSize:"22px", cursor:"pointer"}}></i>
                        </Header.Span>

                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL}/>
                                    <Header.Text>{user.displayName}</Header.Text>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Span>
                                        <Header.Link >Account</Header.Link>
                                        <Header.Link >Help Center</Header.Link>
                                        <Header.Link onClick={() => firebase.auth().signOut()}>Sign Out</Header.Link>
                                    </Header.Span>
                                </Header.Group>
                            </Header.Dropdown>
                        </Header.Profile>
                    
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                <Header.FeatureCallOut>Extraction</Header.FeatureCallOut>
                    <Header.Text>
                    A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible.
                    </Header.Text>
         
                    
                <Header.Span>
                    <Header.PlayButton target="blank_" href="https://www.youtube.com/watch?v=L6P3nI6VnlY&ab_channel=Netflix"><i className="fas fa-play" style={{marginRight:"15px", paddingTop:"3px", paddingLeft:"10px", fontSize:"15px"}}></i>Play</Header.PlayButton>
                    
                    <Header.InfoButton><i className="fas fa-info-circle"   style={{marginRight:"13px"}}></i>more info</Header.InfoButton>
                </Header.Span>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docid} item={item}>
                                    <Card.Image src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`} />

                                    <Card.Meta>
                                        <Card.Subtitle>{item.title}</Card.Subtitle>
                                        <Card.Text>{item.description}</Card.Text>
                                    </Card.Meta>
                            
                                </Card.Item>
                            ))}
                        </Card.Entities>

                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>       
            <FooterContainer />
        
    </>)
    : (<SelectProfileContainer user={user} setProfile={ setProfile }/>)
}

export { BrowseContainer }