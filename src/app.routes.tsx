import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import {decodeToken} from "react-jwt";

const isAccessAllowed = () => {
    const token = localStorage.getItem("token");
    if (token) {
        const user = decodeToken(token);
        if (user) return true
    }

    return false;
}

// ======= private route ======= //
const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return true ? (
    <Suspense fallback={<div />}>
      <div><Element /></div>
    </Suspense>
  ) : (
    <Navigate to={"/"} />
  );
};

// ======= public route ======= //
const PublicRoute: FC<{ element: any }> = ({ element: Element }) => (
  <Suspense fallback={<div />}>
    <Element />
  </Suspense>
);

// ======= pages ======= //
// const UsersPage = React.lazy(() => import("app/users"));
// const HomePage = React.lazy(() => import("app/home"));
const ProductsPage = React.lazy(() => import("./app/products"));
const AuthPage = React.lazy(() => import("./app/auth"));


const AppRoutes = () => {
  return (
    <Routes>
        {/*PUBLIC*/}
        <Route path={"products/*"} element={<PublicRoute element={ProductsPage} />}/>
        <Route path={"auth/*"} element={<PublicRoute element={AuthPage} />}/>
        {/*/!* PRIVATE *!/*/}
      {/*/!* DEFAULT *!/*/}
        <Route path={"*"} element={<Navigate to="/products" />}/>
    </Routes>
  );
};

export default AppRoutes;
