                <Play />
import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2} from 'lucide-react'
import Image from 'next/image';


export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
       
        <aside className="w-72 bg-zinc-950 p-6">
          
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
          
          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
             <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
             <Search />
              Buscar
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
              <Library />
              Biblioteca
            </a>
          </nav>

          <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Rock</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Setanejo</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Rap</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Pagode</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Raggae</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Blues</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Hip/Hop</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Trap</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList Funk</a>
              <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>PlayList HeavyMetal</a>
          </nav>
          
        </aside>
        
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'> <ChevronLeft /></button>
            <button className='rounded-full bg-black/40 p-1'> <ChevronRight /></button>
          </div>

          <h1 className='font-bold text-3xl mt-10'>Boa Tarde, Sávio!</h1>
          
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/murica.jpg" width={104} height={104} alt="" />
              <strong>Vamos Voltar com a Rataria</strong>
              <button className='w-12 h-11 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/froid.jpg" width={104} height={104} alt="" />
              <strong>Teoria do Cilco da Água</strong>
              <button className='w-12 h-11 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/bk.png" width={104} height={104} alt="" />
              <strong>Castelos & Ruínas</strong>
              <button className='w-12 h-11 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/blackAlien.jpg" width={104} height={104} alt="" />
              <strong>Abaixo do Zero - Hello Hel</strong>
              <button className='w-12 h-11 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/joji.jpg" width={104} height={104} alt="" />
              <strong>Nectar</strong>
              <button className='w-12 h-11 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href="#" className='bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors'>
              <Image src="/major.jpg" width={104} height={104} alt="" />
              <strong>2%</strong>              <button className='w-12 h-11 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-bold text-2xl mt-10'>Feito para você!</h2>

          <div className='grid grid-cols-6 gap-4 mt-4'>
            <a href="#" className='bg-white/5 p-3 rounded flex flex-col gap-0.5 hover:bg-white/10'>
              <Image src="/joji smit.jpg" className='w-full' width={500} height={500} alt="" />
              <strong className='font-semibold'>Smithereens</strong>
              <span className='text-xs text-zinc-400'>Joji</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded flex flex-col gap-0.5 hover:bg-white/10'>
              <Image src="/era de aquarios.jpg" className='w-full' width={500} height={500} alt="" />
              <strong>Era de Aquarios</strong>
              <span className='text-xs text-zinc-400'>Djonga e Martinho da Vila</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded flex flex-col gap-0.5 hover:bg-white/10'>
              <Image src="/piscininha.jpg" className='w-full' width={500} height={500} alt="" />
              <strong>Piscininha</strong>
              <span className='text-xs text-zinc-400'>Alaska - Froid, Duzz, Dalua</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded flex flex-col gap-0.5 hover:bg-white/10'>
              <Image src="/predios.jpg" className='w-full' width={500} height={500} alt="" />
              <strong>Dos Prédios</strong>
              <span className='text-xs text-zinc-400'>Veigh</span>
            </a>
            <a href="#" className='bg-white/5 p-3 rounded flex flex-col gap-0.5 hover:bg-white/10'>
              <Image src="/darock.jpg" className='w-full' width={500} height={500} alt="" />
              <strong>Bonde da Rock</strong>
              <span className='text-xs text-zinc-400'>Major RD - Rock Danger</span>
            </a>
          </div>

        </main>
      
      </div>
      
      <footer className="bg-zinc-900  border-zinc-700 p-3.5 flex items-center justify-between">
        <div className='flex items-center gap-2'>
          <Image src="/froid.jpg" width={45} height={45} alt="" />
          <div className='flex flex-col gap1'>
            <strong>Fique Rico ou Moralismo</strong>
            <span className='text-xs text-zinc-400'>Froid</span>
          </div>
        </div>
        
        <div className='flex flex-col items-center gap-1'>
          <div className='flex items-center gap-6'>
            <Shuffle size={18} className='text-green-500' />
            <SkipBack size={18}className='text-zinc-300'/>

            <button className='w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-white text-zinc-800'>
                <Play />
              </button>
          
          <SkipForward size={18} className='text-zinc-300'/>
          <Repeat size={18} className='text-zinc-600' />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-400'>1.12</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-400'>2.14</span>
          </div>
        </div>
        
        <div className='flex items-center gap-4'>
          <Mic2 size={16} className='text-xs text-zinc-400'/>
          <LayoutList size={16} className='text-xs text-zinc-400'/>
          <Laptop2 size={16} className='text-xs text-zinc-400'/>

          <div className='flex items-center gap-2'>
            <Volume size={18}/>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-10 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={16} className='text-xs text-zinc-400'/>
        </div>
      
      </footer>
    </div>
  )
}