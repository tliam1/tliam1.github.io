import { Button } from '@/components/ui/button';
import { GraphCanvas, darkTheme } from 'reagraph';
import { edges, nodes } from './constants';

export function SkillsGraph() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-background px-4 py-10">
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <a href="/">About</a>
            </Button>
            <Button variant="ghost" size="sm">
              <a href="/resume">Resume</a>
            </Button>
          </nav>
        </div>
      </header>

      <div className="h-[calc(100vh-3.5rem)] w-full">
        <GraphCanvas
          nodes={nodes}
          edges={edges}
          draggable
          theme={{
            ...darkTheme,
            canvas: {
              ...darkTheme.canvas,
              background: '#0a0a0a',
            },
          }}
        />
      </div>
    </main>
  );
}