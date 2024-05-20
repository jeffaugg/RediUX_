import React from 'react';
import CustomToolBar from '../CustomToolBar/CustomToolBar';
import BackButton from '../Buttons/BackButton'; // Import the BackButton component

const Header = () => {
  return (
    <CustomToolBar isADM>
      <BackButton /> 
    </CustomToolBar>
  );
};

export default Header;
