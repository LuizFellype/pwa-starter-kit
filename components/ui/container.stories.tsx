import type { Meta, StoryObj } from "@storybook/react"
import { Container } from "./container"

const meta: Meta<typeof Container> = {
  title: "UI Components/Container",
  component: Container,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A flexible container component with various styling variants, sizes, and padding options.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "card", "muted", "accent", "primary", "secondary"],
      description: "Visual style variant of the container",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl", "2xl", "4xl", "6xl", "full", "screen"],
      description: "Maximum width of the container",
    },
    padding: {
      control: "select",
      options: ["none", "sm", "md", "lg", "xl"],
      description: "Internal padding of the container",
    },
    children: {
      control: "text",
      description: "Content inside the container",
    },
  },
}

export default meta
type Story = StoryObj<typeof Container>

export const Default: Story = {
  args: {
    children: "This is a default container with standard styling.",
    variant: "default",
    size: "full",
    padding: "md",
  },
}

export const Card: Story = {
  args: {
    children: "This is a card container with border and rounded corners.",
    variant: "card",
    size: "lg",
    padding: "lg",
  },
}

export const AllVariants: Story = {
  args: {
    children: "123\n",
    size: "2xl"
  },

  render: () => (
    <div className="space-y-4">
      <Container variant="default" padding="md">
        Default Container
      </Container>
      <Container variant="card" padding="md">
        Card Container
      </Container>
      <Container variant="muted" padding="md">
        Muted Container
      </Container>
      <Container variant="accent" padding="md">
        Accent Container
      </Container>
      <Container variant="primary" padding="md">
        Primary Container
      </Container>
      <Container variant="secondary" padding="md">
        Secondary Container
      </Container>
    </div>
  ),

  parameters: {
    docs: {
      description: {
        story: "All available container variants displayed together.",
      },
    },
  }
}

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Container variant="card" size="sm" padding="sm">
        Small (max-w-sm)
      </Container>
      <Container variant="card" size="md" padding="sm">
        Medium (max-w-md)
      </Container>
      <Container variant="card" size="lg" padding="sm">
        Large (max-w-lg)
      </Container>
      <Container variant="card" size="xl" padding="sm">
        Extra Large (max-w-xl)
      </Container>
      <Container variant="card" size="2xl" padding="sm">
        2XL (max-w-2xl)
      </Container>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different container sizes from small to extra large.",
      },
    },
  },
}
