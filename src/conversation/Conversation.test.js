import renderer from 'react-test-renderer';
import Conversation from './Conversation.js';

describe('Conversation', () => {
  const conversation = renderer.create(<Conversation />).toJSON();

  test('Conversation snapshot testing', () => {
    expect(conversation).toMatchSnapshot();
  });
});
