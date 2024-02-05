import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {ProductCardProps} from "../../types/product-card.props";
import {ProductDetailsDto} from "./types/product-details.dto";

const productApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_URL}),
    endpoints: (builder) => ({
        getProducts: builder.query<ProductCardProps[], {pageSize: number; pageNumber: number}>({
            query: ({pageSize, pageNumber }) => `products?pageSize=${pageSize}&pageNumber=${pageNumber}`,
            serializeQueryArgs: ({endpointName}) => endpointName,
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({currentArg, previousArg}) {
                return currentArg !== previousArg;
            }
        }),
        getProductsById: builder.query<ProductDetailsDto, string>({
            query: (id) => `products/${id}`,
        }),
        searchProducts: builder.query({
            query: (query) => `products/search?query=${query}`,
        }),
    }),
});

export const { useGetProductsQuery, useGetProductsByIdQuery, useSearchProductsQuery } = productApi;
export default productApi;