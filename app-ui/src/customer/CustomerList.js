import React, {PropTypes} from "react";
import {Table} from 'antd';
import {browserHistory } from 'react-router';

const propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        fullName: PropTypes.string,
        email: PropTypes.string,
        city: PropTypes.string,
        street: PropTypes.string,
        houseNumber: PropTypes.string,
        zipCode: PropTypes.string
    })),
    loading: PropTypes.bool
};

class CustomerList extends React.Component {

    constructor(props) {
        super(props);
        this.handleRowClick = this.handleRowClick.bind(this);
    }

    handleRowClick(record) {
        browserHistory.push(`/customers/${record.id}`);
    }

    render() {
        const {
            data,
            loading
        } = this.props;

        const mappedCustomer = data.map((customer) => {
            return {
                key: customer.id,
                id: customer.id,
                fullName: customer.fullName,
                email: customer.email
            };
        });

        const columns = [{
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName'
        }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        }];

        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{border: 'solid 1px grey', width: '50%', marginTop: '5px'}}>
                    {/*Let's pretend this table is a `LIST`*/}
                    <Table
                        loading={loading}
                        dataSource={mappedCustomer}
                        columns={columns}
                        onRowClick={this.handleRowClick}/>
                </div>
            </div>
        );
    }
}

CustomerList.propTypes = propTypes;

export default CustomerList;
