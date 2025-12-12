// components/dashboard/StatsCard.tsx
import React from "react";

export default function StatsCard({ title, value, delta }: { title: string; value: string | number; delta?: string }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-600">{title}</div>
      <div className="mt-2 flex items-baseline gap-3">
        <div className="text-2xl font-bold text-gray-600">{value}</div>
        {delta && <div className="text-sm text-green-600">{delta}</div>}
      </div>
    </div>
  );
}
