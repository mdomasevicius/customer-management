import React, {PropTypes} from "react";
import {DatePicker} from 'antd';

const propTypes = {
    children: PropTypes.element
};

class HomePage extends React.Component {

    render() {
        return (
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div>
                    <DatePicker/>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = propTypes;

export default HomePage;
