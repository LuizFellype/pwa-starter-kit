"use client"

import type { Meta, StoryObj } from "@storybook/react"
import { MultiSelect, type MultiSelectOption } from "./multi-select"
import { useState } from "react"
import { Code, Database, Globe, Palette, Smartphone, Zap } from "lucide-react"

const meta: Meta<typeof MultiSelect> = {
  title: "Interactive Components/Multi Select",
  component: MultiSelect,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A multi-select component with search, icons, and customizable display options.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text when no items are selected",
    },
    maxCount: {
      control: "number",
      description: "Maximum number of selected items to display before showing count",
    },
    disabled: {
      control: "boolean",
      description: "Whether the component is disabled",
    },
  },
}

export default meta
type Story = StoryObj<typeof MultiSelect>

const sampleOptions: MultiSelectOption[] = [
  { label: "React", value: "react", icon: Code },
  { label: "Vue", value: "vue", icon: Code },
  { label: "Angular", value: "angular", icon: Code },
  { label: "TypeScript", value: "typescript", icon: Code },
  { label: "JavaScript", value: "javascript", icon: Code },
  { label: "Node.js", value: "nodejs", icon: Zap },
  { label: "Python", value: "python", icon: Zap },
  { label: "Database", value: "database", icon: Database },
  { label: "Web Design", value: "design", icon: Palette },
  { label: "Mobile", value: "mobile", icon: Smartphone },
  { label: "Frontend", value: "frontend", icon: Globe },
]

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string[]>(["react", "typescript"])

    return (
      <div className="space-y-4">
        <MultiSelect {...args} options={sampleOptions} selected={selected} onChange={setSelected} />
        <div className="text-sm text-muted-foreground">
          Selected: {selected.length > 0 ? selected.join(", ") : "None"}
        </div>
      </div>
    )
  },
  args: {
    placeholder: "Select technologies...",
    maxCount: 3,
  },
}

export const WithIcons: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])

    return (
      <div className="space-y-4">
        <MultiSelect
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          placeholder="Select technologies with icons..."
          maxCount={2}
        />
        <div className="text-sm text-muted-foreground">
          This example shows options with icons for better visual identification.
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Multi-select with icons for each option.",
      },
    },
  },
}

export const CompactDisplay: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>(["react", "vue", "angular", "typescript", "javascript"])

    return (
      <div className="space-y-4">
        <MultiSelect
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          placeholder="Compact display..."
          maxCount={2}
        />
        <div className="text-sm text-muted-foreground">
          When more than 2 items are selected, it shows a count instead of individual badges.
        </div>
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Compact display mode showing count when many items are selected.",
      },
    },
  },
}

export const Disabled: Story = {
  render: () => (
    <MultiSelect
      options={sampleOptions}
      selected={["react", "typescript"]}
      onChange={() => {}}
      placeholder="Disabled multi-select..."
      disabled
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "Disabled state of the multi-select component.",
      },
    },
  },
}

export const WithSearch: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([])
    const [searchResults, setSearchResults] = useState<string[]>([])

    const handleSearch = (value: string) => {
      if (value) {
        const filtered = sampleOptions
          .filter((option) => option.label.toLowerCase().includes(value.toLowerCase()))
          .map((option) => option.value)
        setSearchResults(filtered)
      } else {
        setSearchResults([])
      }
    }

    return (
      <div className="space-y-4">
        <MultiSelect
          options={sampleOptions}
          selected={selected}
          onChange={setSelected}
          placeholder="Search and select..."
          onSearch={handleSearch}
        />
        <div className="text-sm text-muted-foreground">
          Type to search through options. Try searching for "script" or "design".
        </div>
        {searchResults.length > 0 && (
          <div className="text-sm text-muted-foreground">Search results: {searchResults.length} items found</div>
        )}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story: "Multi-select with search functionality to filter options.",
      },
    },
  },
}
