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
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/ankitgeotek', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/kaushal-ankit/', label: 'LinkedIn' },
    { icon: <Twitter />, url: 'https://x.com/ankitgeotek', label: 'Twitter' },
    { icon: <Email />, url: 'mailto:ankitgeotek@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Blog', to: '/blogs' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        py: 3, // Reduced from 6 to 3
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={2}> {/* Reduced from 4 to 2 */}
          {/* Main Footer Content - Single Row Layout */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2, // Reduced from 4 to 2
            }}
          >
            {/* Left Section - Name and Title (Compact) */}
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                Ankit Kumar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Data Scientist & ML Engineer
              </Typography>
            </Box>

            {/* Center Section - Quick Links (Horizontal) */}
            <Box 
              sx={{ 
                display: { xs: 'none', sm: 'flex' }, 
                gap: 3,
                alignItems: 'center'
              }}
            >
              {quickLinks.map((link) => (
                <MuiLink 
                  key={link.label}
                  component={Link} 
                  to={link.to} 
                  color="text.secondary" 
                  underline="hover"
                  sx={{ fontSize: '0.875rem' }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>

            {/* Right Section - Resume and Social Links */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 2,
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              <MuiLink
                href="https://drive.google.com/file/d/1VDgld_3PeUGdVGnrLPtPI137W1ylxJy5/view?usp=sharing"
                download
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.5,
                  color: 'primary.main',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                <FileDownload fontSize="small" />
                Resume
              </MuiLink>

              {/* Social Media Links */}
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    component="a"
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    size="small" // Made icons smaller
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
            </Box>
          </Box>

          <Divider sx={{ my: 1 }} /> {/* Reduced margin */}

          {/* Bottom Section - Copyright and Mobile Links */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 1, // Reduced gap
            }}
          >
            {/* Mobile Quick Links */}
            <Box 
              sx={{ 
                display: { xs: 'flex', sm: 'none' }, 
                gap: 2,
                mb: { xs: 1, sm: 0 }
              }}
            >
              {quickLinks.map((link) => (
                <MuiLink 
                  key={link.label}
                  component={Link} 
                  to={link.to} 
                  color="text.secondary" 
                  underline="hover"
                  sx={{ fontSize: '0.75rem' }}
                >
                  {link.label}
                </MuiLink>
              ))}
            </Box>

            {/* Copyright */}
            <Typography 
              variant="body2" 
              color="text.secondary" 
              textAlign="center"
              sx={{ fontSize: '0.75rem' }} // Smaller copyright text
            >
              © {new Date().getFullYear()} Ankit Kumar. All rights reserved.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;