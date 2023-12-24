import React, {FC} from "react";
import {Container, Grid} from "@mui/material";
import NavbarComp from "../../components/navbar.comp";
import ProductsRoutes from "./products.routes";

const ProductsPage: FC = () => {
    return (
        <>
            <NavbarComp />
            <Container maxWidth="lg">
                <ProductsRoutes />
            </Container>
        </>
    )
}

export default ProductsPage;