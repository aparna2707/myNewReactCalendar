import React from 'react';

function CalendarHead ({ onNext, onBack, dateDisplay })  {
  return(
    <div id="header">
      
      <div>
        <button onClick={onBack} id="backButton">&lt;</button>
        </div>
        <div id="monthDisplay">{dateDisplay}</div>
        <div>
        <button onClick={onNext} id="nextButton">&gt;</button>
      </div>
    </div>
  );
};
export default CalendarHead;