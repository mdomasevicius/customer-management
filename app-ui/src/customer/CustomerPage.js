import React, {PropTypes} from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actions} from './customer-actions';
import CustomerList from './CustomerList';
import CustomerRegister from './CustomerRegister';

const propTypes = {
    actions: PropTypes.object
};

class CustomerPage extends React.Component {

    componentWillMount() {
        this.props.actions.fetchCustomers();
    }

    render() {
        console.log(this);
        const {customers, fetchingCustomers} = this.props.customerState;

        return (
            <div>
                <div>
                    {/*<CustomerRegister/>*/}
                    <CustomerList data={customers} loading={fetchingCustomers}/>
                </div>
            </div>
        );
    }
}

CustomerPage.propTypes = propTypes;

const mapStateToProps = (state) => {
    console.log('wtf', state);
    return {
        customerState: state.customerReducer
    }
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
