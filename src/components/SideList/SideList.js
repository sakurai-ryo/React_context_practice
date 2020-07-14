import React, { useContext } from 'react'
import Style from './SideList.module.scss'
import { Store } from '../../store/index.js'
import SideListItem from '../SideListItem/SideListItem.js'

const SideList = () => {

  const { globalState } = useContext(Store)

  return (
    <div className={Style.sidenav}>
      {
        globalState.related ? globalState.related.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          )
        }) : ( <span>No Data</span> )
      }
    </div>
  )
}

export default SideList
