import App from './App.js'
import renderer from 'react-test-renderer';

describe ('App', ()=>{
    const app = renderer.create(<App />).toJSON();

    test('App snapshot testing',()=>{
        expect(app).toMatchSnapshot();
    })
})