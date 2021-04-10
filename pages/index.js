import 'bootstrap/dist/css/bootstrap.min.css'
import Summary from '../components/Summary/Summary'
import Button from '../components/Button/Button'
import Logo from '../components/Logo/Logo'

export default function Home() {

  return (
    <span>
      <div>
        <Logo />
      </div>
      <Summary />
      <Button />
    </span>
  )
}