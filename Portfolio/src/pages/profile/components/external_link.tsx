import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export function ExternalLinkCard({
  icon,
  title,
  username,
  description,
  href,
}: {
  icon: React.ReactNode
  title: string
  username: string | undefined
  description: string
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group block"
    >
      <Card className="h-full transition-colors hover:border-foreground/25 hover:bg-muted/40">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border bg-background">
                {icon}
              </div>
              <div>
                <CardTitle className="text-base">{title}</CardTitle>
                {
                    username &&
                    (
                        <CardDescription>{username}</CardDescription>
                    )
                }
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </a>
  )
}