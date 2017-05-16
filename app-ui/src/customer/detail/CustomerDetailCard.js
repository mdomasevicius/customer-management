import React, {PropTypes} from "react";
import {Col, Row, Spin} from "antd";

const propTypes = {
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
            <div>
                <Spin spinning={loading}>
                    <Row>
                        <Col offset={8} span={8}>
                            <span>Full Name: </span>
                            <span>{customer.fullName}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={8} span={8}>
                            <span>Email: </span>
                            <span>{customer.email}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={8} span={8}>
                            <span>City: </span>
                            <span>{customer.city}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={8} span={8}>
                            <span>Street: </span>
                            <span>{customer.street}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={8} span={8}>
                            <span>House Number: </span>
                            <span>{customer.houseNumber}</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col offset={8} span={8}>
                            <span>Zip Code: </span>
                            <span>{customer.zipCode}</span>
                        </Col>
                    </Row>
                </Spin>
            </div>
        );
    }
}

CustomerDetailCard.propTypes = propTypes;
export default CustomerDetailCard;
