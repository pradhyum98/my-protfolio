import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants"
import { copy } from "@/content/copy"
import { SmartLink } from "@/components/ui/smart-link"
import { ResumeDownloadLink } from "@/components/resume-download-button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
              <p className="text-sm text-foreground/60">{SITE_CONFIG.title}</p>
            </div>
            <div className="flex gap-4">
              <SmartLink
                href={SITE_CONFIG.social.linkedin}
                className="text-foreground/60 transition-colors hover:text-foreground inline-flex"
                aria-label={copy.footer.ariaLinkedin}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">{copy.footer.ariaLinkedin}</span>
              </SmartLink>
              <SmartLink
                href={SITE_CONFIG.social.github}
                className="text-foreground/60 transition-colors hover:text-foreground inline-flex"
                aria-label={copy.footer.ariaGithub}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">{copy.footer.ariaGithub}</span>
              </SmartLink>

              <SmartLink
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-foreground/60 transition-colors hover:text-foreground inline-flex"
                aria-label={copy.footer.ariaEmail}
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">{copy.footer.ariaEmail}</span>
              </SmartLink>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">{copy.footer.navigationHeading}</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">{copy.footer.quickLinksHeading}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/skills"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  {copy.footer.skills}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  {copy.footer.services}
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  {copy.footer.writing}
                </Link>
              </li>
              <li>
                <ResumeDownloadLink
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  showIcon={false}
                >
                  {copy.footer.downloadResume}
                </ResumeDownloadLink>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">{copy.footer.contactHeading}</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>{SITE_CONFIG.location}</li>
              <li>{SITE_CONFIG.timezone}</li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-foreground"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-foreground"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-foreground/10 pt-8 text-center text-sm text-foreground/60">
          <p>
            © {currentYear} {SITE_CONFIG.name}. {copy.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  )
}
