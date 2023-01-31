import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../components/Album';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          PMBA 2025 Elections Campaign
        </Typography>
        <Album/>
      </Box>
    </Container>
  );
}
