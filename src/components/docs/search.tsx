'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, FileText } from 'lucide-react';
import { DOCS, DOC_CATEGORIES } from '@/lib/docs-config';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SearchDocs() {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const searchTerm = query.toLowerCase();
    return DOCS.filter(
      (doc) =>
        doc.title.toLowerCase().includes(searchTerm) ||
        doc.description.toLowerCase().includes(searchTerm) ||
        doc.fileName.toLowerCase().includes(searchTerm) ||
        doc.category.toLowerCase().includes(searchTerm)
    ).slice(0, 8); // Limit to 8 results
  }, [query]);

  useEffect(() => {
    // Keyboard shortcut: Cmd/Ctrl + K
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      // Escape to close
      if (e.key === 'Escape') {
        setIsOpen(false);
        setQuery('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    // Click outside to close
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleResultClick = (fileName: string) => {
    router.push(`/docs/${fileName}`);
    setQuery('');
    setIsOpen(false);
  };

  const getCategoryIcon = (categoryId: string) => {
    return DOC_CATEGORIES.find((cat) => cat.id === categoryId)?.icon || FileText;
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-9 pr-20 h-11"
          aria-label="Search documentation"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="h-7 w-7 p-0"
              aria-label="Clear search"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
          <kbd className="hidden sm:inline-flex h-7 select-none items-center gap-1 rounded border bg-muted px-2 font-mono text-xs text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>

      {/* Search Results */}
      {isOpen && query && results.length > 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 w-full bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden"
        >
          <div className="p-2 max-h-96 overflow-y-auto">
            {results.map((doc) => {
              const Icon = getCategoryIcon(doc.category);
              return (
                <button
                  key={doc.fileName}
                  onClick={() => handleResultClick(doc.fileName)}
                  className={cn(
                    'w-full flex items-start gap-3 p-3 rounded-md',
                    'hover:bg-muted transition-colors text-left group'
                  )}
                >
                  <div className="mt-0.5">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {doc.title}
                    </div>
                    <div className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                      {doc.description}
                    </div>
                    <div className="text-xs text-muted-foreground/70 mt-1">
                      {DOC_CATEGORIES.find((cat) => cat.id === doc.category)?.label}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && (
        <div
          ref={resultsRef}
          className="absolute top-full mt-2 w-full bg-background border border-border rounded-lg shadow-xl z-50 p-6 text-center"
        >
          <FileText className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
          <div className="text-sm font-medium text-foreground mb-1">No results found</div>
          <div className="text-xs text-muted-foreground">
            Try a different search term
          </div>
        </div>
      )}
    </div>
  );
}
