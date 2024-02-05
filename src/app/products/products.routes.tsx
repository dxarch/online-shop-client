// ========================== react ==========================
import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

// ========================== components ==========================
import FallbackComponent from "../../components/fallback.component";

const Suspended: FC<PropsWithChildren & { element: any }> = ({element: Element,}) => {
    return (
        <Suspense fallback={<FallbackComponent />}>
            <Element />
        </Suspense>
    );
};

// ======= pages ======= //
const ProductListPage = React.lazy(
    () => import("./products-list.page")
);
const ProductDetailsPage = React.lazy(() => import("./product-details.page"));

const ProductsRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={ProductListPage}/>} />
            <Route path={"/:id"} element={<Suspended element={ProductDetailsPage}/>}/>
            {/* DEFAULT */}
            <Route path="*" element={<Navigate to="/products" />} />
        </Routes>
    );
};

export default ProductsRoutes;
