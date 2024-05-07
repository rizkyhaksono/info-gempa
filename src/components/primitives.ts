import { tv } from "tailwind-variants"

export const title = tv({
  base: "font-semibold inline",
  variants: {
    color: {
      foreground: "text-white",
    },
    size: {
      sm: "text-sm lg:text-xl",
      md: "text-2xl lg:text-3xl",
      lg: "text-3xl lg:text-4xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["foreground"],
      class: "",
    },
  ],
})

export const subtitle = tv({
  base: "font-normal inline",
  variants: {
    color: {
      foreground: "text-white",
    },
    size: {
      sm: "text-sm lg:text-lg",
      md: "text-xl lg:text-2xl",
      lg: "text-xl lg:text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["foreground"],
      class: "",
    },
  ],
})

export const text = tv({
  base: "font-normal inline font-normal",
  variants: {
    color: {
      foreground: "text-[#FFFFFF] dark:text-[#18191b]",
    },
    size: {
      sm: "text-sm lg:text-base",
      md: "text-lg lg:text-xl",
      lg: "text-lg lg:text-xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["foreground"],
      class: "",
    },
  ],
})
