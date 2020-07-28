import React, { useState } from 'react'
import styles from "./HomeVideoPlayer.module.css"
import Youtube from "react-youtube"

export default function HomeVideoPlayer() {
    const [state, setState] = useState(0)
    
    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    const handleClick = () => {
        setState(1)
    }

    const opts = {
        height: '800',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          mute:1,
          allow:"autoplay; fullscreen"
        },
      };

    return (
        <div className={styles.container}>
            <div onClick={handleClick} className={styles.player}>
                <div className={styles.player_container}>
                    {state === 0 ?
                    <div className={styles.play_button}>
                            <i class="fa fa-play-circle" aria-hidden="true"></i>
                    </div>
                    :
                    <Youtube videoId="B0uYcxvPf1A" opts={opts} onReady={_onReady} />
                    }
                </div>
            </div>
        </div>
    )
}
