import Link from 'next/link'
import Login from './components/login/Login'
import Dashboard from './dashboard/page'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Home() {
  return (
    <main>
      {/* <Login>
        
      </Login> */}

      <Dashboard/>
    </main>
  )
}
