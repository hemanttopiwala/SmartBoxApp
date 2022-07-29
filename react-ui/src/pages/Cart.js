import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@material-ui/icons';
import {mobile} from '../responsive';
import {useSelector} from 'react-redux';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
import {useNavigate} from 'react-router-dom';

import {Link} from 'react-router-dom';

const KEY = "pk_test_51LMcN5SAq157cH0qkmPyIMoEOtcN6oE14GjdhEqgb4LkcysoTIG4KNkdfaojSFmCf1PvbkNu5ZkijbvPbkA36oR900jl4WdkOf";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding:"10px"})}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};

  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
    ${mobile({ display:"none"})};
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})};
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection:"column"})}
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin:"5px 15px"})}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom:"20px"})}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summery = styled.div`
  flex: 1;

  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummeryTitle = styled.h1`
  font-weight: 200;
`;

const SummeryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;

    font-weight:${(props) => props.type === "total" && 500};

    font-size:${(props) => props.type === "total" && '24px'};
`;

const SummeryItemText = styled.span``;

const SummeryItemPrice = styled.span``;

const Button = styled.button`
    width:100%;
    padding :10px;
    background-color:black;
    color:white;
    font-weight:600;
    cursor:pointer;
`;

const Cart = () => {

  

  const cart=useSelector(state=>state.cart);
  // const [stripeToken, setStripeToken]=useState(null);
  // const history=useNavigate();


  // const onToken =(token)=>{
  //   setStripeToken(token);
  // }

  // console.log(stripeToken);


  // useEffect(()=>{

  //   const makeRequest=async ()=>{
  //     try{
  //       const res=await axios.post("http://localhost:5000/api/checkout/payment",{
  //         tokenId:stripeToken.id,
  //         amount:500,
          
  //       });
  //       history.push("/Success",{
  //         stripeData: res.data,
  //         products: cart, 
  //       });

  //     }
  //     catch{}
  //   }
  //   stripeToken &&  cart.total >=1 && makeRequest();

  // },[stripeToken,cart, cart.total,history])


  
  
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>SHOPPING BAG</TopText>
            <TopText>YOUR WISHLIST</TopText>
          </TopTexts>
          <TopButton type="filled">CHECK OUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>

            {
              cart.products.map((product)=>(

                <Product>
                    <ProductDetails>
                      <Image src={product.img} />

                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>

                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>

                        <ProductColor color={product.color}  />

                        <ProductSize>
                          <b>SIZE:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetails>

                    <PriceDetails>
                      <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>

                      <ProductPrice>Rs {product.price*product.quantity} </ProductPrice>
                    </PriceDetails>
                  </Product>
                  
              ))
            }
            <Hr />
            
           
          </Info>

          <Summery>
            <SummeryTitle>ORDER SUMMARY</SummeryTitle>

            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>

              <SummeryItemPrice>Rs {cart.total} </SummeryItemPrice>
            </SummeryItem>

            <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>

              <SummeryItemPrice>Rs 40</SummeryItemPrice>
            </SummeryItem>

            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>

              <SummeryItemPrice>Rs -20</SummeryItemPrice>
            </SummeryItem>

            <SummeryItem type="total">
              <SummeryItemText>Total</SummeryItemText>

              <SummeryItemPrice>Rs {cart.total} </SummeryItemPrice>
            </SummeryItem>

            {/* <StripeCheckout
              name="Smartbox Shop"
              image="https://www.logolynx.com/images/logolynx/a6/a671ef222a6e136f8fe7fd9cfc97e57b.png"
              billingAddress
              shippingAddress
              description={`Your total is Rs${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout> */}


            <Link to='/success' >
              <Button>Chekout Now</Button>
            </Link>

            
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
