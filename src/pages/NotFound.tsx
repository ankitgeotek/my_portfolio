import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  useTheme,
} from '@mui/material';
import {
  Home,
  ArrowBack,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';

const NotFound: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <SEOHead
        title="Page Not Found - Your Name | Data Scientist"
        description="The page you're looking for doesn't exist. Return to the homepage to explore my data science portfolio."
      />
      
      <Container maxWidth="md">
        <Box
          sx={{
            minHeight: '70vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            py: 8,
          }}
        >
          {/* 404 Illustration */}
          <Box
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 700,
              lineHeight: 1,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: 'text',
              textFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: 2,
            }}
          >
            404
          </Box>

          <Typography variant="h3" component="h1" gutterBottom>
            Page Not Found
          </Typography>

          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ mb: 4, maxWidth: 600 }}
          >
            Oops! It looks like the page you're searching for doesn't exist. 
            It might have been moved, deleted, or you entered the wrong URL.
          </Typography>

          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ mb: 6 }}
          >
            Don't worry, even the best data scientists encounter unexpected results sometimes!
          </Typography>

          {/* Action Buttons */}
          <Stack 
            direction={{ xs: 'column', sm: 'row' }} 
            spacing={2}
            sx={{ mb: 4 }}
          >
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              startIcon={<Home />}
              sx={{ minWidth: 160 }}
            >
              Go Home
            </Button>
            
            <Button
              onClick={() => navigate(-1)}
              variant="outlined"
              size="large"
              startIcon={<ArrowBack />}
              sx={{ minWidth: 160 }}
            >
              Go Back
            </Button>
          </Stack>

          {/* Helpful Links */}
          <Box>
            <Typography variant="subtitle1" gutterBottom>
              Or explore these sections:
            </Typography>
            <Stack 
              direction="row" 
              spacing={2} 
              justifyContent="center"
              flexWrap="wrap"
              useFlexGap
            >
              <Button
                component={Link}
                to="/about"
                color="inherit"
                size="small"
              >
                About Me
              </Button>
              <Button
                component={Link}
                to="/projects"
                color="inherit"
                size="small"
              >
                My Projects
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                size="small"
              >
                Contact
              </Button>
            </Stack>
          </Box>

          {/* Fun Data Science Quote */}
          <Box
            sx={{
              mt: 6,
              p: 3,
              borderRadius: 2,
              backgroundColor: 'action.hover',
              maxWidth: 500,
            }}
          >
            <Typography variant="body2" fontStyle="italic" color="text.secondary">
              "In God we trust, all others must bring data." - W. Edwards Deming
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;