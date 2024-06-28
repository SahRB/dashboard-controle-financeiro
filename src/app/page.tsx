import LoginForm from "./components/LoginForm";
import Sidebar from "./components/Sidebar";


export default function Home() {
  return (
   < main className="flex min-h-screen flex-col items-center justify-between p-24">
        <LoginForm/>
    </main>
  );
}
