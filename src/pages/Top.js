import React, {
  useEffect,
  useContext
} from "react";
import Layout from "../components/Layout/Layout.js";
import {
  fetchPopularData
} from "../apis/request.js";
import {
  Store
} from '../store/index.js'

import VideoGrid from '../components/VideoGrid/VideoGrid.js'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem.js'

const Top = () => {

  const {globalState, setGlobalState} = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((data) => {
      const params = {
        type: 'SET_POPULAR',
        payload: {
          popular: data.items
        }
      }
      console.log("items =>", data.items);
      setGlobalState(params)
    });
  }, []);

  return (
    <Layout>
      <VideoGrid>
        {
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title} />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
};

export default Top;
