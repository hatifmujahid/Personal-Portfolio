export default function Card(props) {
    return (
        <div class="overflow-hidden relative duration-700 border rounded-xl hover:bg-slate-500 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
              <div class="pointer-events-none">
                <div class="absolute inset-0 z-10  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
                <div class="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 " style={{WebkitMaskImage: 'radial-gradient(240px at 0px 0px, white, transparent)'}}></div>
                <div class="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100 " style={{WebkitMaskImage: 'radial-gradient(240px at 0px 0px, white, transparent)'}}></div>
              </div>
              <a href={props.link}>
                <article class="p-4 md:p-8">
                  <div class="flex justify-between gap-2 items-center">
                    <span class="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
                      <time datetime="2023-05-21T00:00:00.000Z">{props.date}</time>
                    </span>
                    <span class="text-zinc-500 text-xs  flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      {Math.floor(Math.random() * 10)}
                    </span>
                  </div>
                  <h2 class="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">{props.name}</h2>
                  <p class="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">{props.description}</p>
                </article>
              </a>
            </div>
    )
}