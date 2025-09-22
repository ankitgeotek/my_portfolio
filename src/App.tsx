  import React from 'react';
  import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
  import { ThemeProvider, CssBaseline, Container, Typography, AppBar, Toolbar, Button, Box, Grid, Card, CardContent, Chip, Avatar, Stack, useTheme } from '@mui/material';
  import { DarkMode, LightMode, Launch, GitHub, Analytics, TrendingUp, Code } from '@mui/icons-material';
  import { lightTheme, darkTheme } from './styles/theme';
  import { ThemeContextProvider, useThemeContext } from './hooks/useTheme';

  // Enhanced Home Component
  const HomePage: React.FC = () => {
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
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', py: { xs: 8, md: 12 } }}>
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
                  Hello, I'm Your Name
                </Typography>
                
                <Typography variant="h4" color="text.secondary" gutterBottom>
                  Data Scientist & ML Engineer
                </Typography>
                
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, lineHeight: 1.6 }}>
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
                  <Button variant="contained" size="large" startIcon={<Launch />}>
                    View My Work
                  </Button>
                  <Button variant="outlined" size="large" startIcon={<GitHub />}>
                    GitHub
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  sx={{
                    width: { xs: 200, md: 300 },
                    height: { xs: 200, md: 300 },
                    fontSize: '4rem',
                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  }}
                >
                  YN
                </Avatar>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Featured Projects Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
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
                    '&:hover': { transform: 'translateY(-4px)' },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'primary.main' }}>
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
                        <Chip key={tech} label={tech} size="small" variant="outlined" />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button variant="outlined" size="large" component={Link} to="/projects">
              View All Projects
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };

  // About Page Component  
  const AboutPage: React.FC = () => {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 6 }}>
          A passionate data scientist transforming complex data into actionable insights.
        </Typography>
        
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 200,
                  height: 200,
                  mx: 'auto',
                  mb: 2,
                  fontSize: '3rem',
                  background: 'linear-gradient(45deg, #1976d2, #dc004e)',
                }}
              >
                YN
              </Avatar>
              <Typography variant="h4" gutterBottom>
                Your Name
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Data Scientist & ML Engineer
              </Typography>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              I'm a passionate data scientist who believes in the power of data to drive meaningful change. 
              With over 5 years of experience in the field, I've worked across various industries including 
              technology, finance, and healthcare.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              My journey began with a curiosity about patterns and numbers, which led me to pursue advanced 
              degrees in data science and computer science. Today, I specialize in building scalable machine 
              learning systems and creating data-driven solutions.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              When I'm not analyzing data, you can find me contributing to open-source projects, writing 
              technical blogs, or exploring the latest developments in AI and machine learning.
            </Typography>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Technical Skills
          </Typography>
          <Grid container spacing={3}>
            {[
              { name: 'Python', level: 95, category: 'Programming' },
              { name: 'Machine Learning', level: 90, category: 'ML/AI' },
              { name: 'Data Analysis', level: 92, category: 'Analytics' },
              { name: 'SQL', level: 88, category: 'Database' },
              { name: 'TensorFlow', level: 85, category: 'Deep Learning' },
              { name: 'Statistical Analysis', level: 90, category: 'Statistics' },
            ].map((skill, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="h6">{skill.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {skill.category}
                    </Typography>
                    <Box sx={{ width: '100%', height: 8, backgroundColor: 'action.hover', borderRadius: 4 }}>
                      <Box
                        sx={{
                          width: `${skill.level}%`,
                          height: '100%',
                          backgroundColor: 'primary.main',
                          borderRadius: 4,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    );
  };

  // Projects Page Component  
  const ProjectsPage: React.FC = () => {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          My Projects
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Here are some of my data science and machine learning projects.
        </Typography>
        
        <Grid container spacing={4}>
          {[1, 2, 3, 4, 5, 6].map((project) => (
            <Grid item xs={12} md={6} lg={4} key={project}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h3" gutterBottom>
                    Project {project}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description of data science project {project}. This would include details about the problem solved, technologies used, and results achieved.
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <Chip label="Python" size="small" />
                    <Chip label="ML" size="small" />
                    <Chip label="Pandas" size="small" />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  };

  // Contact Page Component  
  const ContactPage: React.FC = () => {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          Let's discuss how we can work together on your next data science project.
        </Typography>
        
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Send me a message
                </Typography>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ flex: 1, height: 56, backgroundColor: 'action.hover', borderRadius: 1, display: 'flex', alignItems: 'center', px: 2 }}>
                      <Typography variant="body2" color="text.secondary">Your Name</Typography>
                    </Box>
                    <Box sx={{ flex: 1, height: 56, backgroundColor: 'action.hover', borderRadius: 1, display: 'flex', alignItems: 'center', px: 2 }}>
                      <Typography variant="body2" color="text.secondary">Email Address</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ height: 56, backgroundColor: 'action.hover', borderRadius: 1, display: 'flex', alignItems: 'center', px: 2 }}>
                    <Typography variant="body2" color="text.secondary">Subject</Typography>
                  </Box>
                  <Box sx={{ height: 120, backgroundColor: 'action.hover', borderRadius: 1, display: 'flex', alignItems: 'flex-start', p: 2 }}>
                    <Typography variant="body2" color="text.secondary">Your message...</Typography>
                  </Box>
                  <Button variant="contained" size="large" sx={{ alignSelf: 'flex-start' }}>
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Contact Information
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="body2">
                    📧 your.email@example.com
                  </Typography>
                  <Typography variant="body2">
                    📱 +1 (555) 123-4567
                  </Typography>
                  <Typography variant="body2">
                    📍 Your Location
                  </Typography>
                  <Typography variant="body2">
                    💼 LinkedIn: /in/yourprofile
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
  };

  // Navigation Component
  const Navbar: React.FC = () => {
    const { darkMode, toggleDarkMode } = useThemeContext();
    
    return (
      <AppBar position="fixed" elevation={1}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Data Scientist Portfolio
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/projects">Projects</Button>
            <Button color="inherit" component={Link} to="/contact">Contact</Button>
            <Button color="inherit" onClick={toggleDarkMode}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  };

  // App Content Component
  const AppContent: React.FC = () => {
    const { darkMode } = useThemeContext();

    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Router>
          <div className="App">
            <Navbar />
            {/* Spacer for fixed navbar */}
            <Toolbar />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route 
                  path="*" 
                  element={
                    <Container sx={{ py: 8 }}>
                      <Typography variant="h3">Page Not Found</Typography>
                      <Button component={Link} to="/">Go Home</Button>
                    </Container>
                  } 
                />
              </Routes>
            </main>
          </div>
        </Router>
      </ThemeProvider>
    );
  };

// Main App Component - exported only once
const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
};

export default App;