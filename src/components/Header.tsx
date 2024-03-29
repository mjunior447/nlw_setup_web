import { Plus } from "phosphor-react";

import logoImage from '../assets/logo.svg'

export function Header() {
    return (
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
            <img src={logoImage} alt="" />
            <button
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:opacity-70"
            >
            <Plus size={20} className="text-violet-500" />
            Novo hábito
            </button>
        </div>
    )
}