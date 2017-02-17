import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';

import Button from '../components/common/Button';

const testing = ()=>{
  alert('testing!!');
};

storiesOf('common: Button', module)
  .add('default display', () => (
    <Button>
      A Button
    </Button>
  ))
  .add('danger display', () => (
    <Button danger>
      A Dangerous Button
    </Button>
  ))
  .add('with onClick', () => (
    <Button onClick={action('onClick')}>
      Click Me!
    </Button>
  ))
  .add('custom onClick', () => (
    <Button onClick={testing}>
      Click Me!!!!!
    </Button>
  ));


/*
  import Table from '../components/common/Table';

  storiesOf('common: Button', module)
    .add('default display', () => (
      <Button>
        A Button
      </Button>
    ))
    .add('danger display', () => (
      <Button danger>
        A Dangerous Button
      </Button>
    ))
    .add('with onClick', () => (
      <Button onClick={action('onClick')}>
        Click Me!
      </Button>
    ));
*/


/*
import Loading from '../components/common/Loading';
import RangePicker from '../components/common/RangePicker';

storiesOf('common: Loading', module)
  .add('default display', () => (
    <Loading />
  ));

storiesOf('common: RangePicker', module)
  .add('range of strings (A,B,C)', () => (
      <RangePicker
        setValue={action('set value called')}
        values={['A', 'B', 'C']}
        value={'A'}
      />
  ))
  .add('range of numbers (1-10)', () => (
      <RangePicker
        setValue={action('set value called')}
        values={[1,2,3,4,5,6,7,8,9,10]}
        value={1}
      />
  ));
*/
