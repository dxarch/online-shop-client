import {Badge, IconButton, Tooltip} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const CartIconComp = ({itemsQuantity, navigate}: {itemsQuantity: number | undefined; navigate: (s: string) => void;}) => {
    return (
        <Tooltip title="Open cart">
            <IconButton>
                <Badge badgeContent={itemsQuantity} color="primary" max={99}>
                    <ShoppingCartOutlinedIcon fontSize="large" sx={{
                        cursor: "pointer",
                        color: "white"
                    }} onClick={() => navigate("/cart")}/>
                </Badge>
            </IconButton>
        </Tooltip>
    )
}

export default CartIconComp;