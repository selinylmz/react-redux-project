import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as categoryActions from '../../redux/actions/categoryActions'
import * as productActions from '../../redux/actions/productActions'

class CategoryList extends Component {
    componentDidMount() {
        this.props.actions.getCategories()

    }
    selectCategory = (category) => {
        debugger;
        this.props.actions.changeCategory(category);
        this.props.actions.getProducts(category.id);

    }

    render() {
        let yellowBadgeStyles = {
            color: "black",
            backgroundColor: "yellow"

        }
        return (
            <div>
                <Badge style={yellowBadgeStyles}>
                    Categories
                </Badge>
                <ListGroup>
                    {this.props.categories.map(category => (
                        <ListGroupItem active={category.id === this.props.currentCategory.id} key={category.id} onClick={() => this.selectCategory(category)}>
                            {category.categoryName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
        )
    }
}



function mapStateToProps(state) {//state i proplara bağla reduxtaki state i tasımak için
    return {
        currentCategory: state.changeCategoryReducer,
        categories: state.categoryListReducer,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
            changeCategory: bindActionCreators(categoryActions.changeCategory, dispatch),
            getProducts: bindActionCreators(productActions.getProducts, dispatch)
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)

