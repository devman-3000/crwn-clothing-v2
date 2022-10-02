import React from 'react';
import './styles.scss';

const Categories = ({ children }) => {
    return (
        <div className='categories-container'>
            {children}
         </div>
    )
}

export default Categories;