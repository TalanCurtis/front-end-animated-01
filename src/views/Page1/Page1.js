import React, {Component} from 'react';
import axios from 'axios';


class Page1 extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }

    componentDidMount(){
        this.props.pageLock()
        axios.get('/api/test').then(res=>{
            this.setState({data:res.data.list})
            this.props.pageUnlock()
        })
    }
    
    render(){
        return(
            <div className="Page1"> Page1 view 
                <button onClick={()=>console.log('Pushed')}>Push me</button>
                {this.state.data}
            </div>
        )
    }
}

export default Page1;