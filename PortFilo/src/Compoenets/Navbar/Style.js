import styled from 'styled-components'
import {
    Link
} from 'react-router-dom';

export const LinkItem = styled(Link)
`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover{
            color: #eb5424;
    }
`
export const Navbarsection = styled.div `
padding: 20px 0;
overflow: hidden;
background: #fff;
position: relative;
border-bottom: 1px solid #000
`

export const Container = styled.div `
  width:80%;
  margin:auto
`
export const LogoNav = styled.div `
    width: 50%;
    float: left;
`
export const Logotext = styled.h2 `
    font-size: 30px;
    font-weight: bold
`
export const Ullist = styled.ul ` 

    float: left;
    list-style: none;
`
export const Listitem = styled.li `
display: inline-block;
  &:firts-of-type{
    color: #eb5424 !important 
}
`
export const Anchor = styled.a `
display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424
    }
`
/* 

/* Media for Navbar Style */

// @media (min-width : 992px) {
//     .navbar label {
//         display: none
//     }
// }

// @media (max-width : 991px) {
//     .navbar .logo {
//         width: 100%;
//         float: none;
//     }

//     .navbar .ul-list {
//         width: 100%;
//         float:  none;
//         margin-top: 20px;
//         display: none
//     }

//     .navbar .ul-list .list-item {
//         display: block;
//         text-align: center;
//     }
// }
//  */