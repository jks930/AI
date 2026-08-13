import { useEffect } from 'react';

const SEO = ({ title, description, canonical, noIndex = false, schemas }) => {
  useEffect(() => {
    // Update the document title
    if (title) {
      document.title = title;
    }

    // Update the meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
      }
    }

    // Update or create robots tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    const robotsContent = noIndex ? 'noindex, nofollow' : 'index, follow';
    if (metaRobots) {
      metaRobots.setAttribute('content', robotsContent);
    } else {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      metaRobots.setAttribute('content', robotsContent);
      document.head.appendChild(metaRobots);
    }

    // Update or create canonical tag
    const canonicalUrl = canonical || `https://itmcdigital.com${window.location.pathname}${window.location.hash || ''}`;
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) {
      linkCanonical.setAttribute('href', canonicalUrl);
    } else {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      linkCanonical.setAttribute('href', canonicalUrl);
      document.head.appendChild(linkCanonical);
    }
    // Update or create schema tags
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(tag => tag.remove());
    if (schemas && schemas.length > 0) {
      schemas.forEach(schema => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, noIndex, schemas]);  return null;
};

export default SEO;
