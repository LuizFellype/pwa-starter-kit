import type { Meta, StoryObj } from "@storybook/react"
import { Container } from "../components/ui/container"
import { Text } from "../components/ui/text"
import {
  EnhancedCard,
  EnhancedCardContent,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "../components/ui/enhanced-card"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"

const meta: Meta = {
  title: "Design System/Theme Demo",
  parameters: {
    docs: {
      description: {
        component: "Demonstration of how components look in both light and dark themes.",
      },
    },
  },
}

export default meta

export const ThemeComparison: StoryObj = {
  render: () => (
    <div className="space-y-8">
      <Container variant="card" padding="lg">
        <Text variant="title" as="h2" className="mb-4">
          Theme Demonstration
        </Text>
        <Text variant="description" className="mb-6">
          This demo shows how our components adapt to different themes. Use the theme switcher in the toolbar to see the
          differences.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EnhancedCard variant="elevated">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Sample Card</EnhancedCardTitle>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Text variant="body" className="mb-4">
                This card demonstrates how content appears in the current theme.
              </Text>
              <div className="flex gap-2 mb-4">
                <Badge variant="default">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="default">Primary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </EnhancedCardContent>
          </EnhancedCard>

          <EnhancedCard variant="accent">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Accent Card</EnhancedCardTitle>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Text variant="body" className="mb-4">
                This accent card shows how themed variants work.
              </Text>
              <div className="space-y-2">
                <Text variant="primary">Primary text color</Text>
                <Text variant="secondary">Secondary text color</Text>
                <Text variant="muted">Muted text color</Text>
                <Text variant="accent">Accent text color</Text>
              </div>
            </EnhancedCardContent>
          </EnhancedCard>
        </div>
      </Container>
    </div>
  ),
}
