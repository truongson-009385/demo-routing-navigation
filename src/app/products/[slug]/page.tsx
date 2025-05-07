export default function ProductDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-10">
        Product Detail: {params.slug}
      </h1>
    </div>
  );
}