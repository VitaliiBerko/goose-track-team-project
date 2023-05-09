import { useDispatch, useSelector } from 'react-redux';
import {
  Calendar,
  AllDays,
  CurrentMonthDays,
  OtherMonthStyledLink,
  CurrentMonthStyledLink,
} from './CalendarTable.styled';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameMonth,
  parseISO,
  eachDayOfInterval,
  formatISO,
  getWeeksInMonth,
} from 'date-fns';
import {
  selectCurrentMonth,
  selectIsLoading,
  selectTasks,
} from 'redux/calendar/calendar.selectors';
import { CalendarTableItem } from './CalendarTableItem';
import { Loader } from '../../Loader/Loader';
import { addIndexCurrentDay } from 'redux/calendar/calendar.slice';
import { addChoosedDay } from 'redux/calendar/calendar.slice';
import { useMedia, useWindowSize } from 'react-use';

export const CalendarTable = () => {
  const dispath = useDispatch();
  const currentMonth = parseISO(useSelector(selectCurrentMonth));
  const isLoading = useSelector(selectIsLoading);

  const tasksOfMonth = useSelector(selectTasks);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  const daysInMonth = eachDayOfInterval({
    start: startOfWeek(monthStart, { weekStartsOn: 1 }),
    end: endOfWeek(monthEnd, { weekStartsOn: 1 }),
  });

  const isTablet = useMedia('(min-width: 768px) and (max-width: 1279.98px)');
  const isDesktop = useMedia('(min-width: 1280px)');

  let minGridRowsHeight = 94;
  let headerHeight = 278;

  if (isTablet) {
    minGridRowsHeight = 122;
    headerHeight = 264;
  }

  if (isDesktop) {
    minGridRowsHeight = 122;
    headerHeight = 294;
  }

  const { height: windowHeight } = useWindowSize();
  const weeksInMonth = getWeeksInMonth(new Date(currentMonth), {
    weekStartsOn: 1,
  });
  const minCalendarHeight = weeksInMonth * minGridRowsHeight;
  let calendarHeight = minCalendarHeight;
  if (windowHeight > minCalendarHeight + headerHeight) {
    calendarHeight = windowHeight - headerHeight - 2;
  }

  const gridRowHeight = Math.floor(calendarHeight / weeksInMonth);

  return (
    <>
      <Calendar
        calendarHeight={`${calendarHeight}px`}
        minGridRowsHeight={`${minGridRowsHeight}px`}
      >
        {isLoading && <Loader />}
        {daysInMonth?.map((day, idx) => {
          const StyledLink = !isSameMonth(day, currentMonth)
            ? OtherMonthStyledLink
            : CurrentMonthStyledLink;

          const Days = !isSameMonth(day, currentMonth)
            ? AllDays
            : CurrentMonthDays;
          return (
            <Days key={idx}>
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
                {isSameMonth(day, currentMonth) && (
                  <CalendarTableItem
                    day={day}
                    dayTasks={tasksOfMonth[Number(format(day, 'd')) - 1]}
                    gridRowHeight={gridRowHeight}
                  />
                )}
              </StyledLink>
            </Days>
          );
        })}
      </Calendar>
    </>
  );
};
