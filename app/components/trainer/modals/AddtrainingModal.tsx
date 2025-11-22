"use client";

import { PlusCircle } from "lucide-react";

import React, { useEffect, useRef, useState } from "react";

interface AddTrainingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddTrainingModal({ isOpen, onClose }: AddTrainingModalProps) {
  const modalRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    TrainingProgramName: "",
    TrainingLink: "",
    TrainingDuration: "",
    Deadline: "",
    Description: "",

  });

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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)


    try {
      console.log(formData)
    }
    catch {

    }
    finally {
      setLoading(true)
    }



  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <form ref={modalRef} onSubmit={handleSubmit} className="bg-white w-[650px] rounded-xl p-8 shadow-lg relative">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-black">Add New Training Program</h2>

        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">

          {/* Training Program Name */}
          <div>
            <label className="text-sm font-normal text-black">Training Program Name</label>
            <input
              type="text"
              id="TrainingProgramName"
              name="TrainingProgramName"
              value={formData.TrainingProgramName}
              onChange={(e) => setFormData({ ...formData, TrainingProgramName: e.target.value })}
              className="w-full mt-1 px-3 py-2 border border-auth-form-border rounded-md"

            />
          </div>

          {/* Training Link */}
          <div>
            <label className="text-sm text-black font-normal">Training Link</label>
            <input
              type="text"
              id="TrainingLink"
              name="TrainingLink"
              value={formData.TrainingLink}
              onChange={(e) => setFormData({ ...formData, TrainingLink: e.target.value })}
              className="w-full mt-1 px-3 py-2 border rounded-md border-auth-form-border"

            />
          </div>

          {/* Row: Duration + Deadline */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-normal text-black">Training Duration</label>
              <input
                type="text"
                id="TrainingDuration"
                name="TrainiDuration"
                value={formData.TrainingDuration}
                onChange={(e) => setFormData({ ...formData, TrainingDuration: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-md border-auth-form-border"
              />
            </div>

            <div>
              <label className="text-sm text-black font-normal">Deadline</label>
              <input
                type="date"
                id="Deadline"
                name="Deadline"
                value={formData.Deadline}
                onChange={(e) => setFormData({ ...formData, Deadline: e.target.value })}
                className="w-full mt-1 px-3 py-2 border rounded-md border-auth-form-border"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-black font-normal">Description</label>
            <textarea
              id="Description"
              name="Description"
              value={formData.Description}
              onChange={(e) => setFormData({ ...formData, Description: e.target.value })}
              className="w-full h-28 mt-1 px-3 py-2 border rounded-md resize-none border-auth-form-border"
            />
          </div>
        </div>

        {/* Add Button */}
        <div className="mt-8 flex justify-end">
          <button type="submit" className="flex items-center gap-2 bg-btn-bg font-normal text-white hover:cursor-pointer px-6 py-2 rounded-md transition">
            <PlusCircle size={18} /> Add
          </button>
        </div>

      </form>
    </div>
  );
}
