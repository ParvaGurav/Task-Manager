import React from 'react'
import Button from './Button';
import PropTypes from 'prop-types';

const Header = ({ title, onAdd, showAdd}) => {

    return (
        <div className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red':'black'} 
            text={showAdd ? 'Close':'ADD'}
            onClick={onAdd} />
        </div>
    )
}

Header.defaultProps = {
    title: 'Task  Manager',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
