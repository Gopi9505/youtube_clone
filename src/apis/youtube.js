import axios from 'axios';

const KEY = 'AIzaSyBgC4iTMYO1HUHcFePS2PsQY-GCX-YN_z8';

export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
       part: 'snippet',
       type: 'videos',
       maxResults: 5,
       key: KEY
  }
});