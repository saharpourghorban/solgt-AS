import React from 'react';
import NotFoundImg from '../../assets/images/404.jpg';

const NotFound = () => {
    return (
        <div className="img-box">
            <img src={NotFoundImg} alt="404Image"/>
        </div>
    );
};

 

export default NotFound;