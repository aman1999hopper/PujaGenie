// components/dashboard/CreateBookingModal.tsx
"use client";

import { useState } from "react";

type Booking = {
  id: string;
  customer: string;
  pooja: string;
  date: string;
  status: string;
};

export default function CreateBookingModal({
  open,
  onClose,
  onCreate,
}: {
  open: boolean;
  onClose: () => void;
  onCreate: (b: Booking) => void;
}) {
  const [name, setName] = useState("");
  const [pooja, setPooja] = useState("Havan");
  const [date, setDate] = useState("");

  if (!open) return null;

  const handleCreate = () => {
    const newBooking: Booking = {
      id: crypto.randomUUID(), // ✔ stable + no Date.now() warning
      customer: name,
      pooja,
      date,
      status: "pending",
    };

    onCreate(newBooking);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-3">Create Booking</h3>

        <div className="space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Customer name"
            className="w-full p-2 border rounded"
          />

          <select
            value={pooja}
            onChange={(e) => setPooja(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option>Havan</option>
            <option>Satyanarayan</option>
            <option>Grih Pravesh</option>
          </select>

          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded border">
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="px-4 py-2 rounded bg-indigo-600 text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
