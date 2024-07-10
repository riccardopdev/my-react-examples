import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = (pageName: string) => {
  const location = useLocation();

  useEffect(() => {
    window.gtag('event', 'page_view', {
      page_path: location.pathname + location.search + location.hash,
      page_search: location.search,
      page_hash: location.hash,
      page_title: pageName,
    });
  }, [location, pageName]);
};

export default usePageTracking;
