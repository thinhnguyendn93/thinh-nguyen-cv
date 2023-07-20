import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setLastLocation } from 'utils/store';
import { GuestRouter } from './elements/guest-router';
import { RouterPath } from './router-path';

export function AppRouter() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname != RouterPath.signIn) {
      setLastLocation(`${location.pathname}?${location.search}`);
    }
  }, [location.pathname]);

  return <GuestRouter />;
}
