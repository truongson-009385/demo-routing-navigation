export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Photo {params.id}</h1>
      <p>This is the full photo page.</p>
    </div>
  )
}
