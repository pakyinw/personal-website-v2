import renderer from 'react-test-renderer';
import Dialog from './Dialog';

describe('Dialog', () => {
  const dialog = renderer.create(<Dialog />).toJSON();

  test('Dialog snapshot testing', () => {
    expect(dialog).toMatchSnapshot();
  });
});
