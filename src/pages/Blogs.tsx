import React, { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Avatar,
  Divider,
} from '@mui/material';
import {
  Search,
  FilterList,
  AccessTime,
  Person,
  Article,
  TrendingUp,
  Code,
  Analytics,
  Psychology,
  Launch,
} from '@mui/icons-material';
import { SelectChangeEvent } from '@mui/material/Select';
import SEOHead from '../components/common/SEOHead';

// Sample blog data
const blogPosts = [
  {
    id: '1',
    title: 'Understanding Machine Learning Model Interpretability',
    excerpt: 'Exploring techniques like SHAP and LIME to make ML models more transparent and trustworthy for business stakeholders.',
    content: 'Deep dive into model interpretability techniques and their practical applications...',
    category: 'machine-learning',
    tags: ['ML', 'Interpretability', 'SHAP', 'LIME'],
    author: 'Your Name',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    featured: true,
    image: '/api/placeholder/600/300',
  },
  {
    id: '2',
    title: 'Building Scalable Data Pipelines with Apache Airflow',
    excerpt: 'A comprehensive guide to creating robust, scalable data pipelines that can handle enterprise-level data processing.',
    content: 'Learn how to build production-ready data pipelines...',
    category: 'data-engineering',
    tags: ['Airflow', 'Data Pipelines', 'ETL', 'Python'],
    author: 'Your Name',
    publishDate: '2024-01-10',
    readTime: '12 min read',
    featured: true,
    image: '/api/placeholder/600/300',
  },
  {
    id: '3',
    title: 'Advanced Feature Engineering Techniques for Time Series',
    excerpt: 'Discover advanced feature engineering methods that can significantly improve your time series forecasting models.',
    content: 'Explore cutting-edge feature engineering approaches...',
    category: 'time-series',
    tags: ['Time Series', 'Feature Engineering', 'Forecasting'],
    author: 'Your Name',
    publishDate: '2024-01-05',
    readTime: '10 min read',
    featured: false,
    image: '/api/placeholder/600/300',
  },
  {
    id: '4',
    title: 'The Future of AI in Business Intelligence',
    excerpt: 'How artificial intelligence is revolutionizing business intelligence and what this means for data professionals.',
    content: 'Examining the intersection of AI and BI...',
    category: 'ai-trends',
    tags: ['AI', 'Business Intelligence', 'Future Trends'],
    author: 'Your Name',
    publishDate: '2023-12-28',
    readTime: '6 min read',
    featured: false,
    image: '/api/placeholder/600/300',
  },
  {
    id: '5',
    title: 'Optimizing SQL Queries for Large Datasets',
    excerpt: 'Performance optimization techniques for SQL queries when working with massive datasets in production environments.',
    content: 'SQL optimization strategies for big data...',
    category: 'data-analysis',
    tags: ['SQL', 'Performance', 'Big Data', 'Database'],
    author: 'Your Name',
    publishDate: '2023-12-20',
    readTime: '9 min read',
    featured: false,
    image: '/api/placeholder/600/300',
  },
  {
    id: '6',
    title: 'Real-time Analytics with Apache Kafka and Stream Processing',
    excerpt: 'Building real-time analytics systems using Kafka streams and modern stream processing frameworks.',
    content: 'Real-time analytics architecture and implementation...',
    category: 'data-engineering',
    tags: ['Kafka', 'Stream Processing', 'Real-time', 'Analytics'],
    author: 'Your Name',
    publishDate: '2023-12-15',
    readTime: '11 min read',
    featured: true,
    image: '/api/placeholder/600/300',
  },
];

const categories = [
  { value: 'all', label: 'All Posts' },
  { value: 'machine-learning', label: 'Machine Learning' },
  { value: 'data-engineering', label: 'Data Engineering' },
  { value: 'data-analysis', label: 'Data Analysis' },
  { value: 'time-series', label: 'Time Series' },
  { value: 'ai-trends', label: 'AI Trends' },
];

const Blogs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFeatured = !showFeaturedOnly || post.featured;
      
      return matchesCategory && matchesSearch && matchesFeatured;
    });
  }, [selectedCategory, searchQuery, showFeaturedOnly]);

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'machine-learning':
        return <Psychology />;
      case 'data-engineering':
        return <Code />;
      case 'data-analysis':
        return <Analytics />;
      case 'time-series':
        return <TrendingUp />;
      case 'ai-trends':
        return <Article />;
      default:
        return <Article />;
    }
  };

  return (
    <>
      <SEOHead
        title="Blog - Your Name | Data Science Insights"
        description="Read my latest thoughts on data science, machine learning, and analytics. Practical insights and technical deep-dives."
        keywords="data science blog, machine learning, analytics, technical writing, insights"
      />
      
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Blog & Insights
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Thoughts, tutorials, and insights on data science, machine learning, and the latest trends 
            in analytics. Learn from real-world experiences and practical applications.
          </Typography>
        </Box>

        {/* Filters */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                InputProps={{
                  startAdornment: <Search sx={{ color: 'text.secondary', mr: 1 }} />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  value={selectedCategory}
                  label="Category"
                  onChange={handleCategoryChange}
                  startAdornment={<FilterList sx={{ color: 'text.secondary', mr: 1 }} />}
                >
                  {categories.map((category) => (
                    <MenuItem key={category.value} value={category.value}>
                      {category.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button
                  variant={showFeaturedOnly ? 'outlined' : 'contained'}
                  onClick={() => setShowFeaturedOnly(false)}
                >
                  All Posts
                </Button>
                <Button
                  variant={showFeaturedOnly ? 'contained' : 'outlined'}
                  onClick={() => setShowFeaturedOnly(true)}
                >
                  Featured
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Featured Posts Section */}
        {!showFeaturedOnly && (
          <Box sx={{ mb: 8 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
              Featured Articles
            </Typography>
            <Grid container spacing={4}>
              {blogPosts.filter(post => post.featured).slice(0, 3).map((post) => (
                <Grid item xs={12} md={4} key={post.id}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.2s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 4,
                      },
                    }}
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
                      <Box sx={{ color: 'primary.main', fontSize: '3rem' }}>
                        {getCategoryIcon(post.category)}
                      </Box>
                    </CardMedia>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Chip
                          label={categories.find(cat => cat.value === post.category)?.label}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                        <Chip label="Featured" size="small" color="secondary" sx={{ ml: 1 }} />
                      </Box>
                      
                      <Typography variant="h6" component="h3" gutterBottom>
                        {post.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {post.excerpt}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'text.secondary' }}>
                        <Person sx={{ fontSize: 16, mr: 0.5 }} />
                        <Typography variant="caption" sx={{ mr: 2 }}>
                          {post.author}
                        </Typography>
                        <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                        <Typography variant="caption" sx={{ mr: 2 }}>
                          {post.readTime}
                        </Typography>
                        <Typography variant="caption">
                          {new Date(post.publishDate).toLocaleDateString()}
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {post.tags.slice(0, 3).map((tag) => (
                          <Chip
                            key={tag}
                            label={tag}
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
            <Divider sx={{ my: 6 }} />
          </Box>
        )}

        {/* All Posts Section */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4 }}>
            {showFeaturedOnly ? 'Featured Articles' : 'All Articles'}
          </Typography>
          
          <Grid container spacing={4}>
            {filteredPosts.map((post) => (
              <Grid item xs={12} md={6} key={post.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: 3,
                    },
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box sx={{ color: 'primary.main', mr: 1 }}>
                        {getCategoryIcon(post.category)}
                      </Box>
                      <Chip
                        label={categories.find(cat => cat.value === post.category)?.label}
                        size="small"
                        variant="outlined"
                      />
                      {post.featured && (
                        <Chip label="Featured" size="small" color="primary" sx={{ ml: 1 }} />
                      )}
                    </Box>
                    
                    <Typography variant="h6" component="h3" gutterBottom>
                      {post.title}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      {post.excerpt}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'text.secondary' }}>
                      <Avatar sx={{ width: 24, height: 24, fontSize: '0.75rem', mr: 1 }}>
                        YN
                      </Avatar>
                      <Typography variant="caption" sx={{ mr: 2 }}>
                        {post.author}
                      </Typography>
                      <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                      <Typography variant="caption" sx={{ mr: 2 }}>
                        {post.readTime}
                      </Typography>
                      <Typography variant="caption">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                        />
                      ))}
                    </Box>

                    <Button
                      variant="text"
                      endIcon={<Launch />}
                      sx={{ alignSelf: 'flex-start' }}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* No results message */}
        {filteredPosts.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" color="text.secondary">
              No articles found matching your criteria.
            </Typography>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setShowFeaturedOnly(false);
              }}
              sx={{ mt: 2 }}
            >
              Clear Filters
            </Button>
          </Box>
        )}

        {/* Newsletter Signup */}
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
            Stay Updated
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 600, mx: 'auto' }}>
            Subscribe to get notified about new articles on data science, machine learning, and analytics insights.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="medium"
              sx={{ minWidth: 300 }}
            />
            <Button variant="contained" size="large">
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Blogs;