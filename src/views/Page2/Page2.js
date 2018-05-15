import React, {Component} from 'react';
import axios from 'axios';

class Page2 extends Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
    }
    componentDidMount(){
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