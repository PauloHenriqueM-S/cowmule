export async function GET(request:Request) {
  const users = "localhost:3001/users";
  return new Response(JSON.stringify(users), { status: 200, headers: { "Content-Type": "application/json" } });
}

export async function POST(request:Request) {
  const body = await request.json();
  const { username, email, password } = body;
  return new Response(JSON.stringify({ username, email, password }), { status: 200, headers: { "Content-Type": "application/json" } });
}