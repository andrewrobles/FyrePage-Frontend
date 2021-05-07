import { useGoogleLogin } from 'react-google-login'
import { useRouter } from 'next/router'

import { useFetch } from 'react-async'

const clientId = '240083179290-oahd0h3sj4hrd8o0p0i0mf2eqht2re7n.apps.googleusercontent.com'

export default function Login(props) {
  const onSuccess = (res) => {
    const url = 'http://localhost:8000/v1/sign-in/'
    const googleId = 'my-google-id'
    const idToken = 'my-id-token'

    const { data, error } = useFetch(url, {
      headers: { accept: "application/json" },
    })

    console.log(`Sign in attempt: ${data}`)

    signInUser(url, googleId, idToken).then(response=>{
      console.log(response)
    })

    console.log(res.getAuthResponse().id_token)
    router.push('/home')

    console.log('Login Success: currentUser:', res.profileObj)
  }
}