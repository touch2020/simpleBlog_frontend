import axios, { Axios } from 'axios'
import { useSelector } from 'react-redux'
import { AUTH_USER, LOGIN_USER, REGISTER_USER } from './types'

export function loginUser(dataToSubmit){
    console.log(dataToSubmit)
    const request = axios.post('http://localhost:3000/auth/signin', dataToSubmit, {withCredentials: true})
    .then(response => response.data)
    .catch(err => console.log(err))

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit){
    console.log(dataToSubmit)
    const request = axios.post('http://localhost:3000/auth/signup', dataToSubmit)
    .then(response => response.data)
    .catch(err => console.log(err))


    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function auth(props){
    console.log(props)
    const request = axios.post('http://localhost:3000/auth/me', {
        headers: {
            Cookie: ""
        }
    },{withCredentials: true})
    .then(response => response.data)
    .catch(err => console.log(err))

    return {
        type: AUTH_USER,
        payload: request
    }
}