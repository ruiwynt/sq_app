import React from 'react';
import { 
  Button, 
  Box,
} from '@mui/material';
import { useNavigate } from "react-router-dom";


const buttonImages = [
  {
    url: '../images/menu.png',
    title: 'Menu',
    path: '../menu'
  },
  {
    url: '../images/shop.png',
    title: 'Shop',
    path: '../shop'
  },
  {
    url: '../images/faq.png',
    title: 'FAQ',
    path: '../faq'
  },
  {
    url: '../images/assistance.png',
    title: 'Assistance',
    path: '../assistance'
  }
]


function MenuButtons() {
  const navigate = useNavigate();

  return (
    <Box alignItems="center" alignContent="center">
      {buttonImages.map((image) => (
        <Box>
          <Button 
            variant="contained"
            color="secondary" 
            sx={{ 
              minWidth: 300, 
              width: 7/10,
              height: 80,
              m:1,
            }}
            onClick={() => navigate(image.path)}
          >
          {image.title}
          </Button>
        </Box>
      ))}
    </Box>
  )
}
export default MenuButtons;