import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import CategoryList from '../categories/CategoryList';
import ProductList from '../products/ProductList';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md="3">
                        <CategoryList></CategoryList>

                    </Col>
                    <Col md="9">
                        <ProductList></ProductList>
                    </Col>
                </Row>
            </div>
        )
    }
}
