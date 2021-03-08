import React from 'react'

export interface Props { children: any }
function Page({ children }: Props) {
  return (
    <div className="flex flex-col space-y-4 h-full">
        {children}
    </div>
  )
}

export default Page