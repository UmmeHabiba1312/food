import { getAuth } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { getToken } = getAuth(req);
  const token = await getToken();

  const res = await fetch("http://localhost:8000/your-agent-endpoint", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      /* order data */
    }),
  });

  const data = await res.json();
  return Response.json(data);
}
