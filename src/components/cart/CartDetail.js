import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { Badge, Table, Button } from 'reactstrap'
import alertify from "alertifyjs"
class CartDetail extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " sepetten silindi")
    }
    render() {
        return (
            <div>
                <h3>Cart detail</h3>
                <Table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map(cartItem =>
                        (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.quantity}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>
                                    <Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>Sil</Button>
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
        cart: state.cartReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)



