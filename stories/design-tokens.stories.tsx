import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta = {
  title: "Design System/Design Tokens",
  parameters: {
    docs: {
      description: {
        component: "Design tokens define the visual foundation of our component library.",
      },
    },
  },
}

export default meta

export const Colors: StoryObj = {
  render: () => {
    const colorGroups = [
      {
        name: "Primary Colors",
        colors: [
          { name: "Background", var: "--background", class: "bg-background" },
          { name: "Foreground", var: "--foreground", class: "bg-foreground" },
          { name: "Primary", var: "--primary", class: "bg-primary" },
          { name: "Primary Foreground", var: "--primary-foreground", class: "bg-primary-foreground" },
        ],
      },
      {
        name: "Secondary Colors",
        colors: [
          { name: "Secondary", var: "--secondary", class: "bg-secondary" },
          { name: "Secondary Foreground", var: "--secondary-foreground", class: "bg-secondary-foreground" },
          { name: "Muted", var: "--muted", class: "bg-muted" },
          { name: "Muted Foreground", var: "--muted-foreground", class: "bg-muted-foreground" },
        ],
      },
      {
        name: "Accent Colors",
        colors: [
          { name: "Accent", var: "--accent", class: "bg-accent" },
          { name: "Accent Foreground", var: "--accent-foreground", class: "bg-accent-foreground" },
          { name: "Destructive", var: "--destructive", class: "bg-destructive" },
          { name: "Destructive Foreground", var: "--destructive-foreground", class: "bg-destructive-foreground" },
        ],
      },
      {
        name: "UI Colors",
        colors: [
          { name: "Card", var: "--card", class: "bg-card" },
          { name: "Card Foreground", var: "--card-foreground", class: "bg-card-foreground" },
          { name: "Border", var: "--border", class: "bg-border" },
          { name: "Input", var: "--input", class: "bg-input" },
        ],
      },
    ]

    return (
      <div className="space-y-8">
        {colorGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-lg font-semibold mb-4">{group.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {group.colors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div className={`w-full h-16 rounded-lg border ${color.class}`} />
                  <div className="text-sm">
                    <div className="font-medium">{color.name}</div>
                    <div className="text-muted-foreground font-mono text-xs">{color.var}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}

export const Typography: StoryObj = {
  render: () => {
    const textVariants = [
      { name: "Title", class: "text-2xl font-bold tracking-tight", example: "The quick brown fox" },
      { name: "Subtitle", class: "text-xl font-semibold", example: "The quick brown fox" },
      { name: "Heading", class: "text-lg font-medium", example: "The quick brown fox" },
      { name: "Body", class: "text-base", example: "The quick brown fox jumps over the lazy dog" },
      {
        name: "Description",
        class: "text-sm text-muted-foreground",
        example: "The quick brown fox jumps over the lazy dog",
      },
      {
        name: "Caption",
        class: "text-xs text-muted-foreground",
        example: "The quick brown fox jumps over the lazy dog",
      },
      { name: "Label", class: "text-sm font-medium", example: "The quick brown fox" },
    ]

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Typography Scale</h3>
          <div className="space-y-4">
            {textVariants.map((variant) => (
              <div key={variant.name} className="flex items-baseline gap-4">
                <div className="w-20 text-sm text-muted-foreground font-medium">{variant.name}</div>
                <div className={variant.class}>{variant.example}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Font Weights</h3>
          <div className="space-y-2">
            <div className="font-light">Light (300) - The quick brown fox</div>
            <div className="font-normal">Normal (400) - The quick brown fox</div>
            <div className="font-medium">Medium (500) - The quick brown fox</div>
            <div className="font-semibold">Semibold (600) - The quick brown fox</div>
            <div className="font-bold">Bold (700) - The quick brown fox</div>
          </div>
        </div>
      </div>
    )
  },
}

export const Spacing: StoryObj = {
  render: () => {
    const spacingValues = [
      { name: "xs", value: "0.25rem", class: "w-1 h-1" },
      { name: "sm", value: "0.5rem", class: "w-2 h-2" },
      { name: "md", value: "1rem", class: "w-4 h-4" },
      { name: "lg", value: "1.5rem", class: "w-6 h-6" },
      { name: "xl", value: "2rem", class: "w-8 h-8" },
      { name: "2xl", value: "3rem", class: "w-12 h-12" },
    ]

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Spacing Scale</h3>
          <div className="space-y-4">
            {spacingValues.map((spacing) => (
              <div key={spacing.name} className="flex items-center gap-4">
                <div className="w-12 text-sm text-muted-foreground font-medium">{spacing.name}</div>
                <div className={`${spacing.class} bg-primary rounded`} />
                <div className="text-sm text-muted-foreground">{spacing.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
}
