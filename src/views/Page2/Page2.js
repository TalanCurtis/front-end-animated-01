import React, {Component} from 'react';
import axios from 'axios';
// import _ from 'lodash';

class Page2 extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        console.log('mounted')
        this.props.pageLock()
        axios.get('/api/test').then(res=>{
            this.setState({list:res.data.list})
            this.props.pageUnlock()
        })
    }

    render(){
        return(
            <div className='Page2'> Page2 view
            {this.state.list}
            </div>
        )
    }
}

export default Page2;