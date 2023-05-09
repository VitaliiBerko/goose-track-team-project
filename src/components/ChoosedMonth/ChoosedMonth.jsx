import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';
import { Wrapper } from './ChoosedMonth.styled';

const ChoosedMonth = () => {
  return (
    <Wrapper>
      <MonthCalendarHead />
      <CalendarTable />
    </Wrapper>
  );
};
export default ChoosedMonth;
