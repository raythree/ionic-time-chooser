import React from 'react';

import TimeChooser from './TimeChooser';

function TimeDemo() {
  let [startHours, setStartHours] = React.useState(8);
  let [startMinutes, setStartMinutes] = React.useState(0);

  let [endHours, setEndHours] = React.useState(10);
  let [endMinutes, setEndMinutes] = React.useState(0);

  function onChangeStart(h, m, ix) {
    setStartHours(h);
    setStartMinutes(m);
    setStartHours(h);
    setStartMinutes(m);
  }
  function onChangeEnd(h, m, ix) {
    setEndHours(h);
    setEndMinutes(m);
    setEndHours(h);
    setEndMinutes(m);
  }

  let ix = 1;
  return (
    <div>
      <TimeChooser
        name={`t${ix}-start`}
        hours={startHours}
        minutes={startMinutes}
        onChange={(h, m) => onChangeStart(h, m, ix)}
        hide={false}
      />
      <TimeChooser
        name={`t${ix}-end`}
        hours={endHours}
        minutes={endMinutes}
        onChange={(h, m) => onChangeEnd(h, m, ix)}
        hide={false}
      />
    </div>
  );
}


export default TimeDemo;