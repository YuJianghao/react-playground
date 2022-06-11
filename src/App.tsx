import { TheSideMenu } from './components/TheSideMenu'
import { TheNavBar } from './components/TheNavBar'
import { TheSideList } from './components/TheSideList'
import { AlertCenter } from './views/AlertCenter'

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
          height: 0,
        }}
      >
        <TheSideMenu />
        <TheSideList/>
        <AlertCenter/>
      </div>
    </div>
  )
}
