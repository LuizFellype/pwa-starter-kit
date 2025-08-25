import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const containerVariants = cva("w-full", {
  variants: {
    variant: {
      default: "bg-background",
      card: "bg-card border border-border rounded-lg",
      muted: "bg-muted",
      accent: "bg-accent",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
    },
    size: {
      sm: "max-w-sm mx-auto",
      md: "max-w-md mx-auto",
      lg: "max-w-lg mx-auto",
      xl: "max-w-xl mx-auto",
      "2xl": "max-w-2xl mx-auto",
      "4xl": "max-w-4xl mx-auto",
      "6xl": "max-w-6xl mx-auto",
      full: "max-w-full",
      screen: "max-w-screen-xl mx-auto",
    },
    padding: {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
      xl: "p-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "full",
    padding: "md",
  },
})

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, variant, size, padding, ...props }, ref) => {
    return <div className={cn(containerVariants({ variant, size, padding, className }))} ref={ref} {...props} />
  },
)
Container.displayName = "Container"

export { Container, containerVariants }
