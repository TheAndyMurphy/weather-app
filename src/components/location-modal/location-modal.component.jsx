import React from 'react';
import './location-modal.styles.scss';
import { ReactComponent as LocationIcon } from '../../assets/custom-icons/location.svg';

const LocationModal = ({handleChange, handleSubmit, handleModal}) => (
    <div className="location__modal">
        
        <LocationIcon />
        <p>CHANGE LOCATION</p>
        <form className="location__modal__form" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="Enter New Location..." />
            <input type="submit" value="update" />
            <span onClick={handleModal}>X Cancel</span>
        </form>
    </div>

);

export default LocationModal;