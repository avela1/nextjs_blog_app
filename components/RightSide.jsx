import React from 'react'

import { MessagesCard } from './';

const RightSide = () => {
  return (
    <div className="w-1/4 h-80 md:flex md:flex-auto md:visible hidden">
      <MessagesCard />
    </div>
  );
}

export default RightSide
