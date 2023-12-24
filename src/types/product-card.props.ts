import {UUIDDto} from "./uuid-dto.type";

export interface ProductDto extends UUIDDto {
    id: string;
    title: string;
    image_url: string;
    description: string;
    price: number;
    available_amount: number;
}