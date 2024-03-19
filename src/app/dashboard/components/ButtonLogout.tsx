"use client"

import { signOut } from "next-auth/react"

export default async function ButtonLogout() {

    return (
        <button
            onClick={() => signOut()}
            className="bg-red-900 p-5 rounded-lg text-white font-semibold"
        >Sair</button>
    )
}