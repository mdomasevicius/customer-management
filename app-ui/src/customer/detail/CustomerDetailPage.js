import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions} from "./customer-detail-actions";
import {Link} from "react-router";
import {Col, Row} from "antd";
import CustomerDetailCard from "./CustomerDetailCard";

const propTypes = {
    actions: PropTypes.shape({
        fetchSingleCustomer: PropTypes.func
    }),
    customerDetailState: PropTypes.shape({
        customer: PropTypes.object
    }),
    params: PropTypes.shape({
        customerId: PropTypes.string,
    })
};

class CustomerDetailPage extends React.Component {

    componentWillMount() {
        const {customerId} = this.props.params;
        this.props.actions.fetchSingleCustomer(customerId);
    }

    render() {
        const {customer} = this.props.customerDetailState;

        return (
            <div>
                <Row>
                    <Col offset={8} span={8}>
                        <Link to="/">
                            <h2>Back to List</h2>
                        </Link>
                    </Col>
                </Row>
                <CustomerDetailCard
                    customer={customer}/>
            </div>
        );
    }
}

CustomerDetailPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
    customerDetailState: state.customerDetailReducer
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetailPage);
