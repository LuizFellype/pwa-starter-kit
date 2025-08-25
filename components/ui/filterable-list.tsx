"use client"

import * as React from "react"
import { SearchInput } from "@/components/ui/search-input"
import { MultiSelect, type MultiSelectOption } from "@/components/ui/multi-select"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Container } from "@/components/ui/container"
import { Text } from "@/components/ui/text"
import { EnhancedCard, EnhancedCardContent, EnhancedCardHeader, EnhancedCardTitle } from "@/components/ui/enhanced-card"
import { SkeletonCard } from "@/components/ui/skeleton"
import { Filter, SortAsc, SortDesc, X } from "lucide-react"

export interface FilterableListItem {
  id: string
  title: string
  description?: string
  category: string
  tags?: string[]
  date?: Date
  status?: string
  [key: string]: any
}

export interface FilterConfig {
  categories: MultiSelectOption[]
  tags?: MultiSelectOption[]
  statuses?: MultiSelectOption[]
  sortOptions: { label: string; value: string }[]
}

interface FilterableListProps {
  items: FilterableListItem[]
  filterConfig: FilterConfig
  loading?: boolean
  onItemClick?: (item: FilterableListItem) => void
  renderItem?: (item: FilterableListItem) => React.ReactNode
  emptyMessage?: string
  className?: string
}

export function FilterableList({
  items,
  filterConfig,
  loading = false,
  onItemClick,
  renderItem,
  emptyMessage = "No items found",
  className,
}: FilterableListProps) {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([])
  const [selectedTags, setSelectedTags] = React.useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = React.useState<string[]>([])
  const [sortBy, setSortBy] = React.useState<string>(filterConfig.sortOptions[0]?.value || "")
  const [sortOrder, setSortOrder] = React.useState<"asc" | "desc">("asc")

  const filteredAndSortedItems = React.useMemo(() => {
    const filtered = items.filter((item) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesSearch =
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(query))
        if (!matchesSearch) return false
      }

      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
        return false
      }

      // Tags filter
      if (selectedTags.length > 0 && !item.tags?.some((tag) => selectedTags.includes(tag))) {
        return false
      }

      // Status filter
      if (selectedStatuses.length > 0 && item.status && !selectedStatuses.includes(item.status)) {
        return false
      }

      return true
    })

    // Sort
    if (sortBy) {
      filtered.sort((a, b) => {
        let aValue = a[sortBy]
        let bValue = b[sortBy]

        if (sortBy === "date" && aValue instanceof Date && bValue instanceof Date) {
          aValue = aValue.getTime()
          bValue = bValue.getTime()
        }

        if (typeof aValue === "string" && typeof bValue === "string") {
          aValue = aValue.toLowerCase()
          bValue = bValue.toLowerCase()
        }

        if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
        if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
        return 0
      })
    }

    return filtered
  }, [items, searchQuery, selectedCategories, selectedTags, selectedStatuses, sortBy, sortOrder])

  const clearAllFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedTags([])
    setSelectedStatuses([])
  }

  const hasActiveFilters =
    searchQuery || selectedCategories.length > 0 || selectedTags.length > 0 || selectedStatuses.length > 0

  const defaultRenderItem = (item: FilterableListItem) => (
    <EnhancedCard key={item.id} variant="interactive" className="cursor-pointer" onClick={() => onItemClick?.(item)}>
      <EnhancedCardHeader>
        <div className="flex items-start justify-between">
          <EnhancedCardTitle className="text-base">{item.title}</EnhancedCardTitle>
          <Badge variant="outline" className="ml-2">
            {item.category}
          </Badge>
        </div>
        {item.description && <Text variant="description">{item.description}</Text>}
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
          {item.status && <Badge variant={item.status === "active" ? "default" : "secondary"}>{item.status}</Badge>}
        </div>
      </EnhancedCardContent>
    </EnhancedCard>
  )

  if (loading) {
    return (
      <Container className={className}>
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </Container>
    )
  }

  return (
    <Container className={className}>
      <div className="space-y-6">
        {/* Filters */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <Text variant="heading" as="h3">
              Filters
            </Text>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" onClick={clearAllFilters}>
                <X className="h-4 w-4 mr-1" />
                Clear all
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SearchInput
              placeholder="Search items..."
              value={searchQuery}
              onSearch={setSearchQuery}
              onClear={() => setSearchQuery("")}
            />

            <MultiSelect
              options={filterConfig.categories}
              selected={selectedCategories}
              onChange={setSelectedCategories}
              placeholder="Categories"
            />

            {filterConfig.tags && (
              <MultiSelect
                options={filterConfig.tags}
                selected={selectedTags}
                onChange={setSelectedTags}
                placeholder="Tags"
              />
            )}

            {filterConfig.statuses && (
              <MultiSelect
                options={filterConfig.statuses}
                selected={selectedStatuses}
                onChange={setSelectedStatuses}
                placeholder="Status"
              />
            )}
          </div>

          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {filterConfig.sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
              {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
              {sortOrder === "asc" ? "Ascending" : "Descending"}
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Text variant="description">
              {filteredAndSortedItems.length} of {items.length} items
            </Text>
            {hasActiveFilters && (
              <div className="flex gap-1 flex-wrap">
                {searchQuery && (
                  <Badge variant="outline">
                    Search: {searchQuery}
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0 ml-1" onClick={() => setSearchQuery("")}>
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                )}
                {selectedCategories.map((category) => (
                  <Badge key={category} variant="outline">
                    {filterConfig.categories.find((c) => c.value === category)?.label}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-4 w-4 p-0 ml-1"
                      onClick={() => setSelectedCategories(selectedCategories.filter((c) => c !== category))}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {filteredAndSortedItems.length === 0 ? (
            <div className="text-center py-12">
              <Text variant="description">{emptyMessage}</Text>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredAndSortedItems.map((item) => (renderItem ? renderItem(item) : defaultRenderItem(item)))}
            </div>
          )}
        </div>
      </div>
    </Container>
  )
}
