import React,{useState} from "react";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/shop/shop.actions';
import image from './product.png'



const Product = ({name,price,description,id,remove}) => {
    const [state,setState] = useState({bgc:"none"})
    const [edit,setEdit] = useState(false)
    
    const handleProductClick = () => {
        setState(  prevState =>  ({ ...prevState,bgc:'success'}))
        setEdit(true)
    }
    const handleChange = e => {

    }

    return(
    <React.Fragment>
        <Card  style={{ height: '12rem',padding:"2rem" }}  onClick = {handleProductClick} className = {`bg-${state['bgc']}`}>
        <Row>
          <Col md ="3">
            <Card.Img variant="top" src={image} style={{ width: '6rem' }} />
          </Col>
          <Col md ="6">
          <Card.Title>{name.toUpperCase()}</Card.Title>  
          <Card.Text>
          {description}
          </Card.Text>
          <Card.Text>
          {price + "$"}
          </Card.Text>
          </Col>
          <Col>
          <Button onClick = {() => remove(id)} className ="btn btn-danger">DELETE</Button>
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