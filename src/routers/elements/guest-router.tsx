import { Route, Routes, Navigate } from 'react-router-dom';
import { RouterPath } from 'routers/router-path';
import { HomePage } from 'pages/home-page';
import { SignInPage } from 'pages/sign-in-page';
import { SignUpPage } from 'pages/sign-up-page';

export function GuestRouter() {
  const routers = [
    {
      path: RouterPath.home,
      component: <HomePage />,
    },
    {
      path: RouterPath.signIn,
      component: <SignInPage />,
    },
    {
      path: RouterPath.signUp,
      component: <SignUpPage />,
    },
  ];

  return (
    <Routes>
      {routers.map((router) => (
        <Route
          key={router.path.toString()}
          path={router.path}
          element={router.component}
        />
      ))}
      <Route path="*" element={<Navigate to={RouterPath.home} replace />} />
    </Routes>
  );
}
