import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import useMousetrap from '../../hooks/use-mousetrap';
import { useHistory } from 'react-router-dom';

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
    <NavLink data-tip data-for={to} to={to} className="focus:outline-none"><button type="button" className={`h-7 relative items-center ${typeClass}
    px-3 py-1 rounded-md font-medium text-sm tracking-tight 
    focus:outline-none focus:ring disabled:opacity-50`}
    >{children}</button>
      {description && <ReactTooltip id={to} multiline={false} className="tooltip" place="bottom" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
        <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-xs text-gray-300 font-light">
          {description}
          {shortcut && <span className="text-xs text-gray-200">&nbsp;&nbsp;&nbsp;&nbsp;<code className="bg-gray-700 inset-0 px-1 py-0.5 rounded-sm text-xs">{shortcut}</code></span>}
        </div>
      </ReactTooltip>
      }
    </NavLink>
  );
}

export default Link