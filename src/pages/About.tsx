import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  LinearProgress,
  Avatar,
  Chip,
  Stack,
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  Paper,
} from '@mui/material';
import {
  School,
  Work,
  Code,
  Analytics,
  Psychology,
  Storage,
  Cloud,
  TrendingUp,
} from '@mui/icons-material';
import SEOHead from '../components/common/SEOHead';

const About: React.FC = () => {
  const skills = [
    { name: 'Python', level: 95, category: 'Programming', icon: <Code /> },
    { name: 'Machine Learning', level: 90, category: 'ML/AI', icon: <Psychology /> },
    { name: 'Data Analysis', level: 92, category: 'Analytics', icon: <Analytics /> },
    { name: 'SQL', level: 88, category: 'Database', icon: <Storage /> },
    { name: 'TensorFlow/PyTorch', level: 85, category: 'Deep Learning', icon: <Psychology /> },
    { name: 'Statistical Analysis', level: 90, category: 'Statistics', icon: <TrendingUp /> },
    { name: 'Cloud Platforms (AWS/GCP)', level: 75, category: 'Cloud', icon: <Cloud /> },
    { name: 'Data Visualization', level: 88, category: 'Visualization', icon: <Analytics /> },
  ];

  const experience = [
    {
      title: 'Senior Data Scientist',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading data science initiatives, developing ML models for customer analytics, and mentoring junior data scientists.',
      achievements: [
        'Improved customer retention by 25% through predictive modeling',
        'Built real-time recommendation system serving 1M+ users',
        'Reduced model training time by 40% through optimization',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'Analytics Startup',
      period: '2020 - 2022',
      description: 'Developed end-to-end ML pipelines, performed statistical analysis, and created interactive dashboards.',
      achievements: [
        'Implemented A/B testing framework increasing conversion by 15%',
        'Automated reporting processes saving 20 hours/week',
        'Developed fraud detection model with 99.2% accuracy',
      ],
    },
    {
      title: 'Junior Data Analyst',
      company: 'Financial Services Corp',
      period: '2019 - 2020',
      description: 'Analyzed financial data, created reports, and supported business intelligence initiatives.',
      achievements: [
        'Identified $2M cost savings through data analysis',
        'Created automated risk assessment dashboard',
        'Improved data quality processes by 30%',
      ],
    },
  ];

  const education = [
    {
      degree: 'M.S. in Data Science',
      school: 'University of Technology',
      period: '2017 - 2019',
      details: 'Focus on Machine Learning and Statistical Analysis',
    },
    {
      degree: 'B.S. in Computer Science',
      school: 'State University',
      period: '2013 - 2017',
      details: 'Magna Cum Laude, Data Structures and Algorithms Focus',
    },
  ];

  const certifications = [
    'AWS Certified Machine Learning - Specialty',
    'Google Professional Data Engineer',
    'TensorFlow Developer Certificate',
    'Certified Analytics Professional (CAP)',
  ];

  return (
    <>
      <SEOHead
        title="About - Your Name | Data Scientist"
        description="Learn about my background, skills, and experience in data science, machine learning, and analytics."
        keywords="data scientist, background, experience, skills, machine learning"
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            A passionate data scientist with 5+ years of experience transforming complex data 
            into actionable business insights through advanced analytics and machine learning.
          </Typography>
        </Box>

        {/* Personal Introduction */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
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
              technology, finance, and healthcare, helping organizations unlock the value hidden in their data.
            </Typography>
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              My journey began with a curiosity about patterns and numbers, which led me to pursue advanced 
              degrees in data science and computer science. Today, I specialize in building scalable machine 
              learning systems, conducting statistical analyses, and creating data-driven solutions that 
              directly impact business outcomes.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              When I'm not analyzing data, you can find me contributing to open-source projects, writing 
              technical blogs, or exploring the latest developments in AI and machine learning. I'm always 
              excited to collaborate on challenging problems that push the boundaries of what's possible with data.
            </Typography>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Technical Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skill, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: 'primary.main', mr: 1 }}>
                        {skill.icon}
                      </Box>
                      <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">{skill.name}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {skill.category}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {skill.level}%
                      </Typography>
                    </Box>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Experience Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Professional Experience
          </Typography>
          <Timeline position="alternate">
            {experience.map((exp, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary" sx={{ p: 1.5 }}>
                    <Work />
                  </TimelineDot>
                  {index < experience.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} sx={{ p: 3, mb: 2 }}>
                    <Typography variant="h5" component="h3" gutterBottom>
                      {exp.title}
                    </Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {exp.period}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {exp.description}
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom>
                      Key Achievements:
                    </Typography>
                    <ul>
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>
                          <Typography variant="body2" color="text.secondary">
                            {achievement}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>

        {/* Education Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Education
          </Typography>
          <Grid container spacing={4}>
            {education.map((edu, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <School color="primary" sx={{ mr: 2 }} />
                      <Box>
                        <Typography variant="h6">{edu.degree}</Typography>
                        <Typography variant="subtitle1" color="primary">
                          {edu.school}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {edu.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2">
                      {edu.details}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Certifications Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ mb: 4 }}>
            Certifications
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {certifications.map((cert, index) => (
              <Chip
                key={index}
                label={cert}
                variant="outlined"
                sx={{ mb: 1, fontSize: '0.9rem', py: 2 }}
              />
            ))}
          </Stack>
        </Box>

        {/* Call to Action */}
        <Box
          sx={{
            textAlign: 'center',
            py: 6,
            px: 4,
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(220, 0, 78, 0.1))',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Let's Connect
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            I'm always open to discussing new opportunities, collaborating on interesting projects, 
            or simply chatting about the latest trends in data science and machine learning.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
