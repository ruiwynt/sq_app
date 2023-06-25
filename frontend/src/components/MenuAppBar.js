import * as React from 'react';
import { 
  AppBar, 
  Toolbar,
  Box, 
  Typography, 
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import { 
  AccountCircle, 
  Flight, 
  Search, 
  ShoppingCart,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const pages = [
  {
    title: 'Home', 
    path: '/'
  },
  {
    title: 'Menu',
    path: '/menu'
  },
  {
    title: 'Shop',
    path: '/shop' 
  },
  {
    title: 'FAQ', 
    path: '/faq'
  },
  {
    title: 'Assistance',
    path: '/assistance'
  }
]

function MenuAppBar() {
  const [profile, setProfile] = React.useState("passenger");
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleProfile = (event) => {
    if (profile === "passenger") {
      setProfile("crew")
      navigate("/tasks")
    } else {
      setProfile("passenger")
      navigate("/")
    }
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
              id="menu"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page.url} 
                  onClick={() => navigate(page.path)}
                >
                  <Typography textAlign="center">
                      {page.title}
                  </Typography>
                </MenuItem>
              ))}
          </Menu>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="search"
            sx={{ mr: 1 }}
          >
            <Search />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="shop-menu"
            sx={{ mr: 1 }}
          >
            <ShoppingCart />
          </IconButton>
          <Typography 
            variant="h6" 
            component="div" 
            alignItems="center"
            sx={{ flexGrow: 1 }}
          >
            <b>Scoot</b>
          </Typography>
          <Typography>
            {(profile === "passenger") ? (
              "Passenger"
            ) : (
              "Crew"
            )}
          </Typography>
          <IconButton
            size="large"
            aria-label="current user"
            aria-controls="menu-appbar"
            aria-haspopup="false"
            onClick={handleProfile}
            color="inherit"
          >
            {(profile === "passenger") ? (
              <AccountCircle />
            ) : (
              <Flight />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default MenuAppBar;