// components/dashboard/ProfileCard.tsx
import { useUser } from "@clerk/nextjs";
import { useMemo } from "react";

export default function ProfileCard() {
  const { user } = useUser();

  // Safe calculation — runs only when user changes
  const memberSince = useMemo(() => {
    if (user?.createdAt) {
      return new Date(user.createdAt).getFullYear();
    }
    return "N/A";
  }, [user]);

  return (
    <div className="bg-white border rounded-lg p-4">
      <div className="flex items-center gap-4">
        <div className="h-14 w-14 rounded-full bg-gray-200 flex items-center justify-center text-xl">
          {user?.firstName?.[0] || "U"}
        </div>

        <div>
          <div className="font-semibold">
            {user?.fullName || user?.primaryEmailAddress?.emailAddress}
          </div>

          <div className="text-sm text-gray-500">
            Member since {memberSince}
          </div>
        </div>
      </div>
    </div>
  );
}
