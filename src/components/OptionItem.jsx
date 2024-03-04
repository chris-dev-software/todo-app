import { NavLink } from 'react-router-dom'
import { OptionSpan } from './OptionSpan'

export function OptionItem ({ linkTo, hoverText, children }) {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) => {
        const defaultStyle = 'group relative p-2 rounded-lg transition-colors duration-500 outline-none'
        const activeStyle = isActive ? 'bg-white/15 text-white' : 'bg-white/5 text-white hover:bg-white/15'
        return `${defaultStyle} ${activeStyle}`
      }}
    >
      {children}
      <OptionSpan data={hoverText} />
    </NavLink>
  )
}
