import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'ecc72771158c4f09ae03d04087b36cbf',
  }
})