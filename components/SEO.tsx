
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  image = '/logo.png', // Default image
  type = 'website'
}) => {
  const location = useLocation();
  const siteUrl = 'https://luucka.com'; // Replace with actual domain
  const fullUrl = `${siteUrl}${location.pathname}`;
  const fullTitle = `${title} | LUUCKA`;

  useEffect(() => {
    // 1. Update Title
    document.title = fullTitle;

    // 2. Update Meta Tags
    const metaTags = [
      { name: 'description', content: description },
      
      // Open Graph / Facebook
      { property: 'og:type', content: type },
      { property: 'og:url', content: fullUrl },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: fullUrl },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(tag => {
      let element;
      if (tag.name) {
        element = document.querySelector(`meta[name="${tag.name}"]`);
      } else if (tag.property) {
        element = document.querySelector(`meta[property="${tag.property}"]`);
      }

      if (element) {
        element.setAttribute('content', tag.content!);
      } else {
        const newElement = document.createElement('meta');
        if (tag.name) newElement.setAttribute('name', tag.name);
        if (tag.property) newElement.setAttribute('property', tag.property);
        newElement.setAttribute('content', tag.content!);
        document.head.appendChild(newElement);
      }
    });

    // 3. Update Canonical Link
    let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (link) {
      link.setAttribute('href', fullUrl);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', fullUrl);
      document.head.appendChild(link);
    }

  }, [title, description, image, type, fullUrl, fullTitle]);

  return null;
};
