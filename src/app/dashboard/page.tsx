import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Dashboard(){
    const session = await getServerSession()
    if(!session){
        redirect("/");
    }
    return(
        
        <main className="">
            <h1>Olá, {session?.user?.name}
        </h1></main>
    )
    
}