import axios from 'axios';
import React, { useState } from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive';
import {Navigate} from 'react-router-dom'

const Container=styled.div`
        height:100vh;
        width:100vw;
        background:linear-gradient(
            rgba(255, 255, 255, 0.5),
            rgba(255, 255, 255, 0.5)
        ),
        url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
        
        background-size:cover;
        display:flex;
        align-items:center;
        justify-content:center;
`;

const Wrapper=styled.div`
    width:40%;
    padding:20px;
    background-color:white;
    ${mobile({ width:"75%"})};
`;

const Title=styled.h1`
    font-size:24px;
    font-weight:300;
`;

const Form=styled.form`
    display:flex;
    flex-wrap:wrap;
    
`;

const Input=styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;

const Agreement=styled.span`
        font-size:12px;
        margin:20px 0px;
`;

const Button=styled.button`
        width:40%;
        border:none;
        padding:15px 20px;
        background-color:teal;
        color:white;
        cursor:pointer;
`;


const Bold=styled.p`
        font-size:20px;
        font-weight:900;
        color:black;
`;


const Register = () => {

    const [userName,setUserName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [confirmPassword,setConfirmPassword]=useState("")
    // const navigate=useNavigate()

  return (
    <Container>
        <Wrapper>
             <Title>CREATE AN ACCOUNT</Title>

             <Form>
                <Input placeholder="Name" />
                <Input placeholder="Last name" />
                <Input onChange={(e)=>setUserName(e.target.value)} placeholder="Username" />
                <Input onChange={(e)=>setEmail(e.target.value)} placeholder="Email" />
                <Input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                <Input onChange={(e)=>setConfirmPassword(e.target.value)} placeholder="Confirm password" />

                <Agreement>
                    By creating an account, I consent to the processing of my personal
                    data in accordance with the <Bold>PRIVACY POLICY</Bold>
                </Agreement>

                <Button onClick={async()=>{
                    if(password!==confirmPassword){
                        return;
                    }
                    const user={
                        username:userName,
                        email,
                        password
                    }
                    await axios.post("http://localhost:5000/api/auth/register",user)
                    return
                }} >CREATE</Button>

             </Form>
        </Wrapper>
    </Container>
  )
}

export default Register