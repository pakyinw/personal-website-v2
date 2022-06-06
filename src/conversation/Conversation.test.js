import Conversation from './Conversation.js'
import renderer from 'react-test-renderer';

describe ('Conversation', ()=>{
    const conversation = renderer.create(<Conversation />).toJSON();

    test('Conversation snapshot testing',()=>{
        expect(conversation).toMatchSnapshot();
    })
})