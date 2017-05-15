import React, {PropTypes} from "react";

const propTypes = {
    children: PropTypes.element
};

class App extends React.Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;
