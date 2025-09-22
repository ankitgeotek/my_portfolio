import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Alert,
  Stack,
  Divider,
  CircularProgress,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
  Twitter,
  Send,
} from '@mui/icons-material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import SEOHead from '../components/common/SEOHead';

// Form validation schema
const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  subject: yup.string().required('Subject is required').min(5, 'Subject must be at least 5 characters'),
  message: yup.string().required('Message is required').min(20, 'Message must be at least 20 characters'),
});

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(schema),
  });

  const contactInfo = [
    {
      icon: <Email />,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <LocationOn />,
      title: 'Location',
      value: 'San Francisco, CA',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedIn />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: '#0077b5',
    },
    {
      icon: <GitHub />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: '#333',
    },
    {
      icon: <Twitter />,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: '#1da1f2',
    },
    {
      icon: <Email />,
      name: 'Email',
      url: 'mailto:your.email@example.com',
      color: '#ea4335',
    },
  ];

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call - replace with your actual contact form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend or email service
      console.log('Form data:', data);
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact - Your Name | Data Scientist"
        description="Get in touch with me for data science opportunities, collaborations, or questions about my work."
        keywords="contact, data scientist, collaboration, hire, consultation"
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Get In Touch
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            I'm always interested in new opportunities, collaborations, and interesting projects. 
            Let's discuss how we can work together to turn data into valuable insights.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
            <Card sx={{ p: 2 }}>
              <CardContent>
                <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
                  Send me a message
                </Typography>

                {submitStatus === 'success' && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! I'll get back to you as soon as possible.
                  </Alert>
                )}

                {submitStatus === 'error' && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    There was an error sending your message. Please try again or contact me directly via email.
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        {...register('name')}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        {...register('email')}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        {...register('subject')}
                        error={!!errors.subject}
                        helperText={errors.subject?.message}
                        disabled={isSubmitting}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        multiline
                        rows={6}
                        {...register('message')}
                        error={!!errors.message}
                        helperText={errors.message?.message}
                        disabled={isSubmitting}
                        placeholder="Tell me about your project, question, or how we can work together..."
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={isSubmitting}
                        startIcon={isSubmitting ? <CircularProgress size={20} /> : <Send />}
                        sx={{ minWidth: 150 }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={4}>
            <Stack spacing={4}>
              {/* Contact Info Card */}
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Contact Information
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Feel free to reach out through any of these channels
                  </Typography>
                  
                  <Stack spacing={3}>
                    {contactInfo.map((info, index) => (
                      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                          sx={{
                            color: 'primary.main',
                            mr: 2,
                            minWidth: 40,
                            display: 'flex',
                            justifyContent: 'center',
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography variant="subtitle2" color="text.secondary">
                            {info.title}
                          </Typography>
                          {info.link ? (
                            <Typography
                              component="a"
                              href={info.link}
                              variant="body2"
                              sx={{ textDecoration: 'none', color: 'text.primary' }}
                            >
                              {info.value}
                            </Typography>
                          ) : (
                            <Typography variant="body2">{info.value}</Typography>
                          )}
                        </Box>
                      </Box>
                    ))}
                  </Stack>
                </CardContent>
              </Card>

              {/* Social Links Card */}
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2" gutterBottom>
                    Connect With Me
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Follow my work and connect on social media
                  </Typography>
                  
                  <Grid container spacing={2}>
                    {socialLinks.map((social, index) => (
                      <Grid item xs={6} key={index}>
                        <Button
                          component="a"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          fullWidth
                          startIcon={social.icon}
                          sx={{
                            justifyContent: 'flex-start',
                            textTransform: 'none',
                            '&:hover': {
                              backgroundColor: `${social.color}15`,
                              borderColor: social.color,
                            },
                          }}
                        >
                          {social.name}
                        </Button>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>

              {/* Availability Card */}
              <Card sx={{ background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05), rgba(220, 0, 78, 0.05))' }}>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Current Availability
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    I'm currently available for new projects and opportunities.
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      What I'm looking for:
                    </Typography>
                    <ul style={{ paddingLeft: 20, margin: 0 }}>
                      <li><Typography variant="body2">Data Science Consulting</Typography></li>
                      <li><Typography variant="body2">Machine Learning Projects</Typography></li>
                      <li><Typography variant="body2">Full-time Opportunities</Typography></li>
                      <li><Typography variant="body2">Collaborative Research</Typography></li>
                    </ul>
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary">
                    <strong>Response time:</strong> Usually within 24 hours
                  </Typography>
                </CardContent>
              </Card>

              {/* FAQ Card */}
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Quick Questions
                  </Typography>
                  
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      What's your hourly rate?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      My rates vary depending on the project scope and duration. Let's discuss your specific needs.
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" gutterBottom>
                      Do you work remotely?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Yes, I work with clients worldwide and am comfortable with remote collaboration.
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 2 }} />

                  <Box>
                    <Typography variant="subtitle2" gutterBottom>
                      What industries do you work with?
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      I have experience in fintech, healthcare, e-commerce, and SaaS companies.
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Stack>
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 8,
            py: 6,
            px: 4,
            textAlign: 'center',
            borderRadius: 4,
            background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.1), rgba(220, 0, 78, 0.1))',
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Ready to Start a Project?
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Whether you need data analysis, machine learning models, or strategic insights, 
            I'm here to help you make data-driven decisions that drive results.
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button
              component="a"
              href="mailto:your.email@example.com"
              variant="contained"
              size="large"
              startIcon={<Email />}
            >
              Email Me Directly
            </Button>
            <Button
              component="a"
              href="/resume.pdf"
              download
              variant="outlined"
              size="large"
            >
              Download Resume
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Contact;