import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <section className="mx-auto max-w-3xl text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          We believe every square foot should earn its keep
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Stores spend millions on rent but arrange layouts based on gut
          instinct. Floxo brings a scientific approach to physical space
          optimization.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight">
          What we stand for
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Privacy First</CardTitle>
              <CardDescription>
                No facial recognition, movement patterns only.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Data-Driven</CardTitle>
              <CardDescription>
                Every recommendation backed by evidence.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Actionable</CardTitle>
              <CardDescription>
                Insights that translate to immediate layout changes.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="mt-20 rounded-2xl border border-border/60 bg-muted/40 px-8 py-12 text-center">
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Built by a team passionate about the intersection of computer vision
          and retail
        </p>
      </section>
    </div>
  );
}
