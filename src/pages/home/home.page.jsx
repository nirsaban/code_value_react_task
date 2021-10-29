import React from "react";
import { connect } from 'react-redux';
import Header from '../../components/header/header.component'
import {createStructuredSelector} from 'reselect';
import  selectCollection  from '../../redux/shop/shop.selectors';
import AddProduct from "../../components/product/add.product";
import Product from "../../components/product/product.component";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table} from 'react-bootstrap';
const HomePage = ({collections}) => {

    
return(
<Container >
        <Header title = {"HELLO"}/>
        <Row>
        {
            collections.length > 0
            ?
            collections.map(product => {
               return (
                    <Col key = {product.id} md ={12}>
                    <Product key = {product.id} {...product} /> 
                    </Col>
                )
            })
            :
            null    
         }
        </Row>
        <Row className ="mt-5">
        <Col md ={4}>
        <AddProduct />
        </Col>
        </Row>
</Container>
)



}



const mapStateToProps = createStructuredSelector({
    collections: selectCollection,
  });

export default connect(mapStateToProps)(HomePage);