import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Pinterest, Room } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection:"column"})};
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
  padding: 20px;
`;

const Logo=styled.h1`
    
`
const Desc=styled.p`
    margin:20px 0px;
`;
const SocialContainer=styled.div`
    display:flex;

`;
const SocialIcon=styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    color:white;
    background-color:#${props=>props.color};
    display: flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer

`;


const Center = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({ display:"none"})};

`;

const Right = styled.div`
  flex: 1;
  padding:20px;
  ${mobile({ backgroundColor:"#fff8f8"})};
`;


const Title=styled.h3`
 margin-bottom:30px;
`;

const List=styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-wrap:wrap;

`;

const ListItem=styled.li`
    width:50%;
    margin-bottom:10px;

`;

const ContectItem=styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SmartBox</Logo>
        <Desc>
          there are Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
          officiis culpa debitis, suscipit corporis deleniti saepe non
          voluptatum unde, tempore veniam, aut quas! Incidunt illo nostrum
          vitae! Corporis, et expedita.
        </Desc>

        <SocialContainer>
            <SocialIcon color="3B5999">
                <Facebook />
            </SocialIcon>

            <SocialIcon color="E4405F">
                <Instagram />
            </SocialIcon>

            <SocialIcon color="55ACEE">
                <LinkedIn />
            </SocialIcon>

            <SocialIcon color="E60023">
                <Pinterest />
            </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>

        <ContectItem>
            <Room style={{marginRight:"10px"}} />
            73-74 Vashudevpuri-A, Shree Ram Nagar Road, Jhotwara Jaipur
        </ContectItem>

        <ContectItem>
            <Phone style={{marginRight:"10px"}} />
            +91-8949081906
        </ContectItem>

        <ContectItem>
            <MailOutline style={{marginRight:"10px"}} />
            hemanttopiwala212@gmail.com
        </ContectItem>

        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />


      </Right>
    </Container>
  );
};

export default Footer;
