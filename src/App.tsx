import { Link, Outlet } from 'react-router-dom'

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
      </h1>
      <nav>
        <Link to="/page1">page1</Link> - <Link to="/page2">page2</Link>
      </nav>
      <Outlet />
    </>
  )
}
