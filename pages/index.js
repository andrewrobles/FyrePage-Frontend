import 'bootstrap/dist/css/bootstrap.min.css'
import Profile from '../components/profile/profile'
import data from '../data/data'

export default function Home() {

  return (
    <Profile data={data['andrewrobles']}/>
  )
}