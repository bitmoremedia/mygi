import React from 'react'
import { storiesOf } from '@kadira/storybook'

import globalStyles from '../../src/global-styles';
globalStyles();

import ButtonToggle from './ButtonToggle'
import ButtonToggleModal from './ButtonToggleModal'
import SearchUtility from './SearchUtility'

storiesOf('Toggle Display', module)
  .add('ButtonToggle', () => (
    <ButtonToggle />
  ))
  .add('ButtonToggleModal', () => (
    <ButtonToggleModal />
  ))

storiesOf('Utilities', module)
  .add('SearchUtility', () => (
    <SearchUtility />
  ))
