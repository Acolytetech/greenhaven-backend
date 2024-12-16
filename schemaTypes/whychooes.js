import { defineType, defineField } from "sanity";

export const Whychooseus = defineType({
    name: "whychooseus",
    title: "Why Choose Us",
    type: "document",
    fields: [
        defineField({
            name: "backgroundImage",
            title: "Background Image",
            type: "image",
        }),
        defineField({
            name: "headline",
            title: "Headline",
            type: "string",
            description: "Headline for the section.",
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'headline' },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "whychooseslist",
            title: "Why Choose Us List",
            type: "array",
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: "subheading",
                            title: "sub heading",
                            type: "string",
                            description: "Title for the list item.",
                            validation: (Rule) => Rule.required().max(50),
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type:"array",
                            of: [{ type: "block" }],
                            description: "Add description points as a list.",
                            validation: (Rule) => Rule.min(1).max(20),
                        }),
                    ]
                }
            ]
        }),
    ]
});
