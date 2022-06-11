import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import FactoryIcon from './icons/factory.svg?component'
import { Drawer } from './components/Drawer'
import { useHandler } from './hooks/useHandler'

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const open = useHandler(() => setIsOpen(true))
  const close = useHandler(() => setIsOpen(false))
  return (
    <>
      <h1>
        hi from React with{' '}
        <span
          css={{
            color: 'red',
          }}
        >
          Emotion CSS
        </span>
        <FactoryIcon />
      </h1>
      <nav>
        <Link to="/page1">page1</Link> - <Link to="/page2">page2</Link>
      </nav>
      <button type="button" onClick={open}>
        Open
      </button>
      <Drawer isOpen={isOpen} onClose={close} width="30%">
        <button type="button" onClick={close}>
          Close
        </button>
        <p>The drawer content!</p>
        <input type="text" />
      </Drawer>
      <Outlet />
    </>
  )
}
