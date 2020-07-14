import React from 'react'
import Youtube from 'react-youtube'
import Style from './VideoPlay.module.scss'

const VideoPlay = ({ id }) => {
  return (
    <div>
      <Youtube className={Style.wrap} videoId={id}/>
    </div>
  )
}

export default VideoPlay
