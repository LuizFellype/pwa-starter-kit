import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./text"

const meta: Meta<typeof Text> = {
  title: "UI Components/Text",
  component: Text,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile text component with multiple variants, alignments, and weights for consistent typography.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "title",
        "subtitle",
        "heading",
        "body",
        "description",
        "caption",
        "label",
        "muted",
        "accent",
        "primary",
        "secondary",
        "destructive",
      ],
      description: "Text style variant",
    },
    align: {
      control: "select",
      options: ["left", "center", "right", "justify"],
      description: "Text alignment",
    },
    weight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
      description: "Font weight",
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "HTML element to render",
    },
    children: {
      control: "text",
      description: "Text content",
    },
  },
}

export default meta
type Story = StoryObj<typeof Text>

export const Default: Story = {
  args: {
    children: "This is default body text with standard styling.",
    variant: "body",
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Text variant="title" as="h1">
        Title Text - Large and Bold
      </Text>
      <Text variant="subtitle" as="h2">
        Subtitle Text - Medium Weight
      </Text>
      <Text variant="heading" as="h3">
        Heading Text - Section Headers
      </Text>
      <Text variant="body">Body text for regular content and paragraphs with good readability.</Text>
      <Text variant="description">Description text for secondary information and captions.</Text>
      <Text variant="label">Label Text</Text>
      <Text variant="caption">Caption text for fine print</Text>
      <Text variant="muted">Muted text with reduced emphasis</Text>
      <Text variant="accent">Accent text with theme accent color</Text>
      <Text variant="primary">Primary text with theme primary color</Text>
      <Text variant="secondary">Secondary text with theme secondary color</Text>
      <Text variant="destructive">Destructive text for errors and warnings</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All available text variants with their typical use cases.",
      },
    },
  },
}

export const Alignments: Story = {
  render: () => (
    <div className="space-y-4">
      <Text align="left">Left aligned text (default)</Text>
      <Text align="center">Center aligned text</Text>
      <Text align="right">Right aligned text</Text>
      <Text align="justify">
        Justified text that spreads across the full width of the container, creating even margins on both sides.
      </Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different text alignment options.",
      },
    },
  },
}

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Text weight="light">Light weight text (300)</Text>
      <Text weight="normal">Normal weight text (400)</Text>
      <Text weight="medium">Medium weight text (500)</Text>
      <Text weight="semibold">Semibold weight text (600)</Text>
      <Text weight="bold">Bold weight text (700)</Text>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different font weight options from light to bold.",
      },
    },
  },
}
