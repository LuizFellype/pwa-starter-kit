"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { SearchInput } from "./search-input"
import { useState } from "react"

const meta: Meta<typeof SearchInput> = {
  title: "Interactive Components/Search Input",
  component: SearchInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A search input component with debouncing, clear functionality, and customizable behavior.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    debounceMs: {
      control: "number",
      description: "Debounce delay in milliseconds",
    },
    showClearButton: {
      control: "boolean",
      description: "Whether to show the clear button",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  render: (args) => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <div className="space-y-4">
        <SearchInput {...args} onSearch={setSearchValue} onClear={() => setSearchValue("")} />
        {searchValue && <p className="text-sm text-muted-foreground">Current search: "{searchValue}"</p>}
      </div>
    )
  },
  args: {
    placeholder: "Search anything...",
    debounceMs: 300,
    showClearButton: true,
  },
}

export const FastDebounce: Story = {
  render: () => {
    const [searchValue, setSearchValue] = useState("")

    return (
      <div className="space-y-4">
        <SearchInput
          placeholder="Fast search (100ms debounce)..."
          debounceMs={100}
          onSearch={setSearchValue}
          onClear={() => setSearchValue("")}
        />
        <p className="text-sm text-muted-foreground">This search has a faster debounce for immediate feedback</p>
        {searchValue && <p className="text-sm text-muted-foreground">Current search: "{searchValue}"</p>}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Search input with faster debounce for immediate feedback.",
      },
    },
  },
}

export const NoClearButton: Story = {
  render: () => (
    <SearchInput
      placeholder="Search without clear button..."
      showClearButton={false}
      onSearch={(value) => console.log("Search:", value)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Search input without the clear button for minimal design.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <SearchInput placeholder="Disabled search input..." disabled onSearch={(value) => console.log("Search:", value)} />
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled search input state.",
      },
    },
  },
}

export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <SearchInput
        placeholder="Large search input..."
        className="h-12 text-lg"
        onSearch={(value) => console.log("Search:", value)}
      />
      <SearchInput
        placeholder="Small search input..."
        className="h-8 text-sm"
        onSearch={(value) => console.log("Search:", value)}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Search inputs with custom sizing and styling.",
      },
    },
  },
}
