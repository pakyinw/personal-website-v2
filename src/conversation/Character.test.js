import Character from './Character.js'
import renderer from 'react-test-renderer';

describe ('Character', ()=>{
    const character = renderer.create(<Character><div/></Character>).toJSON();

    test('Character snapshot testing',()=>{
        expect(character).toMatchSnapshot();
    })
})