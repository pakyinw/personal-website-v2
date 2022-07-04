import React, { useEffect, useState } from 'react';
import './Character.css';

function Character() {
  const [iconURL, setIconURL] = useState('');
  useEffect(() => {
    setIconURL('./img/icons/penguin-balloon.png');
  }, []);
  return (
    <div className="Character">
      <div className="Icon" style={{ backgroundImage: `url(${iconURL})` }} />
    </div>
  );
}

export default Character;
