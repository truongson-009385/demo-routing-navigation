import PhotoCard from '@/components/PhotoCard'

export default async function PhotoModal({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

    return (
        <>
            <PhotoCard id={id} />
        </>
    )
}
