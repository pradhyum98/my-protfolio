import type { Metadata } from "next"
import { Calendar, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { copy } from "@/content/copy"

export const metadata: Metadata = {
  title: copy.seo.services.title,
  description: copy.seo.services.description,
  keywords: copy.seo.services.keywords,
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24 md:pt-28">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {copy.services.heading}
          </h1>
          <p className="text-xl text-foreground/70">
            {copy.services.subheading}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {copy.services.offerings.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <div className="mb-3 flex items-start justify-between gap-4">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <Badge variant="outline">{service.duration}</Badge>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <h4 className="mb-3 font-semibold text-foreground/90">
                  {copy.services.deliverablesLabel}
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-foreground/70">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600 dark:text-green-500" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="flex-col items-stretch gap-3 border-t pt-6">
                <div className="text-center">
                  <p className="text-lg font-bold">{service.pricing}</p>
                </div>
                <Button asChild>
                  <a href="#contact">
                    <Calendar className="h-5 w-5" />
                    {copy.services.bookButton}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 rounded-xl border border-foreground/10 bg-muted/30 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">
            {copy.services.ctaHeading}
          </h2>
          <p className="mb-6 text-foreground/70">
            {copy.services.ctaSubheading}
          </p>
          <Button size="lg" asChild>
            <a href="/contact">
              <Calendar className="h-5 w-5" />
              {copy.services.scheduleButton}
            </a>
          </Button>
        </section>
      </div>
    </div>
  )
}
