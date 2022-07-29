import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data';
import {mobile} from '../responsive';

const Container=styled.div`
    width:100%;
    height:100vh;
    display:flex;
    background-color:coral;
    position:relative;
    overflow:hidden;
    ${mobile({ display:"none"})};

`
const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;

    left: ${props=> props.direction=== "left" && "10px"};
    right: ${props=> props.direction=== "right" && "10px"};
    cursor:pointer;
    opacity:0.5;
    z-index:2;

`

const Wrapper=styled.div`
    height:100%;
    display:flex;
    transition: all 1.5s ease;
    transform:translateX(${props=>props.slideIndex*(-100)}vw);

`
const Slide=styled.div`
    
    width:100vw;
    height:100vh;

    display:flex;
    align-items:center;

    background-color:#${props=> props.bg};


`

const ImgContainer=styled.div`
    flex:1;
    height:100%;

`
const InfoContainer=styled.div`
    flex:1;
    padding:50px;
`

const Image=styled.img`
    height:80%;

`

const Title=styled.h1`
    font-size:70px;

`;
const Desc=styled.h1`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
`;
const Button=styled.button`
     padding:10px;
     font-size:20px;
     background-color:transparent;
     cursor:pointer;
`;

const Slider = () => {

    const [slideidx,setSlide]=useState();


    const handleClick=(direction)=>{

        if(direction==='left'){
            setSlide(slideidx > 0 ? slideidx-1 : 2);

        }else{
            setSlide(slideidx <2 ? slideidx+1: 0);
        }

    }
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>

        <Wrapper slideIndex={slideidx}>

            {
                sliderItems.map((obj)=>(

                    <Slide bg={obj.bg} key={obj.id}>
                        <ImgContainer>
                            <Image  src={obj.img}/>
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{obj.title}</Title>
                            <Desc>{obj.desc}</Desc>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>

                    </Slide>

                ))
            }

            

            
            
            

        </Wrapper>

        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider