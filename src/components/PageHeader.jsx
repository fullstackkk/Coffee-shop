import React from 'react';
import Navbar from './Navbar';

import '../styles/pageHeader.scss';

const PageHeader=(props)=>{

    const {title}=props;
    return(
        <div className="header">
            <Navbar/>
            <div className="title">{title}</div>                
        </div>
    )
}

export default PageHeader;