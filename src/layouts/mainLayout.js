import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundary from '../components/common/errorBoundary';
import { privateRoutes } from '../routes';
import Header from '../pages/header';
import Progress from '../components/common/progress';

function MainLayout() {
  return (
    <div>
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={<Progress />}>
          {
            privateRoutes.map(({ path, exact, component }) => (
              <Route key={path} path={path} exact={exact} component={component} />
            ))
          }
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default MainLayout;
