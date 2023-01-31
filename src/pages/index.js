import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../components/Album';

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ 
        pt: 2,
        pr: 4,
        pb: 0,
        my: 8,
        }}>
          <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
              PMBA 2025 Elections Campaign
            </Typography>
          </Container>
        <Album/>
      </Box>
    </Container>
  );
}
