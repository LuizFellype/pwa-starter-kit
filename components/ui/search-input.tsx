"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  onSearch?: (value: string) => void
  onClear?: () => void
  debounceMs?: number
  showClearButton?: boolean
}

const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, onSearch, onClear, debounceMs = 300, showClearButton = true, ...props }, ref) => {
    const [value, setValue] = React.useState(props.value || "")
    const debounceRef = React.useRef<NodeJS.Timeout>()

    React.useEffect(() => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }

      debounceRef.current = setTimeout(() => {
        onSearch?.(value as string)
      }, debounceMs)

      return () => {
        if (debounceRef.current) {
          clearTimeout(debounceRef.current)
        }
      }
    }, [value, onSearch, debounceMs])

    const handleClear = () => {
      setValue("")
      onClear?.()
      onSearch?.("")
    }

    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={ref}
          className={cn("pl-10", showClearButton && value && "pr-10", className)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          {...props}
        />
        {showClearButton && value && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-transparent"
            onClick={handleClear}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
    )
  },
)
SearchInput.displayName = "SearchInput"

export { SearchInput }
