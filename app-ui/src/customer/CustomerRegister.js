import React, {PropTypes} from "react";
import {Form, Input, DatePicker, Col, Button} from 'antd';
const FormItem = Form.Item;

const propTypes = {};

class CustomerRegister extends React.Component {

    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;

        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{width: '70%'}}>
                    <Form onSubmit={this.register}>
                        <FormItem>
                            {getFieldDecorator('fullName', {
                                rules: [{max: 50, required: true, message: 'Please input your full name!'}],
                            })(
                                <Input placeholder="Full Name"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('email', {
                                rules: [
                                    {required: true, message: 'Please input your email!'},
                                    {type: 'email', message: 'The input is not valid E-mail!'},
                                    ],
                            })(
                                <Input placeholder="Email"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('city', {
                                rules: [{required: true, message: 'Please input your city!'}],
                            })(
                                <Input placeholder="City"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('street', {
                                rules: [{required: true, message: 'Please input your street!'}],
                            })(
                                <Input placeholder="Street"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('houseNumber', {
                                rules: [{required: true, message: 'Please input your house number!'}],
                            })(
                                <Input placeholder="House number"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('zipCode', {
                                rules: [{required: true, message: 'Please input your house zip code!'}],
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
        );
    }
}

CustomerRegister.propTypes = propTypes;

const WrappedTimeRelatedForm = Form.create()(CustomerRegister);
export default WrappedTimeRelatedForm;
