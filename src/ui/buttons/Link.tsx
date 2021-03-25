import React, { useMemo } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useMousetrap from '../../hooks/use-mousetrap';
import TooltipWithShortcut from '../tooltips/TooltipWithShortcut';

export interface LinkProps {
  /**
   * Button content (Can be text or icon).
   */
  children: any

  /**
   * Click redirects to page.
   */
  to: string,

  /**
   * Description of Link displayed as tooltip.
   */
  description?: string,

  /**
   * Shortcut key.
   */
  shortcut?: string,
  type?: "primary" | "secondary" | "danger" | "basic",
}

function Link({ to, children, description, shortcut, type = "primary" }: LinkProps) {
  const typeClass = useMemo(() => {
    switch (type) {
      case "danger": return "bg-red-500 text-white active:bg-red-500 hover:bg-red-600 hover:text-white focus:ring-red-300"
      case "secondary": return "bg-gray-500 text-white active:bg-gray-500 hover:bg-gray-600 hover:text-white focus:ring-gray-300"
      case "basic": return "text-gray-500 active:text-black hover:text-black focus:ring-gray-300"
      default: return "bg-blue-500 text-white active:bg-blue-500 hover:bg-blue-600 hover:text-white focus:ring-blue-300"
    }
  }, [type])

  const history = useHistory()
  useMousetrap(shortcut?.toLowerCase() || "", () => history.push(to));

  return (
    <TooltipWithShortcut description={description} shortcut={shortcut}>
      <NavLink data-tip data-for={to} to={to} className="focus:outline-none"><button type="button" className={`h-7 relative items-center ${typeClass}
    px-3 py-1 rounded-md font-medium text-sm tracking-tight 
    focus:outline-none focus:ring disabled:opacity-50`}
      >{children}</button>
      </NavLink>
    </TooltipWithShortcut>
  );
}

export default Link