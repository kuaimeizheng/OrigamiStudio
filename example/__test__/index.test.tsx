import { mount } from 'enzyme';
import React from 'react';
import mountTest from '../../../../tests/shared/mountTest';
import Button from '../Button';

describe('Button', () => {
  mountTest(Button);
  mountTest(() => <Button>button</Button>);

  it('renders correctly', () => {
    expect(mount(<Button>Foo</Button>).render()).toMatchSnapshot();
  });
});
