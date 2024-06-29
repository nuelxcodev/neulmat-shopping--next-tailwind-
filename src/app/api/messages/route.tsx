import { NextRequest } from "next/server";

interface User {
  username: string;
  email: string;
  message: string;
  timeStamp: number;
  isAdmin: boolean;
}
export async function Handle(req: NextRequest) {
  const data = await req.json();
  const { message, isAdmin } = data;

  const user: User = {
    username: "chukus",
    email: "chukus@gmail.com",
    message: message,
    timeStamp: Date.now(),
    isAdmin: isAdmin,
  };
  return Response.json({ user });
}

export { Handle as POST, Handle as GET, Handle as DELETE };
