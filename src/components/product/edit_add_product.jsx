import React,{useState,useEffect} from "react";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table} from 'react-bootstrap';
import {addItem,editItem} from '../../redux/shop/shop.actions';
import {connect} from 'react-redux';
import image from './product.png'




const EditAddProduct = ({setAddProduct,setEditProduct,editItem,addItem,...otherProps}) => {


  const [state,setState] = useState({name:"",price:"",description:""})
  const [valid_form,setValidForm] = useState(false)
  const [isEdit,setEdit] = useState(otherProps.id ? true : false) 
  
  const handleChange = (e) => {
      e.preventDefault()
      let {name,value} = e.target
      setState(  prevState =>  ({ ...prevState,[name]:value}))
  }
  useEffect(() => {
      if(!isEdit){
        if(Object.values(state).filter(field => field == '').length == 0)setValidForm(true)
        else setValidForm(false)   
      }else{
        if(Object.values(state).filter(field => field == '').length == 0 &&  checkIfMadeChanges())setValidForm(true)   
         else setValidForm(false)   
      }
  },[state]);

  useEffect(() => {
   if(isEdit){
    setState(  prevState =>  ({ ...prevState,...otherProps}))
   }
},[]);


const checkIfMadeChanges = () => {
  return JSON.stringify(otherProps) !== JSON.stringify(state);
}


  const handleSubmit = e =>{
    e.preventDefault()
    if(!isEdit){
      setState(  prevState =>  ({ ...prevState,name:"",price:"",description:""}))
      document.querySelectorAll("input").forEach(input => input.value = '')
      addItem(state)
    }else{
      let propertiesToUpdate = state
      propertiesToUpdate['id'] = otherProps.id
      setEditProduct(false)
      editItem(propertiesToUpdate)
    }
  }

  
  return(
  <Card>
    <Card.Header>
    <Card.Title as="h4">{!isEdit ? "ADD PRODUCT" : "Edit Product"}</Card.Title>
    </Card.Header>
    <Card.Body>
     <Form>
        <Row>
        <Col md ="3" >
            <Card.Img variant="top" src={image} style={{ width: '5rem' }} />
          </Col>
         <Col className="pr-1" md ={12}>
           <Form.Group>
            <label>Name</label>
            <Form.Control
               defaultValue={isEdit ? otherProps.name : state.name}
              placeholder="enter Name"
              type="text"
              name = "name"
              onChange = {(e) => handleChange(e)}
            ></Form.Control>
            </Form.Group>
            <Form.Group>
            <label>Description</label>
            <Form.Control
              defaultValue={isEdit ? otherProps.description : state.description}
              placeholder=" enter description"
              type="text"
              name = "description"
              onChange = {(e) => handleChange(e)}
            ></Form.Control>
            </Form.Group>
            <Form.Group>
            <label>Price</label>
            <Form.Control
              defaultValue={isEdit ? otherProps.price : state.price}
              placeholder="Enter Price"
              type="number"
              name = "price"
              onChange = {(e) => handleChange(e)}
            ></Form.Control>
            </Form.Group>
          <div className ="col-md-6 mt-2 d-flex justify-content-between">
           <Button
            className="btn-fill pull-right"
            type="submit"
            variant="success"
            disabled = {!valid_form}
            onClick = {(e) => handleSubmit(e)}
            >
            {!isEdit ? "ADD PRODUCT" : "Update Product"}
          </Button>
           <div
            className="btn-fill pull-right"
            type="submit"
            variant="danger"
            onClick = {(e) => isEdit ?  setEditProduct(false) : setAddProduct(false)}
            >
            Cancel
          </div>
          </div>
        </Col>
       </Row>
     </Form>
     </Card.Body>
  </Card>

)

}



const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    editItem : itemEdit => dispatch(editItem(itemEdit))
  });
  export default connect(
    null,
    mapDispatchToProps
  )(EditAddProduct);