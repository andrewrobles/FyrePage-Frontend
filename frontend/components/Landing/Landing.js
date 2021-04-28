import Summary from '../Summary/Summary'
import Example from '../Example/Example'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

import { useGoogleLogin } from 'react-google-login'
import { useRouter } from 'next/router'


const clientId = '240083179290-oahd0h3sj4hrd8o0p0i0mf2eqht2re7n.apps.googleusercontent.com'

export default function Landing() {
  const router = useRouter()

  const onSuccess = (res) => {
    alert(res.getAuthResponse().id_token)
    router.push('/home')

    console.log('Login Success: currentUser:', res.profileObj)
  }

  const onFailure = (res) => {
    console.log('Login failed: res:', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    acessType: 'offline',
  })

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
        <div className="row justify-content-center p-2">
          <Button onClick={ signIn }/>
        </div>
      </div>
  )
}