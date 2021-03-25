import React, { useMemo, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import useMousetrap from '../../hooks/use-mousetrap';
import TooltipWithShortcut from '../tooltips/TooltipWithShortcut';

export interface ButtonProps {
  loading?: boolean,
  disabled?: boolean,
  text: any,
  autofocus?: boolean,
  type?: "primary" | "secondary" | "danger" | "basic",
  description?: string,
  /**
   * Shortcut key.
   */
  shortcut?: string,
  onClick?(): void
}
export default function Button({ loading = false, disabled = false, text, autofocus = false, type = "primary", description, shortcut, onClick }: ButtonProps) {
  const typeClass = useMemo(() => {
    switch (type) {
      case "danger": return "bg-red-500 text-white active:bg-red-500 hover:bg-red-600 hover:text-white focus:ring-red-300"
      case "secondary": return "bg-gray-500 text-white active:bg-gray-500 hover:bg-gray-600 hover:text-white focus:ring-gray-300"
      case "basic": return "text-gray-500 active:text-black hover:text-black focus:ring-gray-300"
      default: return "bg-blue-500 text-white active:bg-blue-500 hover:bg-blue-600 hover:text-white focus:ring-blue-300"
    }
  }, [type])
  const [currentLoading, updateLoading] = useState(loading)

  const click = async () => {
    updateLoading(true)
    onClick && await onClick()
    updateLoading(false)
  }

  useMousetrap(shortcut?.toLowerCase() || "", click);

  return <TooltipWithShortcut description={description} shortcut={shortcut} placement="bottom">
    <button data-tip data-for={text}
      className={`relative items-center ${typeClass}
      px-3 py-1 rounded-md font-medium text-sm tracking-tight 
      focus:outline-none focus:ring disabled:opacity-50`}
      autoFocus={autofocus}
      disabled={loading || disabled}
      type="submit"
      name="action"
      onClick={click}
      value="submit">
      {currentLoading && <div className="absolute inset-1/2 -mt-2.5 -mx-2.5"><CgSpinner className="icon-spin" size={20} /></div>}
      <span className={`${loading && 'opacity-0'}`}>
        {text}&#8203;
    </span>
    </button>
  </TooltipWithShortcut>
}