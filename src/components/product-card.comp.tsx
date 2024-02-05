import {FC} from "react";
import {
    Button,
    Card, CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@mui/material";

import {ProductCardProps} from "../types/product-card.props";
import {Link} from "react-router-dom";

const ProductCardComp: FC<ProductCardProps> = ({id, title, image_url, price, available_amount}) => {
    return (
        <Card sx={{maxWidth: 250}} variant="outlined">
            <CardActionArea component={Link} to={`/products/${id}`}>
                <CardMedia component="img" alt={title} image={image_url} />
                <CardContent sx={{px: 2}}>
                    <Typography gutterBottom variant="h3" component="div" fontSize={20} fontWeight="bold">{title}</Typography>
                    <Typography variant="h3" fontSize={20} fontWeight="bold">${price}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ px: 2, display: 'flex', flexDirection:'column', alignItems: 'flex-start', justifyContent:'center', gap: 2}}>
                <Button variant="contained" sx={{width: '100%'}} disableElevation>Add to Cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCardComp;