import Summary from '../Summary/Summary'
import Example from '../Example/Example'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

export default function Landing() {
  return (
      <div className="container">
        <div className="row justify-content-center">
          <Logo />
        </div>
        <div className="row justify-content-center">
          <Example />
        </div>
        <div className="row justify-content-center">
          <Summary />
        </div>
        <div className="row jusity-content-center">
          <Button />
        </div>
      </div>
  )
}