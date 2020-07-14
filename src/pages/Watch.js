import React, { useEffect, useContext } from 'react'
import { Store } from '../store/index.js'
import { useLocation } from 'react-router-dom'

import Layout from '../components/Layout/Layout.js'
import VideoDetail from '../components/VideoDetail/VideoDetail.js'
import SideList from '../components/SideList/SideList.js'
import { fetchRelatedData, fetchSelectedData } from '../apis/request.js'

const Watch = () => {

  const { globalState, setGlobalState} = useContext(Store)
  const location = useLocation()

  const setVideos = async () => {
    const searchParam = new URLSearchParams(location.search)
    const id = searchParam.get('v')
    if(id) {
      const [selected, related] = await Promise.all([fetchSelectedData(id), fetchRelatedData(id)])
      console.log("select =>", selected)
      const selectedParams = {
        type: 'SET_SELECTED',
        payload: {
          selected: selected.items.shift()
        }
      }
      setGlobalState(selectedParams)
      const relatedParams = {
        type: 'SET_RELATED',
        payload: {
          related: related.items
        }
      }
      setGlobalState(relatedParams)
    }
  }

  useEffect(() => {
    setVideos()
  }, [location.search])

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}

export default Watch
