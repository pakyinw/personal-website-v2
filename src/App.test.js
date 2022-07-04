import { fireEvent, render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router, Link } from 'react-router-dom';

describe('App', () => {
  test('router testing', () => {
    const history = createMemoryHistory({ initialEntries: ['/'] });
    const { getByText } = render(
      <Router location={history.location} navigator={history}>
        <Link to="/conversation">go</Link>
      </Router>,
    );
    expect(history.location.pathname).toBe('/');
    fireEvent.click(getByText('go'));
    expect(history.location.pathname).toBe('/conversation');
  });
});
