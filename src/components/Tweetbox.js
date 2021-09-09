import React, { useState } from 'react'
import './Tweetbox.css'
import { Avatar, Button } from '@material-ui/core'
import morty from './images/morty.jpg'
import db from './firebase'


const Tweetbox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault()

        db.collection('posts').add({
            displayName: 'Morty Smith',
            username: 'Jessicaslove',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://images.app.goo.gl/vrqW5jmdBM6E4dTWA"
        })

        setTweetMessage("")
        setTweetImage("")
    }
    

    

    return (
        <div className="tweetBox">
           <form>
            <div className="tweetBox__input">
                <Avatar src={morty}></Avatar>
                <input 
                onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetMessage} 
                placeholder="What's happening?. . . man. . ." 
                type="text"></input>
            </div>
            <input 
            onChange={(e) => setTweetImage(e.target.value)}
            value={tweetImage}
            className="tweetBox__imageInput"
            placeholder="Enter image URL"
             type="text" 
             />
            <Button 
            onClick={sendTweet} 
            type="submit" 
            className="tweetBox__button">Tweet</Button>
           </form> 
        </div>
    )
}

export default Tweetbox