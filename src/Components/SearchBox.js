import React, { Component } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

class SearchBox extends Component {
    render(){
        return (
            <Row>
                <Col lg="12">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="text" placeholder={this.props.placeholder} onChange={this.props.action} />
                    </Form.Group>
                </Col>
            </Row>
        )
    }
}


export default SearchBox;