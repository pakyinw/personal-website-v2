import renderer from 'react-test-renderer';
import Beak from './Beak.js';

describe('Beak', () => {
  const beak = renderer.create(<Beak><div /></Beak>).toJSON();

  test('Beak snapshot testing', () => {
    expect(beak).toMatchSnapshot();
  });
});
