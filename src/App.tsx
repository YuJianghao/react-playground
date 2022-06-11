import { TheSideMenu } from './components/TheSideMenu'
import { TheNavBar } from './components/TheNavBar'

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
      </div>
    </div>
  )
}
