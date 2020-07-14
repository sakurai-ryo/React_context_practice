import axios from 'axios'
import { API_KEY, URL } from '../config/config.js'

const youtube = axios.create({
  baseURL: URL
})

const options = {
  part: 'snippet',
  maxResults: 40,
  key: API_KEY,
  regionCode: 'JP',
  type: 'video',
}

export const fetchPopularData = async () => {
  const params = {
    params: {
      ...options,
      chart: 'mostPopular',
    },
  }
  const { data } = await youtube.get('/videos', params)
  return data;
};

export const fetchSelectedData = async (id) => {
  const params = {
    params: {
      ...options,
      id
    }
  }
  const { data } = await youtube.get('/videos', params)
  return data
}

export const fetchRelatedData = async (id) => {
  const params = {
    params: {
      ...options,
      relatedToVideoId: id
    }
  }
  const { data } = await youtube.get('/search', params)
  return data
}

export const fetchSearchResult = async (query) => {
  const params = {
    params: {
      ...options,
      q: query
    }
  }
  const { data } = await youtube.get('/search', params)
  return data
}
