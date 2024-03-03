import {
  RiHome2Line,
  RiBookletLine,
  RiListCheck,
  RiFileCloseLine
} from 'react-icons/ri'

import { OptionItem } from './OptionItem'

export function Options () {
  return (
    <footer className='fixed left-0 right-0 bottom-0 w-full'>
      <section className='grid grid-cols-4 justify-items-center items-center max-w-lg mx-auto p-5'>

        <OptionItem linkTo='/completed' hoverText='Completed'>
          <RiListCheck className='text-3xl' />
        </OptionItem>

        <OptionItem linkTo='/' hoverText='Home'>
          <RiHome2Line className='text-3xl' />
        </OptionItem>

        <OptionItem linkTo='/incompleted' hoverText='Incompleted'>
          <RiFileCloseLine className='text-3xl' />
        </OptionItem>

        <OptionItem linkTo='/create' hoverText='Create'>
          <RiBookletLine className='text-3xl' />
        </OptionItem>

      </section>
    </footer>
  )
}
