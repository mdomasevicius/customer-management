import React, {PropTypes} from "react";
import {Spin} from "antd";
/*eslint-disable no-unused-vars*/
//noinspection ES6UnusedImports
import * as style from './CustomerDetailCard.css';
/*eslint-enable no-unused-vars*/

const propTypes = {
    loading: PropTypes.bool,
    customer: PropTypes.shape({
        fullName: PropTypes.string,
        email: PropTypes.string,
        city: PropTypes.string,
        street: PropTypes.string,
        houseNumber: PropTypes.string,
        zipCode: PropTypes.string
    })
};

class CustomerDetailCard extends React.Component {

    render() {
        const {customer, loading} = this.props;

        if (!customer) {
            return (
                <div>Customer missing :(</div>
            );
        }

        return (
            <Spin spinning={loading}>
                <div className="container">
                    <div className="row">
                        <span className="label">Full Name: </span>
                        <span className="info">{customer.fullName}</span>
                    </div>
                    <div className="row">
                        <span className="label">Email: </span>
                        <span className="info">{customer.email}</span>
                    </div>
                    <div className="row">
                        <span className="label">City: </span>
                        <span className="info">{customer.city}</span>
                    </div>
                    <div className="row">
                        <span className="label">Street: </span>
                        <span className="info">{customer.street}</span>
                    </div>
                    <div className="row">
                        <span className="label">House Number: </span>
                        <span className="info">{customer.houseNumber}</span>
                    </div>
                    <div className="row">
                        <span className="label">Zip Code: </span>
                        <span className="info">{customer.zipCode}</span>
                    </div>
                </div>
            </Spin>
        );
    }
}

CustomerDetailCard.propTypes = propTypes;
export default CustomerDetailCard;
