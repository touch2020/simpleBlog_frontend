import axios from 'axios'
import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { auth } from '../_actions/user_action'
import { getCookie , getCookie1} from '../utils/cookie'
export default function (SpecificComponent, option, adminRoute = null){
    function AuthenticationCheck(props){

        const dispatch = useDispatch()
        const navigate = useNavigate()

        useEffect(() => {
            
            dispatch(auth()).then(response => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${response.value.access_token}`
                console.log("testt", response.value.access_token)
                if(response.value.isLogined === false){
                    if(option){
                        navigate('/login')
                    }
                }else{
                    if(response.value.isLogined === true){
                        if(!option){
                            // navigate('/')
                        }
                        // navigate('/')
                    }
                }
            })
        }, [])

        return (<SpecificComponent {...props}/>)
    }
    return AuthenticationCheck
}