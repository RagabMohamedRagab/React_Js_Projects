import styled from 'styled-components'



export const Portfolio=styled.div`
background: #f8f8f8; 
padding-top: 20px;
overflow: hidden;

`
export const PortfolioTitle=styled.h2`
text-align: center;
font-size: 35px
`
export const PortfolioSpan=styled.span`
font-weight: normal
`
export const Portfoliolist=styled.ul`
list-style: none;
text-align: center;
margin: 20px 0
`

export const PortfolioItem=styled.li`
display: inline-block;
width: 100px;
padding: 10px;
&:first-of-type{
    background: #eb5424;
    color: #fff
}
`
export const Box=styled.div`
`
export const Boxdiv=styled.div`
width: 25%;
float: left;
font-size: 0;
position: relative;
`

export const BoxImg=styled.img`
width: 100%
`
export const Boxverlay=styled.p`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    &:hover{
        opacity: 1;
    }
`

export const BoxSapn=styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
   transform: translate(-50%,-50%);
   background: #fff;
   display: block;
   padding: 10px 20px;
   cursor: pointer;
    border: 2px solid #eb5424;
`










// .box div:hover .overlay {
//    
// }

// @media (max-width:575px) {
//     .portfolio .portfolio-list .portfolio-item {
//         display: block;
//         margin: auto
//     }
    
//     .box div {
//         width: 100%;
//     }
// }

// @media (min-width:576px) and (max-width : 768px ){
//     .box div {
//         width: 50%;
//     }
// }

