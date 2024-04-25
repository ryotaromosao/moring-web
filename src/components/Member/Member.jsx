import React from 'react';
import './Member.css';

const Member = ({picture1,picture2,picture3,picture4,name1,name2,name3,name4}) => {
  return (
    <div>
      <ul className="member">
        <li>
          <a href=""><img src={picture1} alt={name1} /></a>
          <p>{name1}</p>
        </li>
        <li>
          <a href=""><img src={picture2} alt={name2} /></a>
          <p>{name2}</p>
        </li>
        <li>
          <a href=""><img src={picture3} alt={name3} /></a>
          <p>{name3}</p>
        </li>
        <li>
          <a href=""><img src={picture4} alt={name4} /></a>
          <p>{name4}</p>
        </li>
      </ul>
    </div>
  );
};

export default Member;
