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

        const mockList = [
            {id: 1, firstName: 'Mike', lastName: 'Keen'},
            {id: 2, firstName: 'Jacob', lastName: 'Owen'}
        ];

        return (
            <div>
                <div>
                    <CustomerRegister/>
                    {/*<CustomerList data={mockList}/>*/}
                </div>
            </div>
        );
    }
}

CustomerPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
    customerReducer: state.customerReducer
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(CustomerPage);
