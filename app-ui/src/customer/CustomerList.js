import React, {PropTypes} from "react";
import {Table} from 'antd';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object)
};

class CustomerList extends React.Component {

    render() {
        const {data} = this.props;

        const mappedCustomer = data.map((customer) => {
            return {
                key: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName
            };
        });

        const columns = [{
            title: 'First Name',
            dataIndex: 'firstName',
            key: 'firstName',
        }, {
            title: 'Last Name',
            dataIndex: 'lastName',
            key: 'lastName',
        }];

        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '100%'}}>
                    <Table dataSource={mappedCustomer} columns={columns} />
                </div>
            </div>
        );
    }
}

CustomerList.propTypes = propTypes;

export default CustomerList;
