import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const skeletonVariants = cva("animate-pulse rounded-md bg-muted", {
  variants: {
    variant: {
      default: "bg-muted",
      card: "bg-card border border-border",
      text: "bg-muted/60",
      avatar: "rounded-full bg-muted",
      button: "bg-muted rounded-md",
    },
    size: {
      xs: "h-3",
      sm: "h-4",
      md: "h-5",
      lg: "h-6",
      xl: "h-8",
      "2xl": "h-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
})

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof skeletonVariants> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(({ className, variant, size, ...props }, ref) => {
  return <div className={cn(skeletonVariants({ variant, size, className }))} ref={ref} {...props} />
})
Skeleton.displayName = "Skeleton"

// Preset skeleton components for common use cases
const SkeletonText = React.forwardRef<HTMLDivElement, Omit<SkeletonProps, "variant">>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} variant="text" className={cn("w-full", className)} {...props} />
  ),
)
SkeletonText.displayName = "SkeletonText"

const SkeletonAvatar = React.forwardRef<HTMLDivElement, Omit<SkeletonProps, "variant">>(
  ({ className, size = "xl", ...props }, ref) => (
    <Skeleton ref={ref} variant="avatar" size={size} className={cn("aspect-square", className)} {...props} />
  ),
)
SkeletonAvatar.displayName = "SkeletonAvatar"

const SkeletonButton = React.forwardRef<HTMLDivElement, Omit<SkeletonProps, "variant">>(
  ({ className, ...props }, ref) => (
    <Skeleton ref={ref} variant="button" className={cn("w-20 h-9", className)} {...props} />
  ),
)
SkeletonButton.displayName = "SkeletonButton"

const SkeletonCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("rounded-lg border border-border p-6 space-y-4", className)} {...props}>
      {children || (
        <>
          <div className="flex items-center space-x-4">
            <SkeletonAvatar size="lg" />
            <div className="space-y-2 flex-1">
              <SkeletonText size="lg" className="w-1/2" />
              <SkeletonText size="sm" className="w-3/4" />
            </div>
          </div>
          <div className="space-y-2">
            <SkeletonText size="md" />
            <SkeletonText size="md" className="w-5/6" />
            <SkeletonText size="md" className="w-4/6" />
          </div>
          <div className="flex justify-between items-center">
            <SkeletonButton />
            <SkeletonText size="sm" className="w-16" />
          </div>
        </>
      )}
    </div>
  ),
)
SkeletonCard.displayName = "SkeletonCard"

export { Skeleton, SkeletonText, SkeletonAvatar, SkeletonButton, SkeletonCard, skeletonVariants }
