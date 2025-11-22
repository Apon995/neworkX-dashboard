"use client";


import React, { useEffect, useRef, useState } from "react";

interface AddTrainingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const initialValue = {
    jobTitle: "",
    jobCategory: "",
    locationType: "",
    salaryRange: "",
    employmentType: "",
    requiredSkills: "",
    requirements: "",
    jobDescription: "",
    deadline: "",
    openings: "",
};


export default function EditJobDetailsModal({ isOpen, onClose }: AddTrainingModalProps) {
    const modalRef = useRef<HTMLFormElement | null>(null);
    const [formData, setFormData] = useState(initialValue);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (!isOpen) return;

        function handleClickOutside(e: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            console.log(formData);
        } catch {
        } finally {
            setLoading(false);
        }
    };




    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 md:px-5 px-2">

            <div className="max-h-screen overflow-y-auto scrollbar-hide mx-auto w-full">
                <form
                    ref={modalRef}
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl border border-auth-form-border p-6 xl:max-w-4xl max-w-xl mx-auto w-full "
                >
                    <h3 className="text-lg font-semibold mb-5">Job Details</h3>

                    {/* Job Title */}
                    <div className="space-y-1 mb-3">
                        <p className="text-sm font-semibold">Job Title *</p>
                        <input
                            type="text"
                            required
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Job Category *</p>
                            <input
                                type="text"
                                name="jobCategory"
                                required
                                value={formData.jobCategory}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                            />
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Location Type *</p>
                            <input
                                type="text"
                                name="locationType"
                                required
                                value={formData.locationType}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Salary Range *</p>
                            <input
                                type="text"
                                name="salaryRange"
                                required
                                value={formData.salaryRange}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                            />
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Employment Type *</p>
                            <input
                                type="text"
                                name="employmentType"
                                required
                                value={formData.employmentType}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                            />
                        </div>
                    </div>

                    <div className="space-y-1 mb-3">
                        <p className="text-sm font-semibold">Required Skills *</p>
                        <input
                            type="text"
                            required
                            name="requiredSkills"
                            value={formData.requiredSkills}
                            onChange={handleChange}
                            className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                        />
                    </div>

                    <div className="space-y-1 mb-3">
                        <p className="text-sm font-semibold">Requirements *</p>
                        <input
                            type="text"
                            name="requirements"
                            required
                            value={formData.requirements}
                            onChange={handleChange}
                            className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                        />
                    </div>

                    <div className="space-y-1 mb-3">
                        <p className="text-sm font-semibold">Job Description *</p>
                        <textarea
                            name="jobDescription"
                            value={formData.jobDescription}
                            onChange={handleChange}
                            required
                            className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5] h-24"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Application Deadline *</p>
                            <input
                                type="date"
                                required
                                name="deadline"
                                value={formData.deadline}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                            />
                        </div>

                        <div className="space-y-1">
                            <p className="text-sm font-semibold">Number of Openings *</p>
                            <input
                                type="number"
                                name="openings"
                                required
                                value={formData.openings}
                                onChange={handleChange}
                                className="w-full outline-none rounded-lg px-4 py-3 text-sm bg-[#F3F3F5]"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 mt-4">
                        <button type="button" onClick={onClose} className="px-5 hover:cursor-pointer py-2 rounded-lg border border-[#E7000B33] text-sm text-black font-normal">
                            Cancel
                        </button>

                        <button type="submit" className="px-5 py-2 hover:cursor-pointer rounded-lg text-white bg-black text-sm">
                            Publish Job
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
