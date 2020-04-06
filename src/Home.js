import React from 'react';
import { connect } from 'react-redux';
import { testAdd } from './store/test/test-action'

class Home extends React.Component {
    render() {
        console.log(this.props)
        return <div onClick={ this.props.testAdd}> Home </div>
    }
}

export default connect(state => {
    return state
}, { testAdd })(Home);