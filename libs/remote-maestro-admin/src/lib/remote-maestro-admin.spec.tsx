import { render } from '@testing-library/react';

import RemoteMaestroAdmin from './remote-maestro-admin';

describe('RemoteMaestroAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RemoteMaestroAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
