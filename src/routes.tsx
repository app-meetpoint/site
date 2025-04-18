import {
  Route,
  Routes as RouterDomRoutes,
  BrowserRouter,
} from "react-router-dom";

import { RoutesConfig } from "application/constant";

const Routes = () => (
  <BrowserRouter>
    <RouterDomRoutes>
      {RoutesConfig.map((route, index) => {
        const Component = route.component;

        return <Route key={index} path={route.path} element={<Component />} />;
      })}
    </RouterDomRoutes>
  </BrowserRouter>
);

export default Routes;
