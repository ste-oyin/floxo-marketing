import Link from "next/link";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = { title: "Demo" };

export default function DemoPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          See Floxo in action
        </h1>
      </section>

      <div className="mx-auto mt-12 flex aspect-video max-w-4xl flex-col items-center justify-center gap-4 rounded-2xl bg-muted ring-1 ring-foreground/10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm ring-1 ring-border">
          <Play className="h-8 w-8 text-primary" fill="currentColor" />
        </div>
        <p className="text-sm font-medium text-muted-foreground">
          Demo video coming soon
        </p>
      </div>

      <section className="mt-16">
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Upload any footage</CardTitle>
              <CardDescription>
                Works with standard CCTV, IP cameras, or phone recordings.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Results in minutes</CardTitle>
              <CardDescription>
                Our pipeline processes video and generates analytics
                automatically.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Actionable insights</CardTitle>
              <CardDescription>
                Every metric comes with plain-English explanations and
                recommendations.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-20 flex flex-col items-center gap-6 rounded-2xl border border-border/60 bg-muted/40 px-8 py-12 text-center">
        <h2 className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
          Want to try it with your own footage?
        </h2>
        <Button size="lg" nativeButton={false} render={<Link href="/contact" />}>
          Start Free Pilot
        </Button>
      </section>
    </div>
  );
}
