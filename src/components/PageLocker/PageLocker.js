import React, {Component} from 'react';
import LoadingCircles_svg from '../../images/LoadingCircles_svg';

class PageLocker extends Component{
    render(){
        return(
            <div className="PageLocker"> 
                <h2>Loading</h2>
                <LoadingCircles_svg/>
            </div>
        )
    }
}

export default PageLocker;