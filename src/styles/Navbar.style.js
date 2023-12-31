import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px){
        height: 80px;
    }
`

export const LeftContainer = styled.div`
        flex: 70%;
        display: flex;
        align-items: center;
        padding-left: 5%;
`

export const RightContainer = styled.div`
        flex: 30%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 50px;
`

export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

export const NavbarLinkContainer = styled.div`
    display: flex;
`

export const NavbarLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px){
        display: none;
    }
`

export const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`

export const OpenLinksButton = styled.button`
    width: 70px;
    height: 100px;
    background: none;
    border: none;
    color: white;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 700px){
        display: none;
    }
`

export const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px){
        display: none;
    }
`

export const NavbarButton = styled.button`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    background-color: black;
    border: none;
    &:hover{  
    background-color : black;
    color : blue
  }

    /* @media (max-width: 700px){
        display: none;
    } */
`