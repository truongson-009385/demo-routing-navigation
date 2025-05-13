'use client'

import { useRouter } from "next/navigation";

const Modal = ({ id } : { id: string}) => {
    const router = useRouter();

    return (
        <div aria-modal="true" role="dialog" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="p-6 bg-white rounded-lg shadow-lg w-11/12 max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Blog {id}</h1>
                <p className="text-gray-600">This is the modal blog page.</p>
                <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;