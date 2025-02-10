import axios from '../axios'

const handleLoginApi = (email, password) => {
    return axios.post('/api/v1/auth/login')
}

export { handleLoginApi }