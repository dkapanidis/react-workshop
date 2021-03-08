import React from 'react'

export interface Props { children: any }
function Card({ children }: Props) {
  return (
    <div className="flex-grow flex flex-col h-full w-full p-4 border-2 rounded-lg shadow-lg border-gray-300 overflow-y-auto">
      {children}
    </div>
  )
}

export default Card