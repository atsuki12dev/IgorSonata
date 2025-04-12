import React from 'react'
import classes from './Header.module.scss'
import { useNavigate } from 'react-router-dom';
import SocialMedia from '../SocialMedia/SocialMedia';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <div className={classes.block}>
        <div className={classes.nav}>
          <p className={classes.navText} onClick={() =>navigate('/IgorSonata/')}>ГЛАВНАЯ</p>
          <p className={classes.navText} onClick={() =>navigate('/IgorSonata/AboutUs')}>О НАС</p>
          <p className={classes.navText} onClick={() =>navigate('/IgorSonata/Services')}>УСЛУГИ</p>
        </div>
        <img className={classes.logo} onClick={() => navigate('/IgorSonata/')} src="./img/Logo.svg" alt="Logo.svg" />
        <div className={classes.socialMedia}>
          <SocialMedia/>
        </div>
        
      </div>
    </header>
  )
}

export default Header