import React from 'react';
import {
  IonDatetime,
  IonButton,
  IonPopover,
} from '@ionic/react';

function getOffset() {
  const now = new Date();
  return (now.getTimezoneOffset() / 60);
}

function TimeChooser({ name, hours, minutes, onChange, hide }) {
  let [currentValue, setCurrentValue] = React.useState(toUTC(hours || 0, minutes || 0));
  let [initialValue, setInitialValue] = React.useState(toUTC(hours || 0, minutes || 0));

  const dtime = React.useRef();
  const popover = React.useRef();

  function toUTC(h = 0, m = 0) {
    let fd;
    let d = new Date();
    d.setHours(h - getOffset());
    d.setMinutes(m);
    d.setSeconds(0);
    d.setMilliseconds(0)
    fd = d.toISOString();
    //console.log(`Time set from ${h}:${m} to ${fd}`)
    return fd;
  }

  React.useEffect(() => {
    console.log(`Effect: ==> hours ${hours}:${minutes}`);
    const current = toUTC(hours, minutes);
    setCurrentValue(current);
    setInitialValue(current);
    console.log(`TimerChooser: currentValue ${current} initialized from ${hours}:${minutes}`);
  }, [hours, minutes]);

  function onChangeTime(e) {
    setCurrentValue(e.target.value);
  }

  function pad(d) {
    let ds = '' + d;
    if (ds.length < 2) {
      ds = '0' + ds;
    }
    return ds;
  }

  function onDismiss() {
    setCurrentValue(initialValue);
  }

  function formatLabel(h = 0, m = 0) {
    if (!h) h = 0;
    if (!m) m = 0;
    let ap = 'AM';
    if (h > 12) {
      ap = 'PM';
      h = h - 12;
    }
    else if (h === 0) {
      h = 12;
    }
    return `${pad(h)}:${pad(m)} ${ap}`;
  }

  function onOk() {
    const t = new Date(currentValue);
    let h = t.getHours();
    let m = t.getMinutes();
    setInitialValue(currentValue);
    onChange(h, m);
    popover.current.dismiss();
  }
  function onCancel() {
    setCurrentValue(initialValue);
    setTimeout(() => popover.current.dismiss());
  }

  if (hide) {
    popover.current.dismiss();
  }

  return (
    <>
      <IonButton size="small" id={`timechooser-${name}`}>{formatLabel(hours, minutes)}</IonButton>
      <IonPopover trigger={`timechooser-${name}`} size="full" onDidDismiss={onDismiss} ref={popover}>
        <IonDatetime
          ref={dtime}
          presentation="time"
          trigger="date"
          value={currentValue}
          onIonChange={(e) => onChangeTime(e)}
        >
        </IonDatetime>
        <div>
          <IonButton onClick={onOk} color="primary">OK</IonButton>
          <IonButton onClick={onCancel} color="normal">Cancel</IonButton>
        </div>
      </IonPopover>
    </>
  );
}

export default TimeChooser;