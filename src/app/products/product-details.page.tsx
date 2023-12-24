import {Box, Button, ButtonGroup, CardMedia, Grid, LinearProgress, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import QuantityPickerComp from "../../components/quantity-picker.comp";
import {useGetProductsByIdQuery} from "./api";


const ProductDetailsPage = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetProductsByIdQuery(String(id));
    const [quantity, setQuantity] = useState(0);
    const isAvailable = Boolean(data?.available_amount);
    const incrementQuantity = () => setQuantity((quantity) => quantity + 1);
    const decrementQuantity = () => setQuantity((quantity) => quantity - 1);
    const updateQuantity = (e: React.ChangeEvent<HTMLInputElement>) => setQuantity(Number(e.currentTarget.value));

    if (isLoading) return <LinearProgress />

    return (
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <CardMedia
                    component="img"
                    height="250"
                    image={data?.image_url}
                    alt={data?.title}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" mb={4}>{data?.title}</Typography>
                <Typography variant="h5">${data?.price}</Typography>
                <Typography variant="h6">{isAvailable ? 'In Stock' : 'Out of Stock'}</Typography>
                <Stack direction="row" spacing={2} mb={6}>
                    <Typography variant="h6">Quantity:</Typography>
                    <QuantityPickerComp onChange={updateQuantity} onIncrement={incrementQuantity} onDecrement={decrementQuantity} quantity={quantity} />
                </Stack>
                <Button variant="contained" disableElevation disabled={!isAvailable}>Add to Cart</Button>
            </Grid>
            <Grid item xs={12} >
                <Typography>{data?.description}</Typography>
            </Grid>
        </Grid>
    );
};

export default ProductDetailsPage;