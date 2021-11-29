import moment from 'moment';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../contexts/Theme/context';
import { View, StyleSheet } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
//import AppText from '../../../components/AppText';

interface Props {
  date: moment.Moment;
  setDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
}

const ScrollableHeader: React.FC<Props> = (props) => {
  const { date, setDate } = props;
  //@ts-ignore
  const { constants, theme } = useContext(ThemeContext);
  return (
    <View style={styles.container}>
      <CalendarStrip
        scrollable
        // startingDate={date.startOf('week')}
        calendarAnimation={{ type: 'sequence', duration: 30 }}
        // daySelectionAnimation={{
        //   type: 'border',
        //   duration: 200,
        //   borderWidth: 1,
        //   borderHighlightColor: 'white',
        // }}
        selectedDate={date}
        headerText=" "
        style={styles.calendarStyle}
        calendarHeaderStyle={styles.dateNumber}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        highlightDateNumberStyle={styles.dateNumber}
        highlightDateNameStyle={styles.dateName}
        highlightDateContainerStyle={styles.selectedContainer}
        onDateSelected={setDate}
        iconLeft={null}
        iconRight={null}
        upperCaseDays={false}
        //@ts-ignore
        dayContainerStyle={styles.dayStyles(constants, theme)}
        // dayComponent={(props) => (
        //   <TouchableOpacity onPress = {(props.) =>}
        //     style={{ backgroundColor: constants.gradient, height: 80 }}
        //     {...props}
        //   >
        //     <AppText style={styles.textColor}>{props.date.days()}</AppText>
        //   </TouchableOpacity>
        // )}
        iconContainer={{
          width: 0,
        }}
        markedDates={[
          {
            date: date,
            dots: [
              {
                color: constants.gradient,
              },
            ],
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '12%',
    marginBottom: '5%',
    marginTop: '-5%',
    paddingTop: 0,
  },
  calendarStyle: {
    height: '100%',
    justifyContent: 'flex-start',
  },
  dateNumber: {
    color: '#fff',
  },
  dateName: {
    color: '#fff',
  },
  selectedContainer: {
    backgroundColor: '#3D70F8',
    borderWidth: 0,
  },
  //@ts-ignore
  dayStyles: (constants, theme) => ({
    backgroundColor: theme === 'light' ? constants.white : constants.black,
  }),
});

export default ScrollableHeader;
