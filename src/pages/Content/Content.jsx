import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from "react-redux";
import user from "./../../assets/images/userFallback.jpg";
import bg from "./../../assets/images/addVideoBg.avif";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { apiKey, channelId, youtubeGetAllvideosOfaPlaylist, youtubeGetPlaylists } from "../../API/Requests/Requests";
import PlaylistItem from "../../Components/PlaylistItem/PlaylistItem";

const AddVideo = () => {
    const auth = useSelector(state=>state.auth)
    const [videos, setVideos] = useState([]);
    const [videoId, setVideoId] = useState('qhU7XYkE_No');
    const [playlists, setPlaylists] = React.useState([])

  
    // useEffect(() => {
    //   const fetchVideos = async () => {
    //     try {
    //       // Fetch the uploads playlist ID
    //       const channelResponse = await axios.get(
    //         `https://www.googleapis.com/youtube/v3/channels`,
    //         {
    //           params: {
    //             part: 'contentDetails',
    //             id: channelId,
    //             key: apiKey,
    //           },
    //         }
    //       );
    //       console.log(channelResponse)
          
    //       const uploadsPlaylistId =
    //         channelResponse?.data?.items[0]?.contentDetails?.relatedPlaylists?.uploads;
  
    //       // Fetch videos from the uploads playlist
    //       const playlistResponse = await axios.get(
    //         `https://www.googleapis.com/youtube/v3/playlistItems`,
    //         {
    //           params: {
    //             part: 'snippet',
    //             playlistId: uploadsPlaylistId,
    //             maxResults: 50, // Adjust this as needed
    //             key: apiKey,
    //           },
    //         }
    //       );
    //       console.log(playlistResponse.data.items)
  
    //       setVideos(playlistResponse.data.items);
    //     } catch (error) {
    //       console.error('Error fetching YouTube data:', error);
    //     }
    //   };
  
    //   fetchVideos();
    // }, [channelId, apiKey]);

    // useEffect(() => {
    //   // Load the Iframe API script
    //   const tag = document.createElement('script');
    //   tag.src = "https://www.youtube.com/iframe_api";
    //   const firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
    //   // Initialize the player once the API script is loaded
    //   window.onYouTubeIframeAPIReady = () => {
    //     new window.YT.Player(playerRef.current, {
    //       height: '390',
    //       width: '640',
    //       videoId: videoId,
    //       events: {
    //         onReady: onPlayerReady,
    //         onStateChange: onPlayerStateChange,
    //       },
    //     });
    //   };
  
    //   // Optional: handle the player's ready event
    //   const onPlayerReady = (event) => {
    //     console.log('Player is ready');
    //   };
  
    //   // Optional: handle the player's state change event
    //   const onPlayerStateChange = (event) => {
    //     console.log('Player state changed', event.target.videoTitle);
    //   };
    // }, [videoId]);


    // useEffect(()=>{
    //    (async (username) => {
      
    //     const response = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${apiKey}`);
    //     const data = await response.json();
    //     console.log(data)
    //     if (data.items && data.items.length > 0) {
    //       const channelId = data.items[0].id;
    //       console.log('Channel ID:', channelId);
    //     } else {
    //       console.log('Channel not found');
    //     }
    //     console.log(data)
    //   })("@drakhterraza")
      
    // },[])

    // useEffect(()=>{
    //     (async()=>{
    //         const res =await youtubeGetAllvideosOfaPlaylist("PLzRi2Ammpcu2pNQvT8N_jBPxjQow-mGo-")
    //         console.log(res)
    //     })()
    // },[])



    React.useEffect(()=>{
      (async()=>{
          const res =await youtubeGetPlaylists(channelId)
          const data = res?.map(item=>{
            let description = item?.snippet?.description?item?.snippet?.description:item?.snippet?.localized?.title
            description=description.split("\n")[0]
            return {id:item.id, title:description, thumbnail:item?.snippet?.thumbnails?.maxres?.url}
          })
          console.log(data)
          setPlaylists(data)
      })()
  },[])

    return (
      <Box sx={{
        // backgroundImage: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)), url(${bg})`,
        // backgroundPosition: "center center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
      
      }}>
  
      <Box
        sx={{
          maxWidth: {
              md:"1200px",
          },
          margin: "0 auto",
          padding:{
              lg: "10vw 0",
              md: "2vw 1.5vw",
              xs:"3vw"
          },
          display:"flex",
          flexWrap:"wrap"
        }}
      >
        <Box sx={{
          display:"flex",
          gap:"2vw",
          flexWrap:"wrap", justifyContent:"space-around"
         
        }}>
       
       {
          playlists?.map((item, key)=> <PlaylistItem id={item?.id} key={key} src={item?.thumbnail} title={item?.title}/>)
          
        }
        </Box>
       
       


      </Box>
      </Box>
  
    );
}

export default AddVideo