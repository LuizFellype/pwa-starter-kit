import type { Meta, StoryObj } from "@storybook/react"
import { Skeleton, SkeletonText, SkeletonAvatar, SkeletonButton, SkeletonCard } from "./skeleton"

const meta: Meta<typeof Skeleton> = {
  title: "UI Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Skeleton loading components for displaying placeholder content while data is loading.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "card", "text", "avatar", "button"],
      description: "Visual style variant of the skeleton",
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Height of the skeleton",
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  args: {
    className: "w-full h-4",
    variant: "default",
    size: "md",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Basic Skeleton</h3>
        <Skeleton className="w-full h-4" />
        <Skeleton className="w-3/4 h-4" />
        <Skeleton className="w-1/2 h-4" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Text Skeletons</h3>
        <SkeletonText size="xl" className="w-3/4" />
        <SkeletonText size="lg" className="w-1/2" />
        <SkeletonText size="md" />
        <SkeletonText size="sm" className="w-2/3" />
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Avatar Skeletons</h3>
        <div className="flex gap-2">
          <SkeletonAvatar size="sm" />
          <SkeletonAvatar size="md" />
          <SkeletonAvatar size="lg" />
          <SkeletonAvatar size="xl" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Button Skeletons</h3>
        <div className="flex gap-2">
          <SkeletonButton />
          <SkeletonButton className="w-24" />
          <SkeletonButton className="w-32" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different skeleton variants for various content types.",
      },
    },
  },
}

export const SkeletonCardExample: Story = {
  render: () => (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">Complete Skeleton Card</h3>
      <SkeletonCard />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "A complete skeleton card showing a typical loading state for card content.",
      },
    },
  },
}

export const CustomSkeletonLayout: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Article Loading State</h3>
        <div className="space-y-4">
          <SkeletonText size="2xl" className="w-3/4" />
          <div className="flex items-center gap-4">
            <SkeletonAvatar size="md" />
            <div className="space-y-2 flex-1">
              <SkeletonText size="sm" className="w-1/4" />
              <SkeletonText size="xs" className="w-1/3" />
            </div>
          </div>
          <div className="space-y-2">
            <SkeletonText size="md" />
            <SkeletonText size="md" className="w-5/6" />
            <SkeletonText size="md" className="w-4/6" />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Dashboard Loading State</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <SkeletonText size="lg" className="w-1/2" />
            <Skeleton className="w-full h-20" />
          </div>
          <div className="space-y-2">
            <SkeletonText size="lg" className="w-1/2" />
            <Skeleton className="w-full h-20" />
          </div>
          <div className="space-y-2">
            <SkeletonText size="lg" className="w-1/2" />
            <Skeleton className="w-full h-20" />
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Custom skeleton layouts for different content types like articles and dashboards.",
      },
    },
  },
}
