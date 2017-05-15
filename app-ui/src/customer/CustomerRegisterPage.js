import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {actions} from "./customer-actions";
import {Form, Input, notification, Button, Spin} from 'antd';
const FormItem = Form.Item;

const propTypes = {
    actions: PropTypes.shape({
        registerCustomerMaybeNavigateToList: PropTypes.func
    }),
    customerState: PropTypes.shape({
        registeringCustomer: PropTypes.bool,
        registeringSuccess: PropTypes.bool
    }),
    form: PropTypes.object //from antd
};

class CustomerRegisterPage extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    openErrorNotificationWithIcon() {
        notification['error']({
            message: 'Registration Failed',
            description: 'Unable to register customer.',
        });
    }

    register(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.actions.registerCustomerMaybeNavigateToList({
                    fullName: values.fullName,
                    email: values.email,
                    city: values.city,
                    street: values.street,
                    zipCode: values.zipCode
                }, this.openErrorNotificationWithIcon);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {registeringCustomer} = this.props.customerState;

        return (
            <div>
                <Spin spinning={registeringCustomer}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{width: '70%', marginTop: '10px'}}>
                            <Form onSubmit={this.register}>
                                <FormItem>
                                    {getFieldDecorator('fullName', {
                                        rules: [
                                            {required: true, message: 'Please input your full name!'},
                                            {max: 30, message: 'Maximum allowed character: 30'},
                                        ],
                                    })(
                                        <Input placeholder="Full Name"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {required: true, message: 'Please input your email!'},
                                            {type: 'email', message: 'The input is not valid E-mail!'},
                                            {max: 30, message: 'Maximum allowed character: 30'}
                                        ],
                                    })(
                                        <Input placeholder="Email"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('city', {
                                        rules: [
                                            {required: true, message: 'Please input your city!'},
                                            {max: 30, message: 'Maximum allowed character: 30'}
                                        ],
                                    })(
                                        <Input placeholder="City"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('street', {
                                        rules: [
                                            {required: true, message: 'Please input your street!'},
                                            {max: 30, message: 'Maximum allowed character: 30'}
                                        ],
                                    })(
                                        <Input placeholder="Street"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('houseNumber', {
                                        rules: [
                                            {required: true, message: 'Please input your house number!'},
                                            {max: 30, message: 'Maximum allowed character: 30'}
                                        ],
                                    })(
                                        <Input placeholder="House number"/>
                                    )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('zipCode', {
                                        rules: [
                                            {required: true, message: 'Please input your house zip code!'},
                                            {max: 30, message: 'Maximum allowed character: 30'}
                                        ]
                                    })(
                                        <Input placeholder="Zip code"/>
                                    )}
                                </FormItem>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Register
                                </Button>
                            </Form>
                        </div>
                    </div>
                </Spin>
            </div>
        );
    }
}

CustomerRegisterPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
    customerState: state.customerReducer
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
});

const WrappedTimeRelatedForm = Form.create()(connect(mapStateToProps, mapDispatchToProps)(CustomerRegisterPage));
export default WrappedTimeRelatedForm;
