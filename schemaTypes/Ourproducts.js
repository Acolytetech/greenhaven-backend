import { defineType } from "sanity";

export const Ourproducts = defineType({
    name: "ourproducts",
    title: "Our Products",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        },
        {
            name: "price",
            title: "Price",
            type: "number",

        },
        {
            name: "category",
            title: "Category",
            type: "string",
            
        },
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
    // Define a new field for a list of products
    
})