import React from 'react';
import { StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import constants from '../../utils/constants';

interface Props {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}

const CalendarComponent: React.FC<Props> = ({ date, setDate }) => {
  return (
    <Calendar
      markedDates={{
        [`${date}`]: {
          selected: true,
          marked: true,
          selectedColor: constants.gradient,
        },
      }}
      minDate={new Date()}
      onDayPress={(dayPressed) => setDate(dayPressed.dateString)}
      style={styles.calendar}
      headerStyle={styles.header}
      theme={{
        backgroundColor: constants.gray[8],
        calendarBackground: constants.gray[8],
        textSectionTitleColor: constants.gray[8],
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: constants.gradient,
        selectedDayTextColor: constants.white,
        todayTextColor: constants.gradient,
        dayTextColor: constants.white,
        textDisabledColor: constants.textColor,
        dotColor: constants.gradient,
        selectedDotColor: constants.white,
        arrowColor: constants.white,
        disabledArrowColor: '#d9e1e8',
        monthTextColor: constants.white,
        indicatorColor: 'blue',
        textDayFontWeight: '300',
        textMonthFontWeight: 'normal',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 24,
        textDayHeaderFontSize: 18,
      }}
    />
  );
};

export default CalendarComponent;

const styles = StyleSheet.create({
  calendar: {
    marginTop: '2%',
    width: '100%',
    paddingBottom: 20,
  },
  header: {
    marginTop: '2%',
  },
});
