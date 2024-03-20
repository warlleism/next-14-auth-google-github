import { getServerSession } from "next-auth"
import ButtonLogout from "./components/ButtonLogout"
import { redirect } from "next/navigation"

export default async function Page() {
    const session = await getServerSession()
    if (!session) {
        redirect('/')
    }
    return (
        <div>
            <div>Olá {session?.user?.name}</div>
            <div>Seu email: {session?.user?.email}</div>
            <div>Dashboard</div>
            <ButtonLogout />
        </div>
    )
}