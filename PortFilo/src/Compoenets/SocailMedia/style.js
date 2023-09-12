import styled from 'styled-components'

export const Socialmed=styled.div`
    height: auto;
    overflow: hidden
`
export const Social=styled.div`
width: 33.33%;
float: left;
box-sizing: border-box;
padding: 100px 0 100px 60px;
background: #3b5998;
`
export const Icons=styled.i`
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
&:first-of-type{
    background: #3b5998;
}
&:nth-of-type(2){
    background: #498cbf;
}
&:last-of-type{
    background: #fff;
}
`
export const SocialP=styled.p`
font-weight: bold;
text-transform: uppercase;
font-size: 20px;
color: #fff
`
export const SocialSpan=styled.span`
display: block;
margin-bottom: 8px;
&:nth-of-type(2){
    font-weight: normal
}
`
