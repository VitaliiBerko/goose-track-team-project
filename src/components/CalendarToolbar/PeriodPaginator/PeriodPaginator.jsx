import {
  format,
  formatISO,
  addMonths,
  subMonths,
  parseISO,
  startOfMonth,
  subDays,
  addDays,
  isThisMonth,
  isFirstDayOfMonth,
  isLastDayOfMonth,
} from 'date-fns';
import {
  MonthName,
  Wrapper,
  MonthWrapper,
  ButtonLeft,
  ButtonRight,
  WrapperButton,
  Icon,
} from './PeriodPaginator.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addChoosedDay,
  addCurrentMonth,
  addIndexCurrentDay,
  clearTasks,
} from 'redux/calendar/calendar.slice';
import {
  selectCurrentMonth,
  selectIsLoading,
} from 'redux/calendar/calendar.selectors';
import Icons from '../../../images/sprite.svg';
import PropTypes from 'prop-types';

export const PeriodPaginator = ({ currentIndex, choosedDay }) => {
  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const prevMonth = formatISO(new Date(subMonths(currentMonth, 1)), {
    representation: 'date',
  });
  const nextMonth = formatISO(new Date(addMonths(currentMonth, 1)), {
    representation: 'date',
  });
  const prevDay = formatISO(new Date(subDays(new Date(choosedDay), 1)), {
    representation: 'date',
  });
  const nextDay = formatISO(new Date(addDays(new Date(choosedDay), 1)), {
    representation: 'date',
  });

  const handlePrevMonth = () => {
    dispatch(clearTasks());
    dispatch(addCurrentMonth(prevMonth));
    dispatch(
      addChoosedDay(
        formatISO(
          new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
          { representation: 'date' }
        )
      )
    );
  };
  const handleNextMonth = () => {
    dispatch(clearTasks());
    dispatch(addCurrentMonth(nextMonth));
    dispatch(
      addChoosedDay(
        formatISO(
          new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
          { representation: 'date' }
        )
      )
    );
  };
  const handlePrevDay = () => {
    dispatch(addChoosedDay(prevDay));
    dispatch(addIndexCurrentDay(currentIndex - 1));
  };
  const handleNextDay = () => {
    dispatch(addChoosedDay(nextDay));
    dispatch(addIndexCurrentDay(currentIndex + 1));
  };

  return (
    <Wrapper index={currentIndex}>
      <MonthWrapper>
        {currentIndex !== null ? (
          <MonthName>{format(new Date(choosedDay), 'd MMMM yyyy')}</MonthName>
        ) : (
          <MonthName>{format(currentMonth, 'MMMM yyyy')}</MonthName>
        )}
      </MonthWrapper>

      <WrapperButton>
        {currentIndex !== null ? (
          isFirstDayOfMonth(new Date(choosedDay)) ? (
            <ButtonLeft disabled>
              <Icon width="20" height="20">
                <use href={`${Icons}#calendar-right-sf`}></use>
              </Icon>
            </ButtonLeft>
          ) : (
            <ButtonLeft to={`day/${prevDay}`} onClick={handlePrevDay}>
              <Icon width="20" height="20">
                <use href={`${Icons}#calendar-right-sf`}></use>
              </Icon>
            </ButtonLeft>
          )
        ) : isThisMonth(new Date(currentMonth)) ? (
          <ButtonLeft disabled>
            <Icon width="20" height="20">
              <use href={`${Icons}#calendar-right-sf`}></use>
            </Icon>
          </ButtonLeft>
        ) : (
          <ButtonLeft
            to={`month/${formatISO(
              new Date(subMonths(startOfMonth(new Date(currentMonth)), 1)),
              { representation: 'date' }
            )}`}
            onClick={() => {
              if (isLoading) {
                return;
              }
              handlePrevMonth();
            }}
            disabled={isLoading}
          >
            <Icon width="20" height="20">
              <use href={`${Icons}#calendar-right-sf`}></use>
            </Icon>
          </ButtonLeft>
        )}

        {currentIndex !== null ? (
          isLastDayOfMonth(new Date(choosedDay)) ? (
            <ButtonRight disabled>
              <Icon>
                <use href={`${Icons}#calendar-left-sf`}></use>
              </Icon>
            </ButtonRight>
          ) : (
            <ButtonRight to={`day/${nextDay}`} onClick={handleNextDay}>
              <Icon>
                <use href={`${Icons}#calendar-left-sf`}></use>
              </Icon>
            </ButtonRight>
          )
        ) : (
          <ButtonRight
            to={`month/${formatISO(
              new Date(addMonths(startOfMonth(new Date(currentMonth)), 1)),
              { representation: 'date' }
            )}`}
            onClick={() => {
              if (isLoading) {
                return;
              }
              handleNextMonth();
            }}
            disabled={isLoading}
          >
            <Icon>
              <use href={`${Icons}#calendar-left-sf`}></use>
            </Icon>
          </ButtonRight>
        )}
      </WrapperButton>
    </Wrapper>
  );
};
PeriodPaginator.propTypes = {
  currentIndex: PropTypes.number || null.isRequired,
  choosedDay: PropTypes.string,
};
