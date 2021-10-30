import React from "react";
import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table} from 'react-bootstrap';






const Header = ({title}) => {





    return(
        <Container fluid className ="p-3" style={{ background: "rgb(57, 155, 236)" }}> 
            <Container>
                <div className ="display-4">{title}</div>
            </Container>
        </Container>
    )



} 




export default Header