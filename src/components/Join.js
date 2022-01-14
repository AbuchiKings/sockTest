import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    return (
        <div>
            <h2>Join</h2>
            <Link to="/transaction?id=3&name=5">
                Join
           </Link>
           <h4>Join as sender</h4>
            <Link to="/sender?id=3&name=5">
                Join as sender
           </Link>
        </div>
    );
}

export default Join;
