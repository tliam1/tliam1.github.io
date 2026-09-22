import {
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  MapPin,
  Mail,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { profile } from "./contants/profile"
import { ProfileImage, ExperienceItem, ExternalLinkCard } from "./components"
import resumePdf from "@/assets/Liam_Tapper_Resume_SEPT_06_2026.pdf"
import { Link } from 'react-router-dom'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Link to="/resume">Resume</Link>
            </Button>
            <Button variant="ghost" size="sm">
              <Link to="/skills">Skills</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <section>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <ProfileImage />
            <div className="space-y-3">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  {profile.name}
                </h1>
                <p className="mt-1 text-lg text-muted-foreground">
                  {profile.title}
                </p>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {profile.location}
                </span>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </section>
        <Separator className="my-10" />

        {/* About */}
        <section id="about" className="scroll-mt-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight">
              About me
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              {profile.about.map((paragraph) => (
                <p key={paragraph} className="leading-7">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="mt-12">
          <div className="mb-5">
            <h2 className="text-xl font-semibold">Find me</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Important / Relavent Sites
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ExternalLinkCard
              icon={<FaGithub/>}
              title={profile.github.label}
              username={profile.github.username}
              description={profile.github.description}
              href={profile.github.url}
            />
            <ExternalLinkCard
              icon={<FaLinkedin/>}
              title={profile.linkedin.label}
              username={profile.linkedin.username}
              description={profile.linkedin.description}
              href={profile.linkedin.url}
            />
          </div>

          {/* Resume preview */}
          <Card className="mt-4">
            <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Resume</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Contains all information on me. Download or view as needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">
                  <Link to="/resume" className="inline-flex items-center whitespace-nowrap">
                    View resume
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button>
                  <a
                    href={resumePdf}
                    download="Liam_Tapper_Resume_2026.pdf"
                    className="inline-flex items-center whitespace-nowrap"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Skills */}
        <section className="mt-12">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Skills</h2>
            </div>
            <Button variant="ghost" size="sm">
              <Link to="/skills" className="inline-flex items-center whitespace-nowrap">
                Explore graph
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <Card>
            <CardContent className="flex flex-wrap gap-2 p-5">
              {profile.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Work experience</h2>
          </div>
          <div className="space-y-8 border-l pl-0">
            {profile.experience.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.role}`}
                {...experience}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>2026 {profile.name}</span>
          <span>Built with React + Tailwind + ShadCN</span>
        </div>
      </footer>
    </div>
  )
}