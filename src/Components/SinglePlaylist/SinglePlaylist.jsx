import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { youtubeGetAllvideosOfaPlaylist } from '../../API/Requests/Requests';
import { Box } from '@mui/material';
import fallback from './../../assets/images/dsMaths.jpg';
import { FaPlayCircle } from 'react-icons/fa';

const SinglePlaylist = () => {
  const { id } = useParams();
  const [videosList, setVideosList] = useState([]);
  const navigate = useNavigate();

  const handleNavigate = (videoId) => () => {
    if (videoId) {
      navigate(`/video/${videoId}`);
    }
  };

  useEffect(() => {
    (async () => {
      if (id) {
        const res = await youtubeGetAllvideosOfaPlaylist(id);
        setVideosList(res);
        console.log(res);
      }
    })();
  }, [id]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        p: '120px 0',
        m: '0 auto',
      }}
    >
      {videosList.map((item, key) => (
        <>
        <Box
          onClick={handleNavigate(item?.videoId)}
          key={key}
          sx={{
            width: '200px',
            height: '200px',
            background: `url(${item?.maxresThumbnail || fallback})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FaPlayCircle style={{ fontSize: '50px' }} />
        </Box>
        </>
      ))}
    </Box>
  );
};

export default SinglePlaylist;
