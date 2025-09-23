import React from 'react';
import myPic from '../assets/my_pic_01.jpeg'; // adjust relative path
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  useTheme,
} from '@mui/material';
import {
  Analytics,
  Code,
  TrendingUp,
  Launch,
  GitHub,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import SEOHead from '../components/common/SEOHead';

const Home: React.FC = () => {
  const theme = useTheme();

  const skills = [
    'Python', 'Machine Learning', 'Data Analysis', 'SQL', 
    'TensorFlow', 'Pandas', 'Scikit-learn', 'Plotly'
  ];

  const featuredProjects = [
    {
      title: 'Customer Churn Prediction',
      description: 'ML model to predict customer churn with 94% accuracy',
      tech: ['Python', 'XGBoost', 'Pandas'],
      icon: <TrendingUp />,
    },
    {
      title: 'Sales Forecasting Dashboard',
      description: 'Interactive dashboard for real-time sales analytics',
      tech: ['Python', 'Plotly', 'Streamlit'],
      icon: <Analytics />,
    },
    {
      title: 'NLP Sentiment Analysis',
      description: 'Analyze customer sentiment from reviews and feedback',
      tech: ['Python', 'NLTK', 'Transformers'],
      icon: <Code />,
    },
  ];

  return (
    <>
      <SEOHead
        title="Ankit Kumar - Data Scientist Portfolio"
        description="Experienced Data Scientist specializing in machine learning, data analysis, and predictive modeling. View my projects and expertise."
        keywords="data scientist, machine learning, python, analytics, portfolio"
      />
      
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            py: { xs: 8, md: 12 },
          }}
        >
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={3}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
                    fontWeight: 700,
                    lineHeight: 1.2,
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Hello, I'm Ankit Kumar
                </Typography>
                
                <Typography variant="h5" color="text.secondary" gutterBottom>
                  Data Scientist | IIT Bombay Alum | Expert in ML, DL, AI, NLP
                </Typography>
                
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{ maxWidth: 600, lineHeight: 1.6 }}
                >
                  I transform complex data into actionable insights and build intelligent 
                  systems that drive business growth. Passionate about machine learning, 
                  statistical analysis, and creating data-driven solutions.
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, my: 2 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      variant="outlined"
                      size="small"
                      sx={{
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'primary.contrastText',
                        },
                      }}
                    />
                  ))}
                </Box>
                
                <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
                  <Button
                    component={Link}
                    to="/projects"
                    variant="contained"
                    size="large"
                    startIcon={<Launch />}
                    sx={{ borderRadius: 2 }}
                  >
                    View My Work
                  </Button>
                  <Button
                    component="a"
                    href="https://github.com/ankitgeotek"
                    target="_blank"
                    variant="outlined"
                    size="large"
                    startIcon={<GitHub />}
                    sx={{ borderRadius: 2 }}
                  >
                    GitHub
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  src= {myPic}  // Use src prop instead
                  alt="Ankit Kumar"   
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    fontSize: '4rem',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                >
                  Ankit Kumar
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Featured Projects Section */}
        <Box sx={{ py: 8 }}>
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
            Featured Projects
          </Typography>
          
          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      {project.icon}
                      <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                        {project.title}
                      </Typography>
                    </Box>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      {project.description}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {project.tech.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              component={Link}
              to="/projects"
              variant="outlined"
              size="large"
              sx={{ borderRadius: 2 }}
            >
              View All Projects
            </Button>
          </Box>
        </Box>

        {/* Call to Action Section */}
        <Box
          sx={{
            py: 8,
            px: 4,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}15, ${theme.palette.secondary.main}15)`,
            textAlign: 'center',
            mb: 8,
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom>
            Let's Work Together
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
            I'm always interested in new opportunities and exciting data science projects. 
            Let's discuss how we can turn your data into valuable insights.
          </Typography>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            size="large"
            sx={{ borderRadius: 2 }}
          >
            Get In Touch
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
