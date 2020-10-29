import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import jaLocale from 'date-fns/locale/ja';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import format from 'date-fns/format';


class ExtendedUtils extends DateFnsUtils {
  getCalendarHeaderText(date) {
    return format(date, 'yyyy年　MMM', { locale: this.locale });
  }
}

const BirthField = ({ defaultValue, dispatch }) => {
  const [selectedDate, setSelectedDate] = React.useState(defaultValue);
  // new Date('1950-01-01T00:00:00')
  const handleDateChange = (date) => {
    let std;
    if (date) {
      const y = date.getFullYear();
      const m = `00${date.getMonth() + 1}`.slice(-2);
      const d = `00${date.getDate()}`.slice(-2);
      std = `${y}-${m}-${d}`;
      // console.log('std', std);
    } else {
      std = '';
    }
    setSelectedDate(date);
    dispatch(std);
  };
  return (
    <MuiPickersUtilsProvider utils={ExtendedUtils} locale={jaLocale}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy-MM-dd"
        margin="normal"
        id="date-picker-inline"
        label="生年月日"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
BirthField.defaultProps = {
  defaultValue: '1940-01-01',
  dispatch: (e) => e,
};
BirthField.propTypes = {
  defaultValue: PropTypes.string,
  dispatch: PropTypes.func,
};


export default BirthField;
// <TextField
//   id="date"
//   label="ç”Ÿå¹´æœˆæ—¥"
//   type="date"
//   defaultValue="1940-01-01"
//   onChange={(e) => dispatch(e.target.value)}
//   fullWidth
// />
