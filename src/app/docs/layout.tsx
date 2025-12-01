'use client';

import { DocsSidebar } from '@/components/docs/sidebar';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background relative pt-24 md:pt-32">
      {/* Accent background with red and blue gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Blue accent - top left */}
        <div
          className="absolute top-0 left-0 w-96 h-96 opacity-[0.15] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
          }}
        />

        {/* Red accent - top right */}
        <div
          className="absolute top-20 right-0 w-96 h-96 opacity-[0.12] blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, transparent 70%)',
          }}
        />

        {/* Purple center blend */}
        <ProgressiveBlur
          intensity={0.15}
          direction="radial"
          from="rgba(139, 92, 246, 0.05)"
          to="transparent"
          className="top-0"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-4 lg:px-6 py-8 md:py-12">
          {/* Sidebar - Desktop sticky, Mobile top */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:pr-4">
            <div className="lg:pb-8">
              <DocsSidebar />
            </div>
          </aside>

          {/* Main content */}
          <main className="lg:col-span-9">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
