import { Home, Info, Monitor, Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const classeAtivo = 'bg-white dark:bg-zinc-600 shadow-sm text-slate-900 dark:text-white'
const classeInativo = 'text-zinc-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'

const opcoes = [
    { valor: 'light', Icone: Sun, label: 'Tema claro' },
    { valor: 'dark', Icone: Moon, label: 'Tema escuro' },
    { valor: 'system', Icone: Monitor, label: 'Tema do sistema' },
]

//Aplica a classe "dark" no <html> conforme a opção escolhida
function aplicarTema(opcao) {
    const escuro = opcao === 'dark' ||
        (opcao === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    document.documentElement.classList.toggle('dark', escuro)
}

const NavBar = () => {
    const [tema, setTema] = useState(() => localStorage.getItem('theme') || 'system')

    useEffect(() => {
        aplicarTema(tema)
        if (tema === 'system') localStorage.removeItem('theme')
        else localStorage.setItem('theme', tema)

        if (tema !== 'system') return
        // No modo sistema, acompanha mudanças do SO em tempo real
        const mq = window.matchMedia('(prefers-color-scheme: dark)')
        const aoMudar = () => aplicarTema('system')
        mq.addEventListener('change', aoMudar)
        return () => mq.removeEventListener('change', aoMudar)
    }, [tema])

    return (
        /*<nav className="relative bg-zinc-800/30 flex gap-10 p-8 rounded-3xl m-4 max-w-full max-h-full items-center justify-center">
            
            <div className="absolute left-12">
                <Link to="/" className="hover:opacity-60 hover:animate-spin"> 
                <img src="/src/assets/logo.svg" alt="Logo Visionists" className="w-16"/>
                </Link>
            </div>
            <div className="flex items-center gap-9 justify-center text-base">
                <Link to="/" className="flex items-center gap-3 hover:text-blue-800"><Home/> Home</Link>
                <p>Projetos</p>
                <Link to="/sobre" className="flex items-center gap-3 hover:text-blue-800"><Info/> Sobre Nós</Link>
            </div>
            <div className="absolute right-6">
                <a href="https://github.com/felippetuma/visionists" target="_blank" className="bg-blue-800 px-5 py-3 rounded-3xl text-white text-base flex items-center gap-2 font-bold hover:bg-blue-900"><SquareArrowOutUpRight/> GitHub</a>
            </div>
        </nav>*/
        <nav className=" bg-zinc-300 flex gap-10 px-9 py-2 rounded-3xl m-4 max-w-full max-h-full items-center justify-between dark:bg-zinc-800">
            
            <div className=" left-12">
                <Link to="/" className="hover:opacity-60 hover:animate-spin"> 
                <img src="/src/assets/logo.svg" alt="Logo Visionists" className="w-16 dark:invert"/>
                </Link>
            </div>
            <div className="flex items-center gap-9 justify-center text-base bg-zinc-300 dark:bg-zinc-700 rounded-full px-10 py-3">
                <Link to="/" className="flex items-center gap-1 px-2 py-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:-translate-y-1 "><Home size={18}/> Home</Link>
                <p>Projetos</p>
                <Link to="/sobre" className="flex items-center gap-2 hover:text-blue-800"><Info size={18}/> Sobre Nós</Link>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-full bg-zinc-300 dark:bg-zinc-700">
                {opcoes.map(({ valor, Icone, label }) => (
                    <button
                        key={valor}
                        type="button"
                        aria-label={label}
                        aria-pressed={tema === valor}
                        onClick={() => setTema(valor)}
                        className={`p-2 rounded-full cursor-pointer ${tema === valor ? classeAtivo : classeInativo}`}
                    >
                        <Icone size={18} />
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default NavBar
/*
<h1>Home</h1>
<h1>Projeto</h1>
<h1>Sobre Nós</h1>*/