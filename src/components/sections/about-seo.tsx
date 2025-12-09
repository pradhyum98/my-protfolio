"use client";

import { copy } from "@/content/copy";
import { Check } from "lucide-react";

export function AboutSeo() {
    const seo = copy.seoContent;

    return (
        <section className="relative w-full bg-background py-20 px-4 md:px-6 overflow-hidden">
            <div className="container mx-auto max-w-5xl">

                {/* Intro / About */}
                <div className="mb-20 grid gap-12 md:grid-cols-2">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                            {seo.aboutMe.heading}
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>{seo.hero.intro}</p>
                            <p>{seo.hero.subIntro}</p>
                            <p>{seo.aboutMe.description}</p>
                            <p className="font-medium text-foreground">{seo.aboutMe.closing}</p>
                        </div>
                        <div className="pt-4">
                            {seo.aboutMe.bullets.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 mb-2">
                                    <Check className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                    <span className="text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="space-y-8 p-6 md:p-8 bg-muted/30 rounded-2xl border border-border/50">
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">
                            {seo.skills.heading}
                        </h3>
                        <div className="grid gap-6">
                            {seo.skills.categories.map((cat, idx) => (
                                <div key={idx}>
                                    <h4 className="font-semibold text-lg text-foreground mb-2">{cat.title}</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {cat.items}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Services & Why Me */}
                <div className="grid gap-16 lg:grid-cols-2">
                    {/* Services */}
                    <div>
                        <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                            {seo.services.heading}
                        </h2>
                        <div className="grid gap-8">
                            {seo.services.items.map((item, idx) => (
                                <div key={idx} className="group">
                                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Me */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -z-10" />
                        <div className="p-8 md:p-10 border border-primary/20 rounded-3xl bg-background/50 backdrop-blur-sm h-full">
                            <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl text-foreground">
                                {seo.whyMe.heading}
                            </h2>
                            <ul className="space-y-4 mb-8">
                                {seo.whyMe.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        <span className="text-lg text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xl font-medium text-foreground italic border-l-4 border-primary pl-4">
                                "{seo.whyMe.closing}"
                            </p>

                            <div className="mt-12 pt-8 border-t border-border/50">
                                <h3 className="text-2xl font-bold mb-4">{seo.connect.heading}</h3>
                                <p className="text-muted-foreground mb-6">{seo.connect.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
