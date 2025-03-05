const API_URL = process.env.API_URL ?? 'http://localhost:8000';

export default async function Page() {
  const res = await fetch(`${API_URL}/api`);
  const text = await res.text();

  console.log(text);

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">Hello, World!</h1>
    </div>
  );
}
