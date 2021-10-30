import { Form,Button ,Col,Container,Row,Card, Alert,Badge,Modal,Table,InputGroup,FormControl} from 'react-bootstrap';

const SearchInput = ({handleSearch}) => (


    <Col className="col-md-4 d-flex">
        <InputGroup>
        <FormControl
          type="text"
          placeholder="Search..."
          onChange = {(e) => handleSearch(e.target.value)}
        />
        <div className="search-icon">
          <i className="fa fa-search" />
        </div>
      </InputGroup>
    </Col>

)



export default SearchInput