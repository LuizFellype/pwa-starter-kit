import type { Meta, StoryObj } from "@storybook/react"
import {
  EnhancedCard,
  EnhancedCardHeader,
  EnhancedCardTitle,
  EnhancedCardDescription,
  EnhancedCardContent,
  EnhancedCardFooter,
} from "./enhanced-card"
import { Badge } from "./badge"
import { Button } from "./button"

const meta: Meta<typeof EnhancedCard> = {
  title: "UI Components/Enhanced Card",
  component: EnhancedCard,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "An enhanced card component with multiple variants, sizes, and interactive states.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "filled", "elevated", "interactive", "accent", "primary", "destructive"],
      description: "Visual style variant of the card",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the card padding",
    },
  },
}

export default meta
type Story = StoryObj<typeof EnhancedCard>

export const Default: Story = {
  render: (args) => (
    <EnhancedCard {...args}>
      <EnhancedCardHeader>
        <EnhancedCardTitle>Card Title</EnhancedCardTitle>
        <EnhancedCardDescription>This is a description of the card content.</EnhancedCardDescription>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <p>This is the main content area of the card where you can place any content.</p>
      </EnhancedCardContent>
      <EnhancedCardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </EnhancedCardFooter>
    </EnhancedCard>
  ),
  args: {
    variant: "default",
    size: "md",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <EnhancedCard variant="default">
        <EnhancedCardHeader>
          <EnhancedCardTitle>Default Card</EnhancedCardTitle>
          <EnhancedCardDescription>Standard card with border</EnhancedCardDescription>
        </EnhancedCardHeader>
        <EnhancedCardContent>
          <p>Default card content</p>
        </EnhancedCardContent>
      </EnhancedCard>

      <EnhancedCard variant="outline">
        <EnhancedCardHeader>
          <EnhancedCardTitle>Outline Card</EnhancedCardTitle>
          <EnhancedCardDescription>Card with thicker border</EnhancedCardDescription>
        </EnhancedCardHeader>
        <EnhancedCardContent>
          <p>Outline card content</p>
        </EnhancedCardContent>
      </EnhancedCard>

      <EnhancedCard variant="filled">
        <EnhancedCardHeader>
          <EnhancedCardTitle>Filled Card</EnhancedCardTitle>
          <EnhancedCardDescription>Card with muted background</EnhancedCardDescription>
        </EnhancedCardHeader>
        <EnhancedCardContent>
          <p>Filled card content</p>
        </EnhancedCardContent>
      </EnhancedCard>

      <EnhancedCard variant="elevated">
        <EnhancedCardHeader>
          <EnhancedCardTitle>Elevated Card</EnhancedCardTitle>
          <EnhancedCardDescription>Card with shadow effects</EnhancedCardDescription>
        </EnhancedCardHeader>
        <EnhancedCardContent>
          <p>Hover for enhanced shadow</p>
        </EnhancedCardContent>
      </EnhancedCard>

      <EnhancedCard variant="interactive">
        <EnhancedCardHeader>
          <EnhancedCardTitle>Interactive Card</EnhancedCardTitle>
          <EnhancedCardDescription>Clickable with hover effects</EnhancedCardDescription>
        </EnhancedCardHeader>
        <EnhancedCardContent>
          <p>Hover to see interaction</p>
        </EnhancedCardContent>
      </EnhancedCard>

      <EnhancedCard variant="accent">
        <EnhancedCardHeader>
          <EnhancedCardTitle>Accent Card</EnhancedCardTitle>
          <EnhancedCardDescription>Highlighted with accent colors</EnhancedCardDescription>
        </EnhancedCardHeader>
        <EnhancedCardContent>
          <Badge variant="secondary">Accent Theme</Badge>
        </EnhancedCardContent>
      </EnhancedCard>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available card variants with different visual styles.",
      },
    },
  },
}

export const WithComplexContent: Story = {
  render: () => (
    <EnhancedCard variant="elevated" size="lg">
      <EnhancedCardHeader>
        <div className="flex items-center justify-between">
          <div>
            <EnhancedCardTitle>Project Dashboard</EnhancedCardTitle>
            <EnhancedCardDescription>Overview of your current project status</EnhancedCardDescription>
          </div>
          <Badge variant="outline">Active</Badge>
        </div>
      </EnhancedCardHeader>
      <EnhancedCardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Progress</span>
            <span className="font-medium">75%</span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: "75%" }}></div>
          </div>
          <div className="flex gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind</Badge>
          </div>
        </div>
      </EnhancedCardContent>
      <EnhancedCardFooter>
        <Button variant="outline">View Details</Button>
        <Button>Continue Work</Button>
      </EnhancedCardFooter>
    </EnhancedCard>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of a card with complex content including progress bars, badges, and multiple actions.",
      },
    },
  },
}
