// components/dashboard/BookingsTable.tsx
import React from "react";

export type Booking = {
  id: string;
  customer: string;
  puja: string;
  date: string;
  bookings: Booking[];
  status: "pending" | "confirmed" | "completed" | "cancelled";
};

export default function BookingsTable({ bookings }: { bookings: Booking[] }) {
  return (
    <div className="bg-white border rounded-lg overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-gray-50 text-left text-xs text-gray-600">
          <tr>
            <th className="px-4 py-3">Customer</th>
            <th className="px-4 py-3">Pooja</th>
            <th className="px-4 py-3">Date</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody className="text-sm">
          {bookings.map((b) => (
            <tr key={b.id} className="border-t">
              <td className="px-4 py-3">{b.customer}</td>
              <td className="px-4 py-3">{b.puja}</td>
              <td className="px-4 py-3">{b.date}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-1 rounded text-xs ${b.status === "confirmed" ? "bg-green-100 text-green-700" : b.status === "pending" ? "bg-yellow-100 text-yellow-700" : "bg-gray-100 text-gray-700"}`}>
                  {b.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="text-sm text-indigo-600 hover:underline mr-3">View</button>
                <button className="text-sm text-red-600 hover:underline">Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
