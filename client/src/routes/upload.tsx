import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/upload')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <form>
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  )
}
