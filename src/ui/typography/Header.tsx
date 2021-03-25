import { ChevronLeft } from '@material-ui/icons'
import React from 'react'
import { NavLink } from 'react-router-dom'

export interface HeaderProps {
  text: string,
  back?: string,
  children?: any
}

function Header({ text, back, children }: HeaderProps) {
  return (
    <div>
      <div className="flex items-center h-8">
        {back !== undefined && <NavLink to={back}>
          <ChevronLeft className="text-gray-400 hover:text-black" />
        </NavLink>}
        <h1 className="flex-grow">{text}</h1>
        <div className="flex space-x-1">{children}</div>
      </div >
    </div>
  )
}

export default Header