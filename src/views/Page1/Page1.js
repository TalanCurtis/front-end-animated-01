import React, {Component} from 'react';
import axios from 'axios';

class Page1 extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        axios.get('/api/test').then(res=>{
            console.log('res', res.data)
        })
    }
    render(){
        return(
            <div className="Page1"> Page1 view 
                <button onClick={()=>console.log('Pushed')}>Push me</button>
            </div>
        )
    }
}

export default Page1;