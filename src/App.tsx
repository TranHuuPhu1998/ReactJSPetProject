import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes/routes';


const RenderApp = () => {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <Switch>
        {routes?.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={() => {
                return React.createElement(route.component);
              }}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <RenderApp />
    </Router>
  );
};

export default App;
