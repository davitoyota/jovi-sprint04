import { ExternalLink } from "lucide-react"

const Membros = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6 ml-5 mr-5">
      <div className="bg-zinc-400 p-4 rounded-2xl ">
        <h1 className="text-lg">Felippe Tuma</h1>
        <p className="mt-3">aaaaaa</p>
      </div>
      <div className="bg-zinc-400 p-4 rounded-2xl">
        <h1 className="text-lg">Felippe Tuma</h1>
        <p className="mt-3">aaaaaa</p>
      </div>
      <div className="dark:bg-zinc-800 bg-zinc-300 p-4 rounded-2xl row-span-2 flex items-center justify-center flex-col hover:-translate-y-3 shadow-lg hover:shadow-zinc-500 dark:hover:shadow-zinc-600">
        <div className="flex mt-4 size-15 items-center justify-center rounded-full text-white bg-blue-600 text-2xl font-semibold shadow-md shadow-blue-600 ">FT</div>
        <h1 className="text-lg mt-3 font-bold ">Felippe Tuma</h1>
        <p className="text-sm">RM.: 569459</p>
        <p className="text-md font-bold p-1 text-blue-600 dark:text-blue-400">Tech Lead</p>
        <p className="m-1">aaaaaa</p>
        <div className="flex justify-center items-center gap-6 m-3">
         <a href="https://github.com/felippetuma" target="_blank" className="flex items-center gap-1 justify-center bg-blue-400 px-4 py-2 rounded-full shadow-md hover:-translate-y-1 hover:shadow-blue-600" >GitHub <ExternalLink size={18}/></a>
         <a href="https://linkedin.com/in/felippetuma" target="_blank" className="flex items-center gap-1 justify-center bg-blue-400 px-4 py-2 rounded-full shadow-md hover:-translate-y-1 hover:shadow-blue-600" >Linkdin <ExternalLink size={18}/></a>
        </div>
      </div>
      <div className="bg-zinc-400 p-4 rounded-2xl">
        <h1 className="text-lg">Felippe Tuma</h1>
        <p className="mt-3">aaaaaa</p>
      </div>
      <div className="bg-zinc-400 p-4 rounded-2xl">
        <h1 className="text-lg">Felippe Tuma</h1>
        <p className="mt-3">aaaaaa</p>
      </div>
    </div>
  )
}

export default Membros
