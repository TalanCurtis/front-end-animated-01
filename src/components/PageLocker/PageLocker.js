import React, {Component} from 'react';
import LoadingCirclesSVG from '../../images/LoadingCircles_svg';

class PageLocker extends Component{
    render(){
        return(
            <div className="PageLocker"> 
                <h2>Loading</h2>
                <LoadingCirclesSVG/>
            </div>
        )
    }
}

export default PageLocker;