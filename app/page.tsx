import { Button } from "../components/brutalist/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-black uppercase tracking-wider">
          Brutalist UI Components
        </h1>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Default Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Button Sizes</h2>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔥</Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Heavy Intensity</h2>
            <div className="flex flex-wrap gap-4">
              <Button intensity="heavy">Heavy Default</Button>
              <Button variant="outline" intensity="heavy">Heavy Outline</Button>
              <Button variant="destructive" intensity="heavy">Heavy Destructive</Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Ghost & Link</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
