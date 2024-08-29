import Profile from '../Profile/Profile'
import styles from './App.module.css'

import userData from '../../userData.json'

export default function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </div>
  )
}
