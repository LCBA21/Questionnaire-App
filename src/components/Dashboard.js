import React from 'react';

const Dashboard = ({ agreenum, disagreenum, neutralnum }) => {
  return (
    <div>
      <div className='div-stats-conatiner'>
        <div className='stats'>{agreenum} Agree</div>
        <div className='stats'>{disagreenum} Disagree</div>
        <div className='stats'>{neutralnum} Neutral</div>
      </div>
    </div>
  );
};

export default Dashboard;
