import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    
    if (url) updateMetaTag('og:url', url, true);
    if (image) updateMetaTag('og:image', image, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    if (image) updateMetaTag('twitter:image', image);

    // Additional SEO tags
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Your Name'); // Replace with your name
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');

    // Cleanup function to remove meta tags when component unmounts
    return () => {
      // Optional: Remove meta tags when component unmounts
      // This is usually not necessary for SPA applications
    };
  }, [title, description, keywords, image, url, type]);

  return null; // This component doesn't render anything
};

export default SEOHead;