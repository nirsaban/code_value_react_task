import React,{useState,useEffect} from "react";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/shop/shop.actions';
import image from './product.png'



const Product = ({addProduct,name,price,description,id,remove,setProductDetails,setEditProduct,editProduct}) => {
    const[bgc,setBgc] = useState("none") 
    const handleProductClick = () => {

        if(!editProduct && !addProduct){
          setProductDetails({
            name,
            price,
            description,
            id
          })
          setEditProduct(true)
          setBgc('primary')
        }
    }
    useEffect(() => {
      if(!editProduct){
        setBgc('none')
      }
    }, [editProduct]);
    const handleChange = e => {

    }

    return(
    <React.Fragment>
        <Card   onClick = {handleProductClick} className = {`bg-${bgc} mb-2 d-flex`}>
        <Row  className="justify-content-between p-2">
          <Col md ="3" >
            <Card.Img variant="top" src={image} style={{ width: '5rem' }} />
          </Col>
          <Col md ="6">
          <Card.Title>{name.toUpperCase()}</Card.Title>  
          <Card.Text>
          {description}
          </Card.Text>
          </Col>
          <Col className= "align-self-end" >
          <Button onClick = {() => remove(id)} variant="warning" >DELETE</Button>
          </Col>
          </Row>
      </Card>
      
    </React.Fragment>
    )
}





const mapDispatchToProps = dispatch => ({
    remove: item => dispatch(removeItem(item)),
  });
  export default connect(
    null,
    mapDispatchToProps
  )(Product);