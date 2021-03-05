import ReactDOM from 'react-dom'

import App from './App'
import AuthContext from './AuthContext'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'

axios.defaults.withCredentials = true
axios.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    toast.error('👮 You\'re unauthorized!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  if (error.response.status === 400) {
    toast.warning('🐝 Bad data submitted!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  return error
})

ReactDOM.render(
  <AuthContext>
    <App/>
    <ToastContainer/>
  </AuthContext>, document.getElementById('root'))