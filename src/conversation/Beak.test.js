import Beak from './Beak.js'
import renderer from 'react-test-renderer';

describe ('Beak', ()=>{
    const beak = renderer.create(<Beak><div/></Beak>).toJSON();

    test('Beak snapshot testing',()=>{
        expect(beak).toMatchSnapshot();
    })
})