import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Album from '../components/Album';
import {Helmet} from "react-helmet";

export default function Index() {
  return (
    <Container maxWidth="lg">
      <Helmet>
        <title>PMBA25</title>
        <meta name="description" content="PMBA 2025 Elections Campaign"/>
        <meta property="og:title" content="Updated!!"/>
        <meta property="og:title" content="PMBA25 Elections"/>
        <meta property="og:description" content="PMBA 2025 Elections Campaign"/>
        <meta property="og:image" itemProp="image" content="https://d30mzt1bxg5llt.cloudfront.net/public/uploads/images/_signatoryLogo/UBC-Sauder-Full-Colour-JPEG-web.jpg"/>
        <link rel="icon" type="image/png" href="https://cdn-icons-png.flaticon.com/512/2097/2097443.png" sizes="16x16" />
      </Helmet>
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
