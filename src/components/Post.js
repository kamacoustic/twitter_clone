import { Avatar} from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'
import React, { forwardRef } from 'react'
import morty from './images/morty.jpg'
import './Post.css'
import db from './firebase'


const Post = forwardRef(
    ({displayName, username, verified, text, image, avatar}, ref) => {

        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar src={morty} alt="avatar"></Avatar>
                </div>
                <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                           {verified && <VerifiedUserIcon className="post__badge" />}
                            {`@${username}`}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>

                <img src={image} alt='' />

                <div className="post__footer">
                    <ChatBubbleOutlineIcon style={{cursor:"pointer"}} fontSize="small" />
                    <RepeatIcon style={{cursor:"pointer"}} fontSize="small" />
                    <FavoriteBorderIcon style={{cursor:"pointer"}} fontSize="small" />
                    <PublishIcon style={{cursor:"pointer"}} fontSize="small" />
                </div>
                </div>
            </div>
        )
    }
)

export default Post