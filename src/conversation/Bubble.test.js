import renderer from 'react-test-renderer';
import Bubble from './Bubble.js';

describe('Bubble', () => {
  const bubble = renderer.create(<Bubble><div /></Bubble>).toJSON();

  test('Bubble snapshot testing', () => {
    expect(bubble).toMatchSnapshot();
  });
});
