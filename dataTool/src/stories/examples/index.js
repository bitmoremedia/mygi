import React from 'react'
import { storiesOf } from '@kadira/storybook'

import globalStyles from '../../global-styles';
globalStyles();

import ButtonToggle from './ButtonToggle'
import ButtonToggleModal from './ButtonToggleModal'

storiesOf('Toggle Display', module)
  .add('ButtonToggle', () => (
    <ButtonToggle />
  ))
  .add('ButtonToggleModal', () => (
    <ButtonToggleModal />
  ))
