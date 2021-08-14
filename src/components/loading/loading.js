import React, {Component} from 'react';
import './loading.css';

export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading:true,
        }
        ;
    }

    render() {
        return (
            <div className={`loading-box ${this.state.isLoading ? '' : 'hidden'}`}>Loading...</div>
        );
    }

    show = () => {
        this.setState({isLoading:true})
    }

    hidden = () => {
        this.setState({isLoading:false})
    }
}
