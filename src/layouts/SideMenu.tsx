import React from 'react';
import { MdHome, MdInfo, MdLocalMovies } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import ReactTooltip from 'react-tooltip';
import { useLocalStorage } from 'react-use';

interface SideMenuProps { children: any }
export default function SideMenu({ children }: SideMenuProps) {
  const [value, setValue] = useLocalStorage('sidemenu.size', 200);
  return (
    <div className="flex z-30 h-full">
      <SplitPane onDragFinished={setValue} split="vertical" minSize={130} defaultSize={value} maxSize={400}>
        <Menu />
        <div className="z-10 p-4 overflow-auto h-full">
          {children}
        </div>
      </SplitPane>
    </div>
  )
}

// Menu at the top with navigation buttons
function Menu() {
  return (
    <nav className="bg-gray-900 w-full flex flex-col h-full pt-10 text-gray-500">
      <NavButton icon={<MdHome className="text-current" />} exact to='/' title="Home" description="Home page" shortcut="H" />
      <NavButton icon={<MdLocalMovies className="text-current" />} exact to='/movies' title="Movies" description="Movies" shortcut="M" />
      <NavButton icon={<MdInfo className="text-current" />} to='/about' title="About" description="About application" shortcut="A" />
    </nav>
  )
}

// navigation button on menu
interface NavButtonProps { to: string, title: string, description?: string, shortcut?: string, exact?: boolean, icon?: any }
function NavButton({ exact = false, to, title, description, shortcut, icon }: NavButtonProps) {
  return <div>
    <NavLink data-tip data-for={title} activeClassName="text-blue-400  bg-gray-800" exact={exact} to={to} className="
  my-1 mx-4 px-3 py-2 rounded-lg text-sm font-medium
 hover:bg-gray-800 flex items-center
  focus:outline-none space-x-1
">{icon}<span className="text-gray-300">{title}</span></NavLink>
    {description && <ReactTooltip offset={{ right: 2 }} id={title} className="tooltip" place="right" effect="solid" delayShow={400} border={false} backgroundColor="transparent">
      <div className="bg-gray-800 p-1 border rounded-md border-gray-700 px-2 text-xs text-gray-300 font-light">
        {description}
        {shortcut && <span className="text-xs text-gray-200"> · <code className="bg-gray-700 inset-0 px-1 py-0.5 rounded-sm text-xs">G</code> then <code className="bg-gray-700 inset-0 px-1 py-0.5 rounded-sm text-xs">{shortcut}</code></span>}
      </div>
    </ReactTooltip>
    }
  </div>
}
