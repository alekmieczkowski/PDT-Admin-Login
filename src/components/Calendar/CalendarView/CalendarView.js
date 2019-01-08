import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import classes from './CalendarView.scss'
import calStyle from './CalendarStyle.css';
import "react-big-calendar/lib/css/react-big-calendar.css";

const calendarView = (props) => {
    
    console.log(calStyle);

    const localizer = BigCalendar.momentLocalizer(moment) //setup moment localizer for dates
    //import default views
    let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

    return (
        <div className={classes.container}>
            <BigCalendar
                localizer={localizer}
                events={[]}
                defaultView="month"
                defaultDate={new Date()}
                styles={calStyle}
            />
        </div>
    );
}

export default calendarView;