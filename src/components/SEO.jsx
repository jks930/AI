import { useEffect } from 'react';

const SEO = ({ title, description, canonical }) => {
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
  }, [title, description, canonical]);

  return null;
};

export default SEO;
