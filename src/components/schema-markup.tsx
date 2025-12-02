import { SITE_CONFIG } from "@/lib/constants"
import { copy } from "@/content/copy"

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_CONFIG.name,
    jobTitle: SITE_CONFIG.title,
    email: `mailto:${SITE_CONFIG.email}`,
    telephone: SITE_CONFIG.phone,
    url: SITE_CONFIG.url,
    image: "[ADD DETAIL]",
    sameAs: [
      SITE_CONFIG.social.linkedin,
      SITE_CONFIG.social.github,
      SITE_CONFIG.social.youtube,
    ],
    worksFor: [
      { "@type": "Organization", name: copy.schema.organizations.highlevel },
      { "@type": "Organization", name: copy.schema.organizations.renewPower },
      { "@type": "Organization", name: copy.schema.organizations.haspr },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: copy.schema.address.locality,
      addressCountry: copy.schema.address.country,
    },
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    url: SITE_CONFIG.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_CONFIG.url}/search?q={query}`,
      "query-input": "required name=query",
    },
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: copy.schema.faq.roles.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.schema.faq.roles.answer,
        },
      },
      {
        "@type": "Question",
        name: copy.schema.faq.remote.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.schema.faq.remote.answer,
        },
      },
      {
        "@type": "Question",
        name: copy.schema.faq.stacks.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: copy.schema.faq.stacks.answer,
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
