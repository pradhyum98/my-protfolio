'use client';

import { Search } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import type { FilterState, SortOption } from '@/types/writing';

type WritingFiltersProps = {
  filters: FilterState;
  sortBy: SortOption;
  tags: string[];
  categories: string[];
  years: string[];
  onFilterChange: (filters: FilterState) => void;
  onSortChange: (sort: SortOption) => void;
};

export function WritingFilters({
  filters,
  sortBy,
  tags,
  categories,
  years,
  onFilterChange,
  onSortChange,
}: WritingFiltersProps) {
  return (
    <div className="space-y-6 py-8">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          value={filters.search}
          onChange={(e) => onFilterChange({ ...filters, search: e.target.value })}
          className="pl-10"
        />
      </div>

      {/* Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Category Filter */}
        <Select
          value={filters.category}
          onValueChange={(value) => onFilterChange({ ...filters, category: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Tag Filter */}
        <Select
          value={filters.tag}
          onValueChange={(value) => onFilterChange({ ...filters, tag: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="All Tags" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Tags</SelectItem>
            {tags.map((tag) => (
              <SelectItem key={tag} value={tag}>
                {tag}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Year Filter */}
        <Select
          value={filters.year}
          onValueChange={(value) => onFilterChange({ ...filters, year: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="All Years" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Sort */}
        <Select value={sortBy} onValueChange={(value) => onSortChange(value as SortOption)}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest First</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
            <SelectItem value="a-z">A → Z</SelectItem>
            <SelectItem value="z-a">Z → A</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
