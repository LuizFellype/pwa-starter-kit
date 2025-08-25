import { Container } from "@/components/ui/container"
import { Text } from "@/components/ui/text"
import {
  EnhancedCard,
  EnhancedCardContent,
  EnhancedCardDescription,
  EnhancedCardHeader,
  EnhancedCardTitle,
} from "@/components/ui/enhanced-card"
import { SkeletonCard, SkeletonText, SkeletonAvatar, SkeletonButton } from "@/components/ui/skeleton"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Badge } from "@/components/ui/badge"

export function ThemeShowcase() {
  return (
    <div className="space-y-8">
      {/* Header with theme toggle */}
      <Container variant="card" size="full" padding="md">
        <div className="flex items-center justify-between">
          <div>
            <Text variant="title" as="h2">
              Theme Showcase
            </Text>
            <Text variant="description">Explore all themed components in light and dark modes</Text>
          </div>
          <ThemeToggle />
        </div>
      </Container>

      {/* Container Variants */}
      <div className="space-y-4">
        <Text variant="heading" as="h3">
          Container Variants
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Container variant="default" size="full" padding="md">
            <Text variant="label">Default Container</Text>
            <Text variant="description">Standard background container</Text>
          </Container>
          <Container variant="card" size="full" padding="md">
            <Text variant="label">Card Container</Text>
            <Text variant="description">Card-style with border</Text>
          </Container>
          <Container variant="muted" size="full" padding="md">
            <Text variant="label">Muted Container</Text>
            <Text variant="description">Subtle background variant</Text>
          </Container>
        </div>
      </div>

      {/* Text Variants */}
      <div className="space-y-4">
        <Text variant="heading" as="h3">
          Text Variants
        </Text>
        <Container variant="card" size="full" padding="lg">
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
            <div className="flex gap-2 flex-wrap">
              <Text variant="primary">Primary Text</Text>
              <Text variant="secondary">Secondary Text</Text>
              <Text variant="muted">Muted Text</Text>
              <Text variant="accent">Accent Text</Text>
              <Text variant="destructive">Destructive Text</Text>
            </div>
          </div>
        </Container>
      </div>

      {/* Enhanced Card Variants */}
      <div className="space-y-4">
        <Text variant="heading" as="h3">
          Enhanced Card Variants
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <EnhancedCard variant="default">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Default Card</EnhancedCardTitle>
              <EnhancedCardDescription>Standard card with border</EnhancedCardDescription>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Text variant="body">Card content goes here</Text>
            </EnhancedCardContent>
          </EnhancedCard>

          <EnhancedCard variant="elevated">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Elevated Card</EnhancedCardTitle>
              <EnhancedCardDescription>Card with shadow effects</EnhancedCardDescription>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Text variant="body">Hover for enhanced shadow</Text>
            </EnhancedCardContent>
          </EnhancedCard>

          <EnhancedCard variant="interactive">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Interactive Card</EnhancedCardTitle>
              <EnhancedCardDescription>Clickable with hover effects</EnhancedCardDescription>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Text variant="body">Hover to see interaction</Text>
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

          <EnhancedCard variant="primary">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Primary Card</EnhancedCardTitle>
              <EnhancedCardDescription>Primary color theme</EnhancedCardDescription>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Badge variant="outline">Primary Theme</Badge>
            </EnhancedCardContent>
          </EnhancedCard>

          <EnhancedCard variant="filled">
            <EnhancedCardHeader>
              <EnhancedCardTitle>Filled Card</EnhancedCardTitle>
              <EnhancedCardDescription>Muted background variant</EnhancedCardDescription>
            </EnhancedCardHeader>
            <EnhancedCardContent>
              <Badge variant="secondary">Filled Theme</Badge>
            </EnhancedCardContent>
          </EnhancedCard>
        </div>
      </div>

      {/* Skeleton Components */}
      <div className="space-y-4">
        <Text variant="heading" as="h3">
          Skeleton Loading States
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Text variant="label">Individual Skeleton Components</Text>
            <div className="space-y-3">
              <SkeletonText size="xl" className="w-3/4" />
              <SkeletonText size="lg" className="w-1/2" />
              <SkeletonText size="md" />
              <SkeletonText size="sm" className="w-2/3" />
              <div className="flex items-center gap-4">
                <SkeletonAvatar size="lg" />
                <div className="space-y-2 flex-1">
                  <SkeletonText size="md" className="w-1/3" />
                  <SkeletonText size="sm" className="w-1/2" />
                </div>
              </div>
              <div className="flex gap-2">
                <SkeletonButton />
                <SkeletonButton />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <Text variant="label">Complete Skeleton Card</Text>
            <SkeletonCard />
          </div>
        </div>
      </div>
    </div>
  )
}
