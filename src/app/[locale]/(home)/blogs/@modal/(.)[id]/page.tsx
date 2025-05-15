import Modal from "@/components/ui/modal";

export default async function ModalPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return (
        <Modal id={id} />
    );
}