// components/dashboard/SimpleChart.tsx
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", bookings: 30 },
  { date: "Feb", bookings: 45 },
  { date: "Mar", bookings: 60 },
  { date: "Apr", bookings: 50 },
  { date: "May", bookings: 80 },
];

export default function SimpleChart() {
  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="text-sm text-gray-500 mb-2">Bookings (last 6 months)</div>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="bookings" stroke="#7c3aed" fillOpacity={1} fill="url(#colorBookings)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
