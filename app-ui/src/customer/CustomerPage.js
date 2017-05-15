import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from './customer-actions';
import CustomerList from './CustomerList';

const propTypes = {
    actions: PropTypes.shape({
        fetchCustomers: PropTypes.func
    }),
    customerListReducer: PropTypes.shape({
        fetchingCustomers: PropTypes.bool,
        customers: PropTypes.array,
    })
};

class CustomerPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchCustomers();
    }

    render() {
        const {
            customers,
            fetchingCustomers
        } = this.props.customerListReducer;

        return (
            <div>
                <div>
                    <CustomerList
                        data={customers}
                        loading={fetchingCustomers}
                        />
                </div>
            </div>
        );
    }
}

CustomerPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
    customerListReducer: state.customerListReducer
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
