import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, Table, Button } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from '../../redux/actions/productActions'
import * as cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs"
import { Link } from "react-router-dom"
class ProductList extends Component {
    componentDidMount() {
        this.props.actions.getProducts()
    }
    addToCart = (product) => {
        debugger;
        this.props.actions.addToCart({ quantity: 1, product })
        alertify.success(product.productName + " sepete eklendi")
    }
    render() {
        let greenBadgeStyles = {
            color: "black",
            backgroundColor: "lightgreen"
        }
        let yellowBadgeStyles = {
            color: "black",
            backgroundColor: "yellow"
        }
        return (
            <div>
                <Badge style={yellowBadgeStyles}>
                    Products
                </Badge>
                <Badge style={greenBadgeStyles}>
                    {this.props.currentCategory.categoryName}
                </Badge>

                <Table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Quantity Per Unit</th>
                            <th>Unit Price</th>
                            <th>Units In Stock</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product =>
                        (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td><Link to={"/saveproduct/" + product.id}>{product.productName}</Link></td>
                                <td>{product.quantityPerUnit}</td>
                                <td>{product.unitPrice}</td>
                                <td>{product.unitsInStock}</td>
                                <td>
                                    <Button color="success" onClick={() => this.addToCart(product)}>Ekle</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
function mapStateToProps(state) {//state i proplara bağla reduxtaki state i tasımak için
    return {
        currentCategory: state.changeCategoryReducer,
        products: state.productListReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getProducts: bindActionCreators(productActions.getProducts, dispatch),
            addToCart: bindActionCreators(cartActions.addToCart, dispatch),
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)