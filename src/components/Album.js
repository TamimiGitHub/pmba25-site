import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Zoey from '../images/zoey.jpg';



const positions = ["VP Internal", "VP External", "VP Events", "VP Finance", "President"]
const candidates = {
  "VP Internal": ["Angus Fudge", "Meghan Smith", "Melissa Duff"],
  "VP External": ["Sophia Faria", "Rohan Chary"],
  "VP Events": ["Éire Gorman", "Yvonne Htun"],
  "VP Finance": ["Felix Cheu", "Zoey Wu"],
  "President": ["Tamimi Ahmad", "Fortune Umeugo", "Kiana Pomponio"]
}
const images = {
  "Angus Fudge": "https://media.licdn.com/dms/image/D5603AQFJyHSC8Nf06w/profile-displayphoto-shrink_400_400/0/1665343232172?e=1680739200&v=beta&t=FRDPUd4DweVmQKEbAPIRsuIGdPwJ1xa3xFt7us_RRf0",
  "Meghan Smith": "https://media.licdn.com/dms/image/D5603AQHklrUb2n6_Dg/profile-displayphoto-shrink_400_400/0/1674960750420?e=1680739200&v=beta&t=B9I2btwB9BwZ0nrrpLtsd2aQBIpsKiMQ1K83UI65iKA",
  "Melissa Duff": "https://static.vecteezy.com/system/resources/previews/009/749/643/original/woman-profile-mascot-illustration-female-avatar-character-icon-cartoon-girl-head-face-business-user-logo-free-vector.jpg",
  "Sophia Faria": "https://media.licdn.com/dms/image/C5603AQGktxlskzpVZw/profile-displayphoto-shrink_800_800/0/1658010729624?e=1680739200&v=beta&t=7Vv2qIiOZJlGaByjY-9eMFmYtrwKEpzMgiIYDTnLZGs",
  "Rohan Chary": "https://media.licdn.com/dms/image/D5603AQHE2xcSY3SvZQ/profile-displayphoto-shrink_800_800/0/1674070214927?e=1680739200&v=beta&t=4kF-RRYm5imiuFmZC4ERIchhv4cRFhWOakNoobBhsBA",
  "Éire Gorman": "https://media.licdn.com/dms/image/D5603AQHBRla-Gii19A/profile-displayphoto-shrink_800_800/0/1674192101474?e=1680739200&v=beta&t=ldiWCls3CiW02eq1QHq2t2tDiJCCL9JYclmGDdRvKP0",
  "Yvonne Htun": "https://media.licdn.com/dms/image/D5603AQGX3016UZWwZw/profile-displayphoto-shrink_800_800/0/1674065124241?e=1680739200&v=beta&t=AiUFZcs0YSNr8QsozN6BjsQRq4uWl2rr9duGV2Xoe2I",
  "Felix Cheu": "https://media.licdn.com/dms/image/D5603AQG5Lm7srfVHJQ/profile-displayphoto-shrink_800_800/0/1670353868051?e=1680739200&v=beta&t=VrdRq3pzQTB7drg3i-pJIHjVkYj14z5zC_ac0whoyHA",
  "Zoey Wu": Zoey,
  "Tamimi Ahmad": "https://media.licdn.com/dms/image/D5603AQEv3nhwh8Pf0Q/profile-displayphoto-shrink_800_800/0/1674064474944?e=1680739200&v=beta&t=2cx_f80oBcwq0r4EnhkSy2XYXjk5DurOK0gZGuTENew",
  "Fortune Umeugo": "https://media.licdn.com/dms/image/D5603AQHkyV-9ECA2QA/profile-displayphoto-shrink_800_800/0/1674153722392?e=1680739200&v=beta&t=lTrlMpPpVYIaf8fzejeckdau-QSqEhsvo2GnuJPUuIQ",
  "Kiana Pomponio": "https://media.licdn.com/dms/image/C4E03AQE1XTtXfYAmgg/profile-displayphoto-shrink_800_800/0/1591732331211?e=1680739200&v=beta&t=bVeXpptDV2NI_sWxdijkoZbGVOGaalDbnWRH9BlwEKA"
}

const tagLines = {
  "Angus Fudge": "tagline goes here",
  "Meghan Smith": "tagline goes here",
  "Melissa Duff": "tagline goes here",
  "Sophia Faria": "tagline goes here",
  "Rohan Chary": "tagline goes here",
  "Éire Gorman": "tagline goes here",
  "Yvonne Htun": "tagline goes here",
  "Felix Cheu": "I will be a great 'asset' to the team",
  "Zoey Wu": "Every Dollar Well Spent",
  "Tamimi Ahmad": "Together We'll Flourish",
  "Fortune Umeugo": "Your Agenda. My Agenda",
  "Kiana Pomponio": "tagline goes here"
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        {positions.map((position) => (
          <div>
            <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 2,
              pb: 0,
            }}
            >
              <Container maxWidth="l">
                <Typography
                  component="h1"
                  variant="h2"
                  align="center"
                  color="text.primary"
                >
                  {position}
                </Typography>
              </Container>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={2}>
            {candidates[position].map((candidate) => (
              <Grid item key={candidate} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image = {images[candidate]}
                    alt={candidate}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {candidate}
                    </Typography>
                    <Typography>
                      "{tagLines[candidate]}"
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
          </div>
        ))}
      </main>
    </ThemeProvider>
  );
}