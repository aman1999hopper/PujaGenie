import { useUser, UserButton, RedirectToSignIn } from "@clerk/nextjs";

export default function Dashboard() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) return null;

  if (!isSignedIn) {
    return <RedirectToSignIn redirectUrl="/dashboard" />;
  }

  return (
    <div className="p-10">
      <UserButton />
      <h1 className="text-3xl font-bold">Welcome {user?.firstName} 👋</h1>
    </div>
  );
}
