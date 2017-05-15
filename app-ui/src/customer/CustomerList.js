import React, {PropTypes} from "react";
import {Table} from 'antd';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool
};

class CustomerList extends React.Component {

    render() {
        const {data, loading} = this.props;

        const mappedCustomer = data.map((customer) => {
            return {
                key: customer.id,
                fullName: customer.fullName,
                email: customer.email
            };
        });

        const columns = [{
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }];

        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '100%'}}>
                    <Table loading={loading} dataSource={mappedCustomer} columns={columns} />
                </div>
            </div>
        );
    }
}

CustomerList.propTypes = propTypes;

export default CustomerList;
