
import axios from 'axios';
export const host = "http://localhost:5000/api/"
// export const host = "https://6z229h00-5000.inc1.devtunnels.ms/api/"
export const youtubeURl = "https://www.googleapis.com/youtube/v3/"
export const channelId = "UCMGXLIjKaoYdEK96s3qk_sw"
export const apiKey = 'AIzaSyAbBDD2WRQ_dAVqTpgFZL6SYn7J80lqCiY';



// const axiosInstance = axios.create({
//   baseURL: host,
// });

// // Adding request interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // If you need to add authorization token dynamically, you can do it here
//     const token = localStorage.getItem('authToken'); // or get the token from any other source
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// // Adding response interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     // Handle error response globally
//     console.error('Error:', error.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );




export const Post = async (url,data) => {
  try {
    const response = await axios.post(host+url, data);
    return response.data

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return error?.response?.data || error?.message
  }
};
export const Get = async (url,token) => {
    try {
      const response = await axios.get(host+url, token);
      return response.data
  
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return error?.response?.data || error?.message
    }
  };

  export const youtubeGetPlaylists = async () => {
    try {
      const playlistsResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlists`,
        {
          params: {
            part:"snippet,contentDetails,status, id, localizations, player",
            channelId: channelId,
            maxResults: 100,
            key: apiKey,
          },
        }
      );
  
      const playlists = playlistsResponse?.data?.items;
      return playlists;
    } catch (error) {
      console.error('Error fetching playlists:', error);
      return []; // Return an empty array or handle the error as needed
    }
  };




  export const youtubeGetAllvideosOfaPlaylist = async(playlistId)=>{
    try{
      const playlistResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems`,
        {
          params: {
            part: 'snippet',
            playlistId: playlistId,
            maxResults: 100, // Adjust this as needed
            key: apiKey,
          },
        }
      );
  
      const videos = playlistResponse.data.items;
     const data= videos.map((video) => {
        const videoId = video.snippet.resourceId.videoId;
        const maxresThumbnail = video.snippet.thumbnails?.maxres?.url || 'No maxres thumbnail available';
        return {videoId, maxresThumbnail}
      });
      return data
    }catch(error){
      console.log(error)
    }
     
  }
