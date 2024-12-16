import { defineField, defineType,} from "sanity"

export const Subscription = defineType ({
    name: "subscription",
    title: "Subscriptions",
    type: "document",
    fields: [
      defineField({
        name: "email",
        title: "Email Address",
        type: "string",
        validation: (Rule) => Rule.required().email().error("A valid email is required"),
      }),
      defineField({
        name: "subscribedAt",
        title: "Subscribed At",
        type: "datetime",
        initialValue: () => new Date().toISOString(),
        readOnly: true,
      }),
    ],
  });
  