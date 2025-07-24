import connectToDatabase from "../../../lib/mongodb";

export async function GET(req) {
  await connectToDatabase();

  return new Response(JSON.stringify({ message: "Connected to MongoDB!" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
