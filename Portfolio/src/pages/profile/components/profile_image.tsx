import { profile } from "../contants/profile"

export function ProfileImage() {
  return (
    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border bg-muted shadow-sm sm:h-36 sm:w-36">
      <img
        src={profile.picture}
        alt={profile.name}
        className="h-full w-full object-cover"
      />
    </div>
  )
}

