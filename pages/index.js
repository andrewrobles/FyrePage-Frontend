import 'bootstrap/dist/css/bootstrap.min.css'
import Summary from '../components/Summary/Summary'
import Example from '../components/Example/Example'
import Button from '../components/Button/Button'
import Logo from '../components/Logo/Logo'

export default function Home() {

  return (
    <span>
      <div>
        <Logo />
      </div>
      <div>
        <Example />
      </div>
      <Summary />
      <Button />
    </span>
  )
}