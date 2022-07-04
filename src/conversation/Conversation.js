import React from 'react';
import Bubble from './Bubble';
import Beak from './Beak';
import Character from './Character';
import Dialog from './Dialog';
import './Conversation.css';

function Conversation() {
  return (
    <div className="Conversation">
      <Bubble>
        <Dialog text={['Hi! Have you ever been to Bracknell?']} />
      </Bubble>
      <Beak />
      <Character />
    </div>
  );
}

export default Conversation;
