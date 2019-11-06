import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../action/index'

class MenuItems extends Component {

    render() {

        const {item} = this.props;

        return (
            <div className="panel panel-primary">
                <div className="panel-body">
                    <div className="row justify-content-md-center">
                        <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
                            <div className="col-md-4 col-lg-4 col-sm-4 col-xs-4 col-md-offset-0 col-xs-offset-0 col-lg-offset-0">
                                <label>{ item.fooditem }</label>
                            </div>
                            <div className="col-md-3 col-lg-3 col-sm-3 col-xs-3 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                                <label>Price: ${ item.price }</label>
                            </div>
                            <div className="col-md-2 col-lg-2 col-sm-2 col-xs-2 col-md-offset-1 col-xs-offset-1 col-lg-offset-1">
                                <input type="button" value="Add" className="btn-group-lg btn-group-sm btn-group-xs btn-primary" id="btnAdd"
                                       onClick={()=> {
                                           this.props.addToCart(item);
                                       }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        addToCart : (item) => dispatch(addToCart(item))
    };
}

export default connect(null,mapDispatchToProps)(MenuItems);