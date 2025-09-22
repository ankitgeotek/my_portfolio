import React from 'react';
import {
  Chip,
  Tooltip,
} from '@mui/material';

interface SkillChipProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  category?: string;
  onClick?: () => void;
  size?: 'small' | 'medium';
  variant?: 'filled' | 'outlined';
}

const SkillChip: React.FC<SkillChipProps> = ({
  name,
  level,
  category,
  onClick,
  size = 'small',
  variant = 'outlined',
}) => {
  const getLevelColor = (level?: string) => {
    switch (level) {
      case 'expert':
        return 'success';
      case 'advanced':
        return 'primary';
      case 'intermediate':
        return 'warning';
      case 'beginner':
        return 'secondary';
      default:
        return 'default';
    }
  };

  const chipComponent = (
    <Chip
      label={name}
      size={size}
      variant={variant}
      color={getLevelColor(level) as any}
      onClick={onClick}
      sx={{
        '&:hover': onClick ? {
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        } : undefined,
        cursor: onClick ? 'pointer' : 'default',
      }}
    />
  );

  if (level || category) {
    const tooltipTitle = [
      category && `Category: ${category}`,
      level && `Level: ${level}`,
    ].filter(Boolean).join(' • ');

    return (
      <Tooltip title={tooltipTitle} arrow>
        {chipComponent}
      </Tooltip>
    );
  }

  return chipComponent;
};

export default SkillChip;