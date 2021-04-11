import Summary from '../Summary/Summary'
import Example from '../Example/Example'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

export default function Landing() {
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