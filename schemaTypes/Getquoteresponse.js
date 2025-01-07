import { defineType } from "sanity"

export const GetQuoteResponse = defineType({
    name: 'getquoteresponse',
    title: 'Get Quote Response',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required().min(2).max(50),
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        },
        {
            name: 'mobileNumber',
            title: 'Mobile Number',
            type: 'string',
            validation: (Rule) => Rule.required().min(10).max(15),
        },    {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'subject',
            title: 'Subject',
            type: 'string',
            validation: (Rule) => Rule.required().min(3).max(100),
        },
        {
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: (Rule) => Rule.required().min(10).max(1000),
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        },
    ],

});