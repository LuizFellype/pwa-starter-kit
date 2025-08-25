"use client"

import * as React from "react"
import { FilterableList, type FilterableListItem, type FilterConfig } from "@/components/ui/filterable-list"
import { Container } from "@/components/ui/container"
import { Text } from "@/components/ui/text"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SearchInput } from "@/components/ui/search-input"
import { MultiSelect, type MultiSelectOption } from "@/components/ui/multi-select"
import { Palette, Code, Database, Globe, Smartphone, Zap, Heart, Star, Bookmark } from "lucide-react"

// Sample data for demonstration
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
    { label: "Animation", value: "animation", icon: Star },
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

const multiSelectOptions: MultiSelectOption[] = [
  { label: "React", value: "react", icon: Code },
  { label: "Vue", value: "vue", icon: Code },
  { label: "Angular", value: "angular", icon: Code },
  { label: "TypeScript", value: "typescript", icon: Code },
  { label: "JavaScript", value: "javascript", icon: Code },
  { label: "Node.js", value: "nodejs", icon: Zap },
  { label: "Python", value: "python", icon: Zap },
  { label: "Design", value: "design", icon: Palette },
]

export function InteractiveShowcase() {
  const [loading, setLoading] = React.useState(false)
  const [searchValue, setSearchValue] = React.useState("")
  const [selectedTechnologies, setSelectedTechnologies] = React.useState<string[]>(["react", "typescript"])

  const handleItemClick = (item: FilterableListItem) => {
    console.log("Clicked item:", item)
  }

  const simulateLoading = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  const customRenderItem = (item: FilterableListItem) => (
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
  )

  return (
    <div className="space-y-8">
      <Container variant="card" size="full" padding="md">
        <Text variant="title" as="h2">
          Interactive Components Showcase
        </Text>
        <Text variant="description">
          Explore filterable lists, search inputs, multi-select components, and more interactive features
        </Text>
      </Container>

      <Tabs defaultValue="filterable-list" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="filterable-list">Filterable List</TabsTrigger>
          <TabsTrigger value="search-components">Search Components</TabsTrigger>
          <TabsTrigger value="multi-select">Multi-Select</TabsTrigger>
        </TabsList>

        <TabsContent value="filterable-list" className="space-y-6">
          <Container variant="card" size="full" padding="md">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Text variant="heading" as="h3">
                  Filterable Project List
                </Text>
                <Text variant="description">Search, filter, and sort through projects with multiple criteria</Text>
              </div>
              <Button onClick={simulateLoading} variant="outline">
                Simulate Loading
              </Button>
            </div>
          </Container>

          <FilterableList
            items={sampleItems}
            filterConfig={filterConfig}
            loading={loading}
            onItemClick={handleItemClick}
            renderItem={customRenderItem}
            emptyMessage="No projects match your filters"
          />
        </TabsContent>

        <TabsContent value="search-components" className="space-y-6">
          <Container variant="card" size="full" padding="lg">
            <Text variant="heading" as="h3" className="mb-6">
              Search Input Variants
            </Text>
            <div className="space-y-6">
              <div className="space-y-2">
                <Text variant="label">Basic Search</Text>
                <SearchInput
                  placeholder="Search anything..."
                  onSearch={(value) => setSearchValue(value)}
                  onClear={() => setSearchValue("")}
                />
                {searchValue && <Text variant="description">Current search: "{searchValue}"</Text>}
              </div>

              <div className="space-y-2">
                <Text variant="label">Search with Custom Debounce</Text>
                <SearchInput
                  placeholder="Fast search (100ms debounce)..."
                  debounceMs={100}
                  onSearch={(value) => console.log("Fast search:", value)}
                />
              </div>

              <div className="space-y-2">
                <Text variant="label">Search without Clear Button</Text>
                <SearchInput
                  placeholder="No clear button..."
                  showClearButton={false}
                  onSearch={(value) => console.log("Search:", value)}
                />
              </div>
            </div>
          </Container>
        </TabsContent>

        <TabsContent value="multi-select" className="space-y-6">
          <Container variant="card" size="full" padding="lg">
            <Text variant="heading" as="h3" className="mb-6">
              Multi-Select Components
            </Text>
            <div className="space-y-6">
              <div className="space-y-2">
                <Text variant="label">Technology Stack</Text>
                <MultiSelect
                  options={multiSelectOptions}
                  selected={selectedTechnologies}
                  onChange={setSelectedTechnologies}
                  placeholder="Select technologies..."
                  maxCount={3}
                />
                <div className="flex gap-2 flex-wrap">
                  {selectedTechnologies.map((tech) => {
                    const option = multiSelectOptions.find((opt) => opt.value === tech)
                    return (
                      <Badge key={tech} variant="secondary">
                        {option?.label}
                      </Badge>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <Text variant="label">Compact Multi-Select (Max 2 shown)</Text>
                <MultiSelect
                  options={multiSelectOptions}
                  selected={[]}
                  onChange={() => {}}
                  placeholder="Select up to 2 visible..."
                  maxCount={2}
                />
              </div>

              <div className="space-y-2">
                <Text variant="label">Disabled Multi-Select</Text>
                <MultiSelect
                  options={multiSelectOptions}
                  selected={["react", "typescript"]}
                  onChange={() => {}}
                  placeholder="Disabled..."
                  disabled
                />
              </div>
            </div>
          </Container>
        </TabsContent>
      </Tabs>
    </div>
  )
}
