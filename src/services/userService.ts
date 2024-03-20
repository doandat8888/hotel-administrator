import { apigatewayAxios, authAxios } from "../configs/axios"

const login = (email: string, password: string) => {
    return authAxios.post('user/login', {
        email,
        password
    })
}

const register = (email: string, password: string, name: string) => {
    return authAxios.post('/register', {
        email,
        password,
        name: name,
        avt: 'abc'
    })
}

const getCurrentUser = () => {
    return authAxios.get('/user/current')
}

export default {
    login,
    getCurrentUser,
    register
}