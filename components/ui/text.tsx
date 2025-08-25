import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const textVariants = cva("", {
  variants: {
    variant: {
      title: "text-2xl font-bold tracking-tight text-foreground",
      subtitle: "text-xl font-semibold text-foreground",
      heading: "text-lg font-medium text-foreground",
      body: "text-base text-foreground",
      description: "text-sm text-muted-foreground",
      caption: "text-xs text-muted-foreground",
      label: "text-sm font-medium text-foreground",
      muted: "text-sm text-muted-foreground",
      accent: "text-sm font-medium text-accent-foreground",
      primary: "text-sm font-medium text-primary",
      secondary: "text-sm text-secondary-foreground",
      destructive: "text-sm text-destructive",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
  },
})

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant, align, weight, as: Component = "p", ...props }, ref) => {
    return <Component className={cn(textVariants({ variant, align, weight, className }))} ref={ref as any} {...props} />
  },
)
Text.displayName = "Text"

export { Text, textVariants }
