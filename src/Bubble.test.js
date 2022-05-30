import Bubble from './Bubble.js'
import renderer from 'react-test-renderer';

describe ('Bubble', ()=>{
    const bubble = renderer.create(<Bubble><div/></Bubble>).toJSON();

    test('Bubble snapshot testing',()=>{
        expect(bubble).toMatchSnapshot();
    })
})