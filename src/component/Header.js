import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
    return <div className="ui second pointing menu">
        <Link to="/" className="ite,">Streamy</Link>
       <div className="right menu">
                <Link to ="/" className="item">
                  All Stream
                </Link>
                <GoogleAuth />
       </div>  
    
    </div>;
};

export default Header;