import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon'/>
                <input placeholder="Search" type='text' />
            </div>
        <div className="widgets__widgetContainer">
            <h2>What's Happenin'</h2>

            <TwitterTweetEmbed tweetId={"1428054147161628672"} />

            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="NintendoAmerica"
                options={{ height: 400}}
            />

            <TwitterShareButton
                url={"https://themojoworks.com"}
                options={{ text: "Check out my porfolio!", via:"oblivionoath11"}}
                />
        </div>
        </div>
    )
}

export default Widgets