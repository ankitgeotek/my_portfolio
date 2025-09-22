import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import {
  GitHub,
  Launch,
  Visibility,
} from '@mui/icons-material';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
        },
      }}
      onClick={() => onClick(project)}
    >
      <CardMedia
        component="div"
        sx={{
          height: 200,
          background: 'linear-gradient(45deg, rgba(25, 118, 210, 0.1), rgba(220, 0, 78, 0.1))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" color="primary">
          {project.category.replace('-', ' ').toUpperCase()}
        </Typography>
      </CardMedia>
      
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
            {project.title}
          </Typography>
          {project.featured && (
            <Chip label="Featured" size="small" color="primary" />
          )}
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {project.description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {project.technologies.slice(0, 3).map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              variant="outlined"
            />
          ))}
          {project.technologies.length > 3 && (
            <Chip
              label={`+${project.technologies.length - 3}`}
              size="small"
              variant="outlined"
            />
          )}
        </Box>

        <Stack direction="row" spacing={1} justifyContent="flex-end">
          {project.githubUrl && (
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank');
              }}
            >
              <GitHub />
            </IconButton>
          )}
          {project.liveUrl && (
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl, '_blank');
              }}
            >
              <Launch />
            </IconButton>
          )}
          <IconButton size="small">
            <Visibility />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;