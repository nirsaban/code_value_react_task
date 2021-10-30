import React,{useState,useEffect} from "react";
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import  selectCollection  from '../../redux/shop/shop.selectors';
import EditAddProduct from "../../components/product/edit_add_product";
import Product from "../../components/product/product.component";
import SearchInput from "../../components/searchInput/searchInput";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table,InputGroup,FormControl} from 'react-bootstrap';
const HomePage = ({collections}) => {

const [addProduct,setAddProduct]  = useState(false)   
const [editProduct,setEditProduct]  = useState(false)   
const [productDetails,setProductDetails]  = useState({})
const [searchProduct,setSearchProduct] = useState(collections.map(p => p.name)) 

const handleSearch  = value => {
  let collectionFiltered = collections
  .filter(item => item.name.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()))
  .map(item => item.name)
  setSearchProduct(collectionFiltered)
}

useEffect(() => {
  setSearchProduct(collections.map(p => p.name))
}, [collections]);

return(
<Container className ="p-2 ">
      <Row  className ="mt-2 mb-2 col-md-7" >
        <Col className="col-md-2">
        <Button variant="success" onClick = {() => editProduct ? '' :setAddProduct(true)}>+ Add</Button>
        </Col>
        <SearchInput handleSearch = {handleSearch} />
       </Row>
       <div className ="d-flex justify-content-between">
       <Row className="d-flex col-md-7 ">
           {
           collections.length > 0
           ?
            collections.map(product => {
            if(searchProduct.includes(product.name)){
             return (
               <Col key = {product.id} md ={12}>
               <Product key = {product.id} 
               {...product}
               setProductDetails = {setProductDetails}
               editProduct ={editProduct}
               addProduct = {addProduct}
               setEditProduct = {setEditProduct}/> 
               </Col>
               )
              }
              })
                  :
                  null    
         }
         
         </Row>
         <Col md ={5}>
        {
          addProduct ?
          <EditAddProduct  setAddProduct = {setAddProduct}/>
          : 
          editProduct ? 
          <EditAddProduct setEditProduct = {setEditProduct} {...productDetails}/>
          :
          null
        }
        </Col>
        
        </div>
        </Container>
)



}



const mapStateToProps = createStructuredSelector({
    collections: selectCollection,
  });

export default connect(mapStateToProps)(HomePage);