"use client";

interface DeleteConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function DeleteConfirmModal({
    isOpen,
    onClose,
    onConfirm,
}: DeleteConfirmModalProps) {


    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center px-3">
            <div
                className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8"
            >
                {/* Title */}
                <h2 className="text-xl font-semibold text-black">Delete Training</h2>

                {/* Message */}
                <p className="text-black font-normal mt-2">
                    Are you sure you want to Delete this training?
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 border border-[#E7000B33] text-black rounded-md hover:bg-red-50 transition hover:cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-6 py-2 bg-black text-white rounded-md hover:opacity-90 transition hover:cursor-pointer"
                    >
                        Confirm Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
