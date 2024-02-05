import React, {FC, PropsWithChildren, Suspense} from "react";
import {Box} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {Navigate, Route, Routes} from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({element: Element}) => {
    return (
        <Suspense
            fallback={
                <Box sx={{ display: "flex" }}>
                    <CircularProgress />
                </Box>
            }
        >
            <Element />
        </Suspense>
    );
};

const LogInPage = React.lazy(() => import("./login.page"));
const RegisterPage = React.lazy(() => import("./register.page"));

const AuthRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/register"} element={<Suspended element={RegisterPage} />} />
            <Route path={"/login"} element={<Suspended element={LogInPage} />} />
            {/*DEFAULT*/}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default AuthRoutes;