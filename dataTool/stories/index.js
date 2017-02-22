import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import globalStyles from '../src/global-styles';
globalStyles();

import Button from '../src/components/common/Button'
import Modal from '../src/components/common/Modal'

storiesOf('common.Button', module)
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

storiesOf('common.Modal', module)
  .add('hidden', () => (
    <Modal visible={false} onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
  .add('displayed', () => (
    <Modal visible={true} onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
  .add('displayed - custom dimensions %', () => (
    <Modal visible={true} width="90" height="90" measure="%" onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
  .add('displayed - custom dimensions px', () => (
    <Modal visible={true} width="200" height="400" measure="px" onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
