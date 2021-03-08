import React from 'react'
import Button from '../buttons/Button'

export interface Props { title: string, description: string, open: boolean, setOpen(open: boolean): void, children: any }
function ConfirmationModal({ title, description, open, setOpen, children }: Props) {
  const cancel = () => setOpen(false)

  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${!open && "hidden"}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className={`fixed inset-0 transition-opacity`} aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75">
            <button type="button" className="fixed top-0 left-0 h-full w-full cursor-default outline-none" onClick={cancel}></button>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 flex flex-row-reverse space-x-reverse space-x-2">
              {children}
              <Button type="basic" text="Cancel" onClick={cancel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal