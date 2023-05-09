import {
  startOfISOWeek,
  format,
  eachDayOfInterval,
  endOfISOWeek,
  isSameDay,
  formatISO,
  isSameMonth,
} from 'date-fns';
import {
  ListMonth,
  DateOfWeekCurrentMonth,
  DateOfWeekOtherMonth,
  ChoosedDate,
  DayWeek,
  Days,
  Month,
  ListDays,
  OtherMonthStyledLink,
  CurrentMonthStyledLink,
} from './CalendarHead.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addChoosedDay,
  addIndexCurrentDay,
} from 'redux/calendar/calendar.slice';
import { selectCurrentMonth } from 'redux/calendar/calendar.selectors';
import PropTypes from 'prop-types';
import { useMedia } from 'react-use';

export const CalendarHead = ({ currentDay }) => {
  const currentMonth = useSelector(selectCurrentMonth);
  const dispath = useDispatch();
  const isWide = useMedia('(min-width: 768px)');

  let daysInWeek;

  if (currentDay) {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(currentDay), { weekStartsOn: 1 }),
    });
  } else {
    daysInWeek = eachDayOfInterval({
      start: startOfISOWeek(new Date(), { weekStartsOn: 1 }),
      end: endOfISOWeek(new Date(), { weekStartsOn: 1 }),
    });
  }
  const List = currentDay ? ListDays : ListMonth;
  return (
    <>
      <List>
        {daysInWeek?.map((day, idx) => {
          const Week = currentDay ? Days : Month;
          const StyledLink = !isSameMonth(new Date(day), new Date(currentMonth))
            ? OtherMonthStyledLink
            : CurrentMonthStyledLink;

          const DateOfWeek = isSameMonth(new Date(day), new Date(currentMonth))
            ? DateOfWeekCurrentMonth
            : DateOfWeekOtherMonth;

          const DateWeek = isSameDay(new Date(currentDay), new Date(day))
            ? ChoosedDate
            : DateOfWeek;

          return (
            <Week key={idx}>
              {isWide ? (
                <DayWeek>{format(day, 'EEE')}</DayWeek>
              ) : (
                <DayWeek>{format(day, 'EEEEE')}</DayWeek>
              )}

              {currentDay && (
                <StyledLink
                  to={`/calendar/day/${formatISO(new Date(day), {
                    representation: 'date',
                  })}`}
                  onClick={() => {
                    dispath(addIndexCurrentDay(Number(format(day, 'd')) - 1));
                    dispath(
                      addChoosedDay(
                        formatISO(new Date(day), {
                          representation: 'date',
                        })
                      )
                    );
                  }}
                >
                  <DateWeek>{format(day, 'd')}</DateWeek>
                </StyledLink>
              )}
            </Week>
          );
        })}
      </List>
    </>
  );
};
CalendarHead.propTypes = {
  currentDay: PropTypes.string,
};
