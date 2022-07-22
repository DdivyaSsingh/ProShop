import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../Components/FormContainer";
import { savePaymentMethod } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import CheckoutStep from "../Components/CheckoutStep";

const PaymentScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if(!shippingAddress){
    navigate('/shipping');
  }

  const [paymentMethod,setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod({ paymentMethod}));
    navigate("/placeOrder");
  };

  return (
    <FormContainer>
        <CheckoutStep step1 step2 step3/>
      <h1>Payment</h1>
      <Form onSubmit={submitHandler}>
        
        <Form.Group>
            <Form.Label as='legend'>Select Method</Form.Label> 

            <Col>
                <Form.Check type='radio' label='PayPal or Credit Card' id='Paypal' name='paymentMethod' value= 'Paypal' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
            </Col>

        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
