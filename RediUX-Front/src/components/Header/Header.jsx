import React from 'react';
import CustomToolBar from '../CustomToolBar/CustomToolBar';
import LogoImgSml from '../../assets/logo-sml.svg';

const Header = () => {
    return (
        <CustomToolBar isADM>
            <a href="/">
                <img src={LogoImgSml} height={38} alt="logo-sml" />
            </a>
        </CustomToolBar>
    );
};

export default Header;
