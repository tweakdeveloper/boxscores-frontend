import * as React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';

import App from './App';

describe('<App>', () => {
  it('renders the app name', () => {
    const { getByText } = render(<App />);
    const appNameElement = getByText(/boxscores/i);
    expect(document.body.contains(appNameElement));
  });
});
