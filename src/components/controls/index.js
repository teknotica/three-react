import React, { useCallback } from 'react';
import './styles.css';

const geometryList = [
    'TorusBufferGeometry',
    'BoxBufferGeometry',
    'ConeBufferGeometry'
];

const Controls = ({ currentGeometry, setCurrentGeometry }) => {

    const onChangeHandler = useCallback((event) => {
        setCurrentGeometry(event.target.value);
        
    }, [setCurrentGeometry]);

    return (
        <select 
            className="controls" 
            onChange={onChangeHandler}
            value={currentGeometry}>
            {geometryList.map((geometry, index) => {
                return (
                    <option 
                        value={geometry} 
                        key={index}>
                        {geometry}
                    </option>
                );
            })};
        </select>
    )
};

export default Controls;