import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const enhancedCardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-border",
        outline: "border-2 border-border",
        filled: "bg-muted border-muted",
        elevated: "shadow-md hover:shadow-lg",
        interactive: "hover:shadow-md hover:scale-[1.02] cursor-pointer",
        accent: "border-accent bg-accent/5",
        primary: "border-primary bg-primary/5",
        destructive: "border-destructive bg-destructive/5",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

const enhancedCardHeaderVariants = cva("flex flex-col space-y-1.5", {
  variants: {
    size: {
      sm: "pb-2",
      md: "pb-4",
      lg: "pb-6",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const enhancedCardTitleVariants = cva("font-semibold leading-none tracking-tight", {
  variants: {
    size: {
      sm: "text-lg",
      md: "text-xl",
      lg: "text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

const enhancedCardDescriptionVariants = cva("text-muted-foreground", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
})

export interface EnhancedCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof enhancedCardVariants> {}

export interface EnhancedCardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof enhancedCardHeaderVariants> {}

export interface EnhancedCardTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof enhancedCardTitleVariants> {}

export interface EnhancedCardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof enhancedCardDescriptionVariants> {}

const EnhancedCard = React.forwardRef<HTMLDivElement, EnhancedCardProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div ref={ref} className={cn(enhancedCardVariants({ variant, size, className }))} {...props} />
  ),
)
EnhancedCard.displayName = "EnhancedCard"

const EnhancedCardHeader = React.forwardRef<HTMLDivElement, EnhancedCardHeaderProps>(
  ({ className, size, ...props }, ref) => (
    <div ref={ref} className={cn(enhancedCardHeaderVariants({ size, className }))} {...props} />
  ),
)
EnhancedCardHeader.displayName = "EnhancedCardHeader"

const EnhancedCardTitle = React.forwardRef<HTMLParagraphElement, EnhancedCardTitleProps>(
  ({ className, size, ...props }, ref) => (
    <h3 ref={ref} className={cn(enhancedCardTitleVariants({ size, className }))} {...props} />
  ),
)
EnhancedCardTitle.displayName = "EnhancedCardTitle"

const EnhancedCardDescription = React.forwardRef<HTMLParagraphElement, EnhancedCardDescriptionProps>(
  ({ className, size, ...props }, ref) => (
    <p ref={ref} className={cn(enhancedCardDescriptionVariants({ size, className }))} {...props} />
  ),
)
EnhancedCardDescription.displayName = "EnhancedCardDescription"

const EnhancedCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("pt-0", className)} {...props} />,
)
EnhancedCardContent.displayName = "EnhancedCardContent"

const EnhancedCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("flex items-center pt-4", className)} {...props} />,
)
EnhancedCardFooter.displayName = "EnhancedCardFooter"

export {
  EnhancedCard,
  EnhancedCardHeader,
  EnhancedCardFooter,
  EnhancedCardTitle,
  EnhancedCardDescription,
  EnhancedCardContent,
}
