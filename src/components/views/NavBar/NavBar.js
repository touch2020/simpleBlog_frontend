import axios from 'axios'
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LeftContainer, NavbarButton, NavbarContainer, NavbarExtendedContainer, NavbarInnerContainer, NavbarLink, NavbarLinkContainer, NavbarLinkExtended, OpenLinksButton, RightContainer } from '../../../styles/Navbar.style'
import { getCookie } from '../../../utils/cookie'

function NavBar() {
    const [extendNavbar, setextendNavbar] = useState(false)
    const navigate = useNavigate()
    const access_token = getCookie('access_token')

    const onClickHandler = () => {
        axios.post('http://localhost:3000/auth/logout','', {withCredentials: true})
        .then(response => {
            if(response.data.message === 'success'){
                // setCookie('access_token', 'none')
                navigate('/login')
            }else{
                alert('로그아웃 실패')
            }
        })
    }


    return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
                <LeftContainer>
                        <NavbarLinkContainer>
                            <NavbarLink to="/">Home</NavbarLink>
                            <NavbarLink to="/about">About</NavbarLink>
                            <NavbarLink to="/contact">Contact us</NavbarLink>
                            <OpenLinksButton onClick={() => {
                                setextendNavbar((curr) => !curr)
                            }}> 
                            {extendNavbar ? <> &#10005; </> : <>&#8801;</>}</OpenLinksButton>
                        </NavbarLinkContainer>
                </LeftContainer>
                <RightContainer>
                    {access_token !== undefined ? <NavbarButton onClick={onClickHandler}>Sign out</NavbarButton> : 
                        <NavbarLinkContainer>
                            <NavbarLink to="/login">Sign in</NavbarLink>
                            <NavbarLink to="/register">Sign up</NavbarLink>                             
                        </NavbarLinkContainer>}  
                </RightContainer>
                </NavbarInnerContainer>
                {extendNavbar && (
                    <NavbarExtendedContainer>
                    <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                    <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
                    <NavbarLinkExtended to="/contact">Contact us</NavbarLinkExtended>
                </NavbarExtendedContainer>
                )}
                
            </NavbarContainer>
    )
}

export default NavBar
