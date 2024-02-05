import React, {FC, useEffect, useState} from "react";
import {Grid, LinearProgress, Typography} from "@mui/material";
import ProductCardComp from "../../components/product-card.comp";
import {ProductCardProps} from "../../types/product-card.props";
import {useGetProductsQuery} from "./api";

const ProductsListPage: FC = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const pageSize = 10;
    const { data, error, isLoading } = useGetProductsQuery({pageSize, pageNumber});

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollTop + clientHeight >= scrollHeight) {
            setPageNumber((prevPageNumber) => prevPageNumber + pageNumber);
        }
    }

    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [isLoading])

    if (isLoading) return <LinearProgress />

    return (
        <>
            <Typography variant="h4" align="center" mb={2}>Products</Typography>
            <Grid container spacing={2}>
                {data?.map((product: ProductCardProps) => (
                    <Grid item lg={3} md={3} sm={4} xs={6}>
                        <ProductCardComp id={product.id} title={product.title}
                                         image_url={product.image_url}
                                         price={product.price}
                                         available_amount={product.available_amount}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsListPage;