import { NavLink } from 'react-router-dom'
import { OptionSpan } from './OptionSpan'

export function OptionItem ({ linkTo, hoverText, children }) {
  return (
    <NavLink
      to={linkTo}
      className={({ isActive }) => {
        const defaultStyle = 'group relative p-2 rounded-lg'
        const activeStyle = isActive ? 'bg-teal-700 text-white' : 'bg-white text-black'
        return `${defaultStyle} ${activeStyle}`
      }}
    >
      {children}
      <OptionSpan data={hoverText} />
    </NavLink>
  )
}
