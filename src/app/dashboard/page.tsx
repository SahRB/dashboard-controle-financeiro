import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Card from "../components/Card";

export default async function Dashboard() {
  const session = await getServerSession()
  if (!session) {
    redirect("/");
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Olá, {session?.user?.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <Card title="Despesas" value="R$ 80,00" />
        <Card title="Renda" value="R$ 5000" />
        <Card title="Saldo" value="R$ 4920" />
      </div>
    </main>
  )
}
