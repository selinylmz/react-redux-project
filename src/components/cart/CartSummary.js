import React, { Component } from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from 'reactstrap';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as cartActions from '../../redux/actions/cartActions'
import { Link } from 'react-router-dom';
import alertify from "alertifyjs"
class CartSummary extends Component {
    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + " sepetten silindi")
    }
    renderEmpty() {
        debugger;
        return (
            <NavItem>
                <NavLink >Sepetiniz Boş</NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        let greenBadgeStyles = {
            backgroundColor: "lightgreen"
        }
        let redBadgeStyles = {
            backgroundColor: "red"
        }
        debugger;
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
                </DropdownToggle>
                <DropdownMenu right>
                    {
                        this.props.cart.map(cartItem => (
                            <DropdownItem key={cartItem.product.id}>
                                <Badge style={redBadgeStyles} onClick={() => this.removeFromCart(cartItem.product)}>Sil</Badge>
                                {cartItem.product.productName}
                                <Badge style={greenBadgeStyles}>{cartItem.quantity}</Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem>
                        <Link to={"/cart"}>Sepete git</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }
    render() {
        return (
            <div>
                {
                    this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()

                }

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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)