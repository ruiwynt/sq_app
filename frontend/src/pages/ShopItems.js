import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import axios from 'axios';


function ShopItems() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://127.0.0.1:8000/itemtypes')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {posts.map((post) => (
        <>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={post.name}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {post.category}
                  </Typography>
                  {post.description}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </>
      ))}
    </List>
  )
}
export default ShopItems;