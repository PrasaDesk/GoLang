import { Suspense } from "react";
import {
  Navigate,
  Route,
  Routes as RoutesReactRouterDom,
} from "react-router-dom";
import { RouteConstants } from "../constants/RouteConstants";
import { Login } from "../components/Login";

export const Routes = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      {/* this are sample route this will get replace after an Login and signup implementation */}
      {true && (
        <>
          <RoutesReactRouterDom>
            <Route path={RouteConstants.ROUTE_LOGIN} element={<Login />} />
            <Route
              path={RouteConstants.ROUTE_SIGNUP}
              element={<p>Signup route</p>}
            />

            <Route
              path={"*"}
              element={<Navigate to={RouteConstants.ROUTE_LOGIN} />}
            />
          </RoutesReactRouterDom>
        </>
      )}
    </Suspense>
  );
};
