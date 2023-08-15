import React from 'react';
import { Box, Typography } from '@mui/material';
import Icon from '../assets/icons/gyms.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Box
    type='button' 
    alignItems="center"
    justifyContent='center'
    className='bodyPart-card'
    display='flex'
    flexDirection='row'
    sx=
    {{
        borderTop: bodyPart===item? '4px solid #ff2625':'',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width:'270px',
        height:'280px',
        cursor:'pointer',
        gap:'47px',
        display:'flex'
    }}  
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}  
    >
        <img src={Icon} alt='dumbbell' style ={{width :'150px' ,height :'150px' }}/>
        <Typography fontFamily='Alegreya' fontSize ='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize '>
            {item}
        </Typography>
    </Box>
  )
}

export default BodyPart
