import renderer from 'react-test-renderer';
import Character from './Character.js';

describe('Character', () => {
  const character = renderer.create(<Character><div /></Character>).toJSON();

  test('Character snapshot testing', () => {
    expect(character).toMatchSnapshot();
  });
});
