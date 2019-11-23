import React from 'react';
import LinkDefault from '../Link';
import { render } from '@testing-library/react';

describe('<Link />', () => {
  it('should throw error', () => {
    const a = render(<LinkDefault to="bla" />);
    console.log('test>>>', a);
    expect(a).toBeCalled();
  });
});
