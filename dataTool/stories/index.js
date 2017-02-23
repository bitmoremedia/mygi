import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import globalStyles from '../src/global-styles'

import Button from '../src/components/common/Button'
import Modal from '../src/components/common/Modal'
import Table from '../src/components/common/Table'
import ToolTip from '../src/components/common/ToolTip'
import Divider from '../src/components/common/Divider'

globalStyles()

// ******************
// ***** BUTTON *****
// ******************

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

// *****************
// ***** MODAL *****
// *****************

storiesOf('common.Modal', module)
  .add('hidden', () => (
    <Modal visible={false} onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
  .add('displayed', () => (
    <Modal visible onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
  .add('displayed - custom dimensions %', () => (
    <Modal visible width="90" height="90" measure="%" onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))
  .add('displayed - custom dimensions px', () => (
    <Modal visible width="200" height="400" measure="px" onClose={action('onClose event triggered')}>
      Modal Content
    </Modal>
  ))

// *****************
// ***** TABLE *****
// *****************

const tableColumns = [
  { key: 'first-name', label: 'First Name' },
  { key: 'last-name', label: 'Last Name' },
  { key: 'age', label: 'Age' },
];
const tableData = [
  [
    { key: 'abcd-1', value: 'Bill' },
    { key: 'abcd-2', value: 'Oddy' },
    { key: 'abcd-3', value: 67 },
  ],
  [
    { key: 'abcde-1', value: 'John' },
    { key: 'abcde-2', value: 'Smith' },
    { key: 'abcde-3', value: 23 },
  ],
  [
    { key: 'abcdef-1', value: 'Sarah' },
    { key: 'abcdef-2', value: 'Brown' },
    { key: 'abcdef-3', value: 34 },
  ],
];

storiesOf('common.Table', module)
  .add('default display', () => (
    <Table columns={tableColumns} data={tableData} />
  ))

// *******************
// ***** TOOLTIP *****
// *******************

const ToolTipStoryWrapper = ({ children }) =>
  <div style={{ marginLeft: 50, marginTop: 50 }}>
    {children}
  </div>

storiesOf('common.ToolTip', module)
  .add('default display', () => (
    <ToolTipStoryWrapper>
      <ToolTip text="I am the tooltip, we are the toolip">
        Hover over me to see my tooltip
      </ToolTip>
    </ToolTipStoryWrapper>
  ))
  .add('position: down', () => (
    <ToolTipStoryWrapper>
      <ToolTip
        text="I am the tooltip, we are the toolip"
        position="down"
      >
        Hover over me to see my tooltip
      </ToolTip>
    </ToolTipStoryWrapper>
  ))
  .add('position: down & length: small', () => (
    <ToolTipStoryWrapper>
      <ToolTip
        text="I am the tooltip, we are the toolip"
        position="down"
        length="small"
      >
        Hover over me to see my tooltip
      </ToolTip>
    </ToolTipStoryWrapper>
  ))
  .add('position: down & length: medium', () => (
    <ToolTipStoryWrapper>
      <ToolTip
        text="I am the tooltip, we are the toolip"
        position="down"
        length="medium"
      >
        Hover over me to see my tooltip
      </ToolTip>
    </ToolTipStoryWrapper>
  ))
  .add('position: down & length: large', () => (
    <ToolTipStoryWrapper>
      <ToolTip
        text="I am the tooltip, we are the toolip"
        position="down"
        length="large"
      >
        Hover over me to see my tooltip
      </ToolTip>
    </ToolTipStoryWrapper>
  ))
  .add('position: down & length: fit', () => (
    <ToolTipStoryWrapper>
      <ToolTip
        text="I am the tooltip, we are the toolip"
        position="down"
        length="fit"
      >
        Hover over me to see my tooltip
      </ToolTip>
    </ToolTipStoryWrapper>
  ))

// ******************
// ***** DIVIDER *****
// ******************

storiesOf('common.Divider', module)
  .add('default display', () => (
    <Divider />
  ))
