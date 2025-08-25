import type { Meta, StoryObj } from "@storybook/react"
import { ThemeToggle } from "./theme-toggle"

const meta: Meta<typeof ThemeToggle> = {
  title: "UI Components/Theme Toggle",
  component: ThemeToggle,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A theme toggle component that allows users to switch between light, dark, and system themes.",
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  render: () => (
    <div className="space-y-4">
      <ThemeToggle />
      <p className="text-sm text-muted-foreground">
        Click the theme toggle to switch between light, dark, and system themes.
      </p>
    </div>
  ),
}

export const InHeader: Story = {
  render: () => (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="font-semibold">Application Header</h3>
        <p className="text-sm text-muted-foreground">Example header with theme toggle</p>
      </div>
      <ThemeToggle />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Theme toggle positioned in a typical header layout.",
      },
    },
  },
}

export const MultipleToggles: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm">Theme controls:</span>
        <ThemeToggle />
        <ThemeToggle />
        <ThemeToggle />
      </div>
      <p className="text-sm text-muted-foreground">
        Multiple theme toggles will stay synchronized across the application.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Multiple theme toggles that stay synchronized.",
      },
    },
  },
}
