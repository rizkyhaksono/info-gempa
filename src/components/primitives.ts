import { tv } from "tailwind-variants"

export const title = tv({
  base: "font-semibold inline",
  variants: {
    color: {
      foreground: "text-[#FFFFFF] dark:text-[#000000]",
    },
    size: {
      sm: "text-lg lg:text-xl",
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
      foreground: "text-[#FFFFFF] dark:text-[#000000]",
    },
    size: {
      sm: "text-lg lg:text-xl",
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
      class: "bg-clip-text text-transparent bg-gradient-to-r",
    },
  ],
})

export const text = tv({
  base: "font-normal inline font-normal",
  variants: {
    color: {
      foreground: "text-[#FFFFFF] dark:text-[#000000]",
    },
    size: {
      sm: "text-base lg:text-base",
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
