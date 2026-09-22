import { Badge } from "@/components/ui/badge"

export function ExperienceItem({
  company,
  role,
  dates,
  description,
  skills,
}: {
  company: string
  role: string
  dates: string
  description: string
  skills: string[]
}) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border-2 border-background bg-foreground ring-1 ring-border" />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <h3 className="font-semibold">{role}</h3>
          <p className="text-sm text-muted-foreground">{company}</p>
        </div>

        <span className="text-sm text-muted-foreground">{dates}</span>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
