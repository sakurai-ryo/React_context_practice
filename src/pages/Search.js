import React, { useEffect, useContext } from 'react'
import Layout from '../components/Layout/Layout.js'
import { useLocation } from 'react-router-dom'
import { fetchSearchResult } from '../apis/request.js'
import { Store } from '../store/index.js'

import VideoGrid from '../components/VideoGrid/VideoGrid.js'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem.js'

const Search = () => {

  const location = useLocation()
  const { globalState, setGlobalState } = useContext(Store)

  const setSearchResult = async () => {
    const searchParam = new URLSearchParams(location.search)
    const query = searchParam.get('query')
    if(query) {
      const data = await fetchSearchResult(query)
      const params = {
        type: 'SET_SEARCHED',
        payload: {
          searched: data.items
        }
      }
      setGlobalState(params)
    }
  }

  useEffect(() => {
    setSearchResult()
  }, [location.search])

  return (
    <Layout>
      <VideoGrid>
        {
          globalState.searched ? globalState.searched.map((searched) => {
            return (
              <VideoGridItem
              id={searched.id.videoId}
              key={searched.id.videoId}
              src={searched.snippet.thumbnails.medium.url}
              title={searched.snippet.title}
              />
            )
          }) : ( <span>NO Data</span> )
        }
      </VideoGrid>
    </Layout>
  )
}

export default Search
