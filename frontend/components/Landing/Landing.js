import Summary from '../Summary/Summary'
import Example from '../Example/Example'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'

import { useGoogleLogin } from 'react-google-login'
import { useRouter } from 'next/router'

import Cookies from 'universal-cookie'

const clientId = '240083179290-oahd0h3sj4hrd8o0p0i0mf2eqht2re7n.apps.googleusercontent.com'

export default function Landing() {
  const router = useRouter()


  const cookies = new Cookies()

  cookies.set('SameSite', 'none')
  cookies.set('Secure', true)

  console.log('SameSite')
  console.log(cookies.get('SameSite'))

  const onSuccess = (res) => {
    const url = 'http://localhost:8000/v1/sign-in/'
    const googleId = 'my-gooogle-id'
    const idToken = 'my-id-token'

    signInUser(url, googleId, idToken).then(response=>{
      console.log(response)
      router.push('/home')

      console.log('Login Success: currentUser:', res.profileObj)
    })

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

async function signInUser(url, googleId, idToken) {
  const csrftoken = getCookie('csrftoken')
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'X-CSRFToken': csrftoken,
    },
    body: JSON.stringify({
      googleId: googleId,
      idToken: idToken
    })
  })
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}