// client component (agar "use client" likha ho)
'use client';

import { useUser } from "@clerk/nextjs";

export default function ProtectedPage() {
  const { user } = useUser();

  if (!user) {
    return <div>Login</div>;
  }

  return <div>Welcome, {user.firstName}</div>;
}
