import type { Meta, StoryObj } from "@storybook/react"
import { FilterableList, type FilterableListItem, type FilterConfig } from "./filterable-list"
import { Badge } from "./badge"
import { Button } from "./button"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "./enhanced-card"
import { Text } from "./text"
import { Code, Database, Globe, Palette, Smartphone, Zap, Heart, Bookmark } from "lucide-react"

const meta: Meta<typeof FilterableList> = {
  title: "Interactive Components/Filterable List",
  component: FilterableList,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive filterable list component with search, category filtering, tag filtering, and sorting capabilities.",
      },
    },
  },
  argTypes: {
    loading: {
      control: "boolean",
      description: "Whether the list is in loading state",
    },
    emptyMessage: {
      control: "text",
      description: "Message to show when no items match filters",
    },
  },
}

export default meta
type Story = StoryObj<typeof FilterableList>

const sampleItems: FilterableListItem[] = [
  {
    id: "1",
    title: "React Component Library",
    description: "A comprehensive set of reusable React components with TypeScript support",
    category: "frontend",
    tags: ["react", "typescript", "components"],
    date: new Date("2024-01-15"),
    status: "active",
  },
  {
    id: "2",
    title: "Node.js API Server",
    description: "RESTful API server built with Express and MongoDB integration",
    category: "backend",
    tags: ["nodejs", "express", "mongodb"],
    date: new Date("2024-01-10"),
    status: "active",
  },
  {
    id: "3",
    title: "Mobile App Design System",
    description: "Complete design system for iOS and Android applications",
    category: "design",
    tags: ["mobile", "design-system", "figma"],
    date: new Date("2024-01-20"),
    status: "draft",
  },
  {
    id: "4",
    title: "Database Migration Tool",
    description: "Automated database schema migration and versioning tool",
    category: "backend",
    tags: ["database", "migration", "sql"],
    date: new Date("2024-01-05"),
    status: "active",
  },
  {
    id: "5",
    title: "PWA Starter Template",
    description: "Progressive Web App template with offline support and push notifications",
    category: "frontend",
    tags: ["pwa", "service-worker", "offline"],
    date: new Date("2024-01-25"),
    status: "active",
  },
  {
    id: "6",
    title: "UI Animation Library",
    description: "Smooth animations and transitions for modern web applications",
    category: "frontend",
    tags: ["animation", "css", "javascript"],
    date: new Date("2024-01-12"),
    status: "draft",
  },
  {
    id: "7",
    title: "GraphQL API Gateway",
    description: "Centralized GraphQL gateway for microservices architecture",
    category: "backend",
    tags: ["graphql", "microservices", "api"],
    date: new Date("2024-01-18"),
    status: "active",
  },
  {
    id: "8",
    title: "Design Token System",
    description: "Centralized design tokens for consistent UI across platforms",
    category: "design",
    tags: ["design-tokens", "css", "variables"],
    date: new Date("2024-01-22"),
    status: "draft",
  },
]

const filterConfig: FilterConfig = {
  categories: [
    { label: "Frontend", value: "frontend", icon: Globe },
    { label: "Backend", value: "backend", icon: Database },
    { label: "Design", value: "design", icon: Palette },
    { label: "Mobile", value: "mobile", icon: Smartphone },
  ],
  tags: [
    { label: "React", value: "react", icon: Code },
    { label: "TypeScript", value: "typescript", icon: Code },
    { label: "Node.js", value: "nodejs", icon: Zap },
    { label: "Database", value: "database", icon: Database },
    { label: "PWA", value: "pwa", icon: Smartphone },
    { label: "Animation", value: "animation", icon: Zap },
    { label: "GraphQL", value: "graphql", icon: Code },
    { label: "Design System", value: "design-system", icon: Palette },
  ],
  statuses: [
    { label: "Active", value: "active" },
    { label: "Draft", value: "draft" },
    { label: "Archived", value: "archived" },
  ],
  sortOptions: [
    { label: "Title", value: "title" },
    { label: "Date", value: "date" },
    { label: "Category", value: "category" },
    { label: "Status", value: "status" },
  ],
}

export const Default: Story = {
  args: {
    items: sampleItems,
    filterConfig,
    loading: false,
    emptyMessage: "No projects found matching your criteria",
  },
}

export const Loading: Story = {
  args: {
    items: sampleItems,
    filterConfig,
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Loading state with skeleton placeholders.",
      },
    },
  },
}

export const WithCustomRenderer: Story = {
  render: (args) => (
    <FilterableList
      {...args}
      renderItem={(item) => (
        <EnhancedCard key={item.id} variant="elevated" className="hover:shadow-lg transition-all duration-200">
          <EnhancedCardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <EnhancedCardTitle className="text-lg">{item.title}</EnhancedCardTitle>
                <Text variant="description">{item.description}</Text>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{item.category}</Badge>
                {item.status === "active" && <Badge variant="default">Active</Badge>}
                {item.status === "draft" && <Badge variant="secondary">Draft</Badge>}
              </div>
            </div>
          </EnhancedCardHeader>
          <EnhancedCardContent>
            <div className="flex items-center justify-between">
              <div className="flex gap-1 flex-wrap">
                {item.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Text variant="caption">{item.date?.toLocaleDateString()}</Text>
              </div>
            </div>
          </EnhancedCardContent>
        </EnhancedCard>
      )}
    />
  ),
  args: {
    items: sampleItems,
    filterConfig,
    loading: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Filterable list with custom item renderer for enhanced card layout.",
      },
    },
  },
}

export const EmptyState: Story = {
  args: {
    items: [],
    filterConfig,
    loading: false,
    emptyMessage: "No projects have been created yet. Start by adding your first project!",
  },
  parameters: {
    docs: {
      description: {
        story: "Empty state when no items are available.",
      },
    },
  },
}
