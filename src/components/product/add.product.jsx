import React,{useState,useEffect} from "react";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table} from 'react-bootstrap';
import {addItem} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';

const AddProduct = ({addItem}) => {
    
const [state,setState] = useState({name:"",price:"",description:""})
const [valid_form,setValidForm] = useState(false)

const handleChange = (e) => {
    e.preventDefault()
    let {name,value} = e.target
    setState(  prevState =>  ({ ...prevState,[name]:value}))
}


useEffect(() => {
    if(Object.values(state).filter(field => field == '').length == 0) {
        setValidForm(true)
    }else{
        setValidForm(false)   
    }
},[state]);

const handleSubmit = e =>{
    e.preventDefault()
    addItem(state)
}
return(
<Card>
<Card.Header>
<Card.Title as="h4">ADD PRODUCT</Card.Title>
</Card.Header>
<Card.Body>
     <Form>
        <Row>
         <Col className="pr-1" md ={12}>
           <Form.Group>
            <label>Name</label>
            <Form.Control
              defaultValue=""
              placeholder="enter Name"
              type="text"
              name = "name"
              onChange = {(e) => handleChange(e)}
            ></Form.Control>
            </Form.Group>
            <Form.Group>
            <label>Description</label>
            <Form.Control
              defaultValue=""
              placeholder=" enter description"
              type="text"
              name = "description"
              onChange = {(e) => handleChange(e)}
            ></Form.Control>
            </Form.Group>
            <Form.Group>
            <label>Price</label>
            <Form.Control
              defaultValue=""
              placeholder="Enter Price"
              type="number"
              name = "price"
              onChange = {(e) => handleChange(e)}
            ></Form.Control>
            </Form.Group>
           <Button
            className="btn-fill pull-right"
            type="submit"
            variant="light"
            disabled = {!valid_form}
            onClick = {(e) => handleSubmit(e)}
            >
            Update Profile
          </Button>
           
        </Col>
       </Row>
     </Form>
     </Card.Body>
</Card>

)

}



const mapDispatchToProps = dispatch => ({
    addItem: cartItem => dispatch(addItem(cartItem)),
  });
  export default connect(
    null,
    mapDispatchToProps
  )(AddProduct);