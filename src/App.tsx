import { Outlet } from 'react-router-dom'
import { TheSideMenu } from './components/TheSideMenu'
import { TheNavBar } from './components/TheNavBar'
import { TheSideList } from './components/TheSideList'

export const App: React.FC = () => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <TheNavBar />
      <div
        css={{
          flex: 1,
          display: 'flex',
        }}
      >
        <TheSideMenu />
        <TheSideList/>
        <Outlet/>
      </div>
    </div>
  )
}
