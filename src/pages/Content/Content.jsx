import { Box} from "@mui/material";
import React from 'react';
import { channelId, youtubeGetPlaylists } from "../../API/Requests/Requests";
import PlaylistItem from "../../Components/PlaylistItem/PlaylistItem";

const AddVideo = () => {
    const [playlists, setPlaylists] = React.useState([])

    React.useEffect(()=>{
      (async()=>{
          const res =await youtubeGetPlaylists(channelId)
          const data = res?.map(item=>{
            let description = item?.snippet?.description?item?.snippet?.description:item?.snippet?.localized?.title
            description=description.split("\n")[0]
            return {id:item.id, title:description, thumbnail:item?.snippet?.thumbnails?.maxres?.url}
          })
          setPlaylists(data)
      })()
  },[])

    return (
      <Box sx={{
      
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