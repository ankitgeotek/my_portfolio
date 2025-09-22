import React from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import {
  GitHub,
  LinkedIn,
  Email,
  Twitter,
  FileDownload,
} from '@mui/icons-material';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/yourusername', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    { icon: <Email />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Main Footer Content */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 4,
            }}
          >
            {/* Left Section - Name and Title */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Your Name
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Data Scientist & Machine Learning Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Transforming data into actionable insights
              </Typography>
            </Box>

            {/* Right Section - Quick Links and Resume */}
            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Quick Links
              </Typography>
              <Stack spacing={1} sx={{ mb: 2 }}>
                <MuiLink href="/about" color="text.secondary" underline="hover">
                  About Me
                </MuiLink>
                <MuiLink href="/projects" color="text.secondary" underline="hover">
                  Projects
                </MuiLink>
                <MuiLink href="/contact" color="text.secondary" underline="hover">
                  Contact
                </MuiLink>
              </Stack>
              <MuiLink
                href="/resume.pdf"
                download
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'primary.main',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <FileDownload fontSize="small" />
                Download Resume
              </MuiLink>
            </Box>
          </Box>

          <Divider />

          {/* Bottom Section - Social Links and Copyright */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: 'action.hover',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            {/* Copyright */}
            <Typography variant="body2" color="text.secondary" textAlign="center">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
