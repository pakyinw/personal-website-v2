import Bubble from './Bubble.js'
import Beak from './Beak.js'
import Character from './Character.js'
import './Conversation.css'

const Conversation = () => {
  return (
    <div className="Conversation">
      <Bubble></Bubble>
      <Beak></Beak>
      <Character></Character>
    </div>
  );
}

export default Conversation;
