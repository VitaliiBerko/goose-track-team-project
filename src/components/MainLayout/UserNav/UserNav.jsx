import PropTypes from 'prop-types';

import * as STC from './UserNav.styled';
import Icons from '../../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { formatISO } from 'date-fns';
import { useLocation } from 'react-router-dom';
import {
  addChoosedDay,
  addCurrentMonth,
  addIndexCurrentDay,
} from 'redux/calendar/calendar.slice';

export const UserNav = ({ closeMobalMenu }) => {
  const inActive = useLocation().pathname.split('/')[1];
  const dispatch = useDispatch();
  const handleCloseMobalMenu = () => {
    closeMobalMenu(false);
    dispatch(
      addCurrentMonth(
        formatISO(new Date(), {
          representation: 'date',
        })
      )
    );
    dispatch(addChoosedDay(null));
    dispatch(addIndexCurrentDay(null));
  };

  return (
    <>
      <nav>
        <STC.Title>User Panel</STC.Title>
        <ul>
          <STC.Item>
            <STC.Link to="/account" onClick={handleCloseMobalMenu}>
              <STC.Icon>
                <use href={`${Icons}#profile-user-sf`} />
              </STC.Icon>
              <STC.Txt>My account</STC.Txt>
            </STC.Link>
          </STC.Item>
          <STC.Item>
            <STC.Link
              className={inActive === 'calendar' && 'active'}
              to={`/calendar/month/${formatISO(new Date(), {
                representation: 'date',
              })}`}
              onClick={handleCloseMobalMenu}
            >
              <STC.Icon>
                <use href={`${Icons}#profile-calendar-sf`} />
              </STC.Icon>
              <STC.Txt>Calendar</STC.Txt>
            </STC.Link>
          </STC.Item>
        </ul>
      </nav>
    </>
  );
};

UserNav.propTypes = {
  closeMobalMenu: PropTypes.func.isRequired,
};
