import React, {Component} from 'react';
import IBMService from '../../services/ibmService';
import './dataView.css';

export default class DataView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        ;
    }

    async componentDidMount() {
        try{
            global.loading.show();
            let result = await IBMService.getPostsData();
            if(result){
                this.setState({data: result});
            }
            global.loading.hidden();
        }catch (err){
            console.warn(err);
            global.loading.hidden();
        }
    }

    render() {
        return (
            <div>
                <div className={'container'}>
                {
                    this.state.data.map((item,index)=>{
                        return (
                            <div className={'content-box'} key={item.id}>
                                <p className={'title'}>{item.title}</p>
                                <p className={'body'}>{item.body}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        );
    }
}
