export function OptionSpan ({ data }) {
  return (
    <span className='absolute -top-4 opacity-0 pointer-events-none before:absolute before:w-3 before:h-3 before:bg-[#050100] before:-bottom-1 before:-z-10 before:rotate-45 before:left-1/2 before:-translate-x-1/2 group-hover:-top-8 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 left-1/2 -translate-x-1/2 bg-[#050100] text-white px-2 rounded-full'>
      {data}
    </span>
  )
}
