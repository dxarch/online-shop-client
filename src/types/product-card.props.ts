import {UUIDDto} from "./uuid-dto.type";

export interface ProductCardProps extends UUIDDto {
    id: string;
    title: string;
    image_url: string;
    price: number;
    available_amount: number;
}