import { Link, Outlet } from 'react-router-dom'

import FactoryIcon from './icons/factory.svg?component'

export const App: React.FC = () => {
  return (
    <>
      <h1>
        hi from React with {' '}
        <span
          css={{
            color: 'red',
          }}
        >
          Emotion CSS
        </span>
        <FactoryIcon/>
      </h1>
      <nav>
        <Link to="/page1">page1</Link> - <Link to="/page2">page2</Link>
      </nav>
      <Outlet />
    </>
  )
}
