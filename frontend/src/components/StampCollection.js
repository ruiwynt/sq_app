import * as React from 'react';
import australia from '../images/australia.png'
import singapore from '../images/singapore.png'
import malaysia from '../images/malaysia.png'
import {
  Stack,
  Typography,
  Box,
} from '@mui/material';


function StampCollection() {
  return (
    <div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Box>
          <img src={malaysia} alt="Malaysia 2023" />
          <Box 
            sx={{
              border: 10,
              borderColor: 'primary.main'
            }}
          >
            <Typography>
              Malaysia 2023
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src={singapore} alt="Singapore 2023" />
          <Box 
            sx={{
              border: 10,
              borderColor: 'primary.main'
            }}
          >
            <Typography>
              Singapore 2023
            </Typography>
          </Box>
        </Box>
        <Box>
          <img src={australia} alt="Australia 2023" />
          <Box 
            sx={{
              border: 10,
              borderColor: 'primary.main'
            }}
          >
            <Typography>
              Australia 2023
            </Typography>
          </Box>
        </Box>
      </Stack>
    </div>
  )
}
export default StampCollection;