# Code Block Examples

This document demonstrates the premium code block features available in the documentation.

## TypeScript Component Example

Here's a React component with syntax highlighting, filename, and line highlights:

```tsx filename="src/components/user-card.tsx"
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

type UserCardProps = {
  name: string;
  email: string;
};

export const UserCard = ({ name, email }: UserCardProps) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = () => {
    setIsFollowing(prev => !prev);
  };

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-muted-foreground mb-4">{email}</p>
      <Button onClick={handleFollow} variant={isFollowing ? 'outline' : 'default'}>
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </div>
  );
};
```

## Installation Commands

### Install Dependencies

You can install using your preferred package manager:

```bash
npm install next-mdx-remote react-syntax-highlighter
```

```bash
yarn add next-mdx-remote react-syntax-highlighter
```

```bash
pnpm add next-mdx-remote react-syntax-highlighter
```

## API Route Example

Here's how to create a custom API route in Next.js App Router:

```typescript filename="src/app/api/users/route.ts"
import { NextResponse } from 'next/server';

type User = {
  id: string;
  name: string;
  email: string;
};

export async function GET() {
  const users: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return NextResponse.json({ users });
}

export async function POST(request: Request) {
  const body = await request.json();

  // Validate and create user
  const newUser: User = {
    id: crypto.randomUUID(),
    name: body.name,
    email: body.email,
  };

  return NextResponse.json({ user: newUser }, { status: 201 });
}
```

## Configuration File

Example Next.js configuration with TypeScript:

```typescript filename="next.config.ts"
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
```

## Shell Commands

Common terminal commands for development:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## JSON Configuration

Example of a `tsconfig.json`:

```json filename="tsconfig.json"
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## CSS Styling

Tailwind CSS configuration example:

```css filename="globals.css"
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
  }
}

@layer components {
  .btn-primary {
    @apply bg-primary text-primary-foreground hover:bg-primary/90;
  }
}
```

## Features Overview

### Syntax Highlighting
All code blocks feature beautiful syntax highlighting with support for 100+ languages.

### Copy to Clipboard
Click the copy button in the top-right corner of any code block to copy the code.

### Dark/Light Theme
Code blocks automatically adapt to your theme preference.

### Line Numbers
Line numbers are displayed by default for better reference (except for bash commands).

### Filename Badges
Show the relevant filename to provide context about where code belongs.

### Long Code Collapsing
Code blocks with more than 20 lines can be collapsed to save space.

## Advanced Features

### Multi-File Examples
You can show related files together using multiple code blocks:

**Component File:**
```tsx filename="src/components/counter.tsx"
'use client';

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
};
```

**Test File:**
```typescript filename="src/components/counter.test.tsx"
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './counter';

describe('Counter', () => {
  it('increments count on button click', () => {
    render(<Counter />);

    const button = screen.getByText('Increment');
    fireEvent.click(button);

    expect(screen.getByText('Count: 1')).toBeInTheDocument();
  });
});
```

---

## Pro Tips

1. **Use Descriptive Filenames:** Always include the `filename` attribute to give readers context
2. **Highlight Important Lines:** Use `{line-numbers}` to draw attention to key parts
3. **Keep Examples Focused:** Show complete, runnable examples when possible
4. **Use Appropriate Languages:** Specify the correct language for proper syntax highlighting
5. **Consider Mobile:** Long lines will scroll horizontally - keep code concise

---

**Happy Coding! 🚀**
