import React from 'react';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const CardOfSkills = ({ name, color,Icon }) => {


  return (
    <div
    style={{backgroundColor:color}}
      className={`shadow-xl hover:bg-orange-200 hover:text-black hover:scale-110 duration-300 border-2 px-6 py-4 rounded text-xl font-bold max-w-fit flex justify-center`}
    >
     {Icon && <Icon sx = {{fontSize : 30}} />}{name}
    </div>
  );
}

export default CardOfSkills;
