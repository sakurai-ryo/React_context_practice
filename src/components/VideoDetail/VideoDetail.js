import React, { useContext } from 'react'
import { Store } from '../../store/index.js'
import Style from './VideoDetail.module.scss'
import Linkify from 'react-linkify'

import VideoPlay from '../VideoPlay/VideoPlay.js'

const VideoDetail = () => {

  const {globalState } = useContext(Store)

  return globalState.selected && globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id}/>
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>
    </div>
  ) : ( <span>No Data</span> )
}

export default VideoDetail
