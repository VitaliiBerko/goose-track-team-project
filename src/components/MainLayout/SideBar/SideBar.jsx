import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { LogoutBtn } from '../LogoutBtn/LogoutBtn';
import { UserNav } from '../UserNav/UserNav';

import * as STC from './SideBar.styled';
import LogoGoose from '../../../images/Logo/GooseLogo.png';
import LogoGooseX2 from '../../../images/Logo/GooseLogo@2x.png';
import LogoGooseX3 from '../../../images/Logo/GooseLogo@3x.png';
import Icons from '../../../images/sprite.svg';

export const SideBar = ({ isMobalMenuOpen, closeMobalMenu }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        closeMobalMenu(false);
      }
    };
    isMobalMenuOpen && window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [isMobalMenuOpen, closeMobalMenu]);

  const handleCloseMobalMenu = () => {
    closeMobalMenu(false);
  };

  return (
    <>
      <STC.Container className={isMobalMenuOpen && 'openMobalMenu'}>
        <STC.Box>
          <STC.Logo to="/" onClick={handleCloseMobalMenu}>
            <STC.LogoImg
              srcSet={`${LogoGoose} 1x, ${LogoGooseX2} 2x, ${LogoGooseX3} 3x`}
              src={`${LogoGoose}`}
              alt="Logo"
            />
            <STC.LogoTxt>
              G<STC.LogoSpan>oo</STC.LogoSpan>
              seTrack
            </STC.LogoTxt>
          </STC.Logo>
          <STC.CloseBtn onClick={handleCloseMobalMenu}>
            <STC.CloseBtnSvg>
              <use xlinkHref={`${Icons}#calendar-close-sf`} />
            </STC.CloseBtnSvg>
          </STC.CloseBtn>
        </STC.Box>
        <UserNav closeMobalMenu={closeMobalMenu} />
        <LogoutBtn />
      </STC.Container>
      {isMobalMenuOpen && <STC.Overlay onClick={handleCloseMobalMenu} />}
    </>
  );
};

SideBar.propTypes = {
  isMobalMenuOpen: PropTypes.bool.isRequired,
  closeMobalMenu: PropTypes.func.isRequired,
};
