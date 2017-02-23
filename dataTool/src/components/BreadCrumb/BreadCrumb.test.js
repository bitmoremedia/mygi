import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'

import BreadCrumb from './component'
import { List, ListItem } from './styled-components'

const dataSources = {
  havard: {
    title: 'Havard',
  },
  mendosa: {
    title: 'Mendosa',
  },
}

test('component renders without error', () => {
  const wrapper = shallow(
    <BreadCrumb match={{ url: '/' }} dataSources={dataSources} />,
  )
  expect(wrapper.exists()).toBe(true)
})

test('root link "Food List" is plain text when breadcrumb is at root', () => {
  const wrapper = shallow(
    <BreadCrumb match={{ url: '/' }} dataSources={dataSources} />,
  )
  expect(wrapper.find(List).find(ListItem)).toHaveLength(1)
  const foodListBreadCrumb = wrapper.find(List).find(ListItem).first().children()
  expect(foodListBreadCrumb.type()).toEqual('span')
  expect(foodListBreadCrumb.text()).toEqual('Food List')
})

test('root link "Food List" is a link when breadcrumb is displaying a data source', () => {
  const wrapper = shallow(
    <BreadCrumb match={{ url: '/source/havard' }} dataSources={dataSources} />,
  )
  expect(wrapper.find(List).find(ListItem)).toHaveLength(2)
  const foodListBreadCrumb = wrapper.find(List).find(ListItem).first().children()
  expect(foodListBreadCrumb.type()).toEqual(Link)
  expect(foodListBreadCrumb.children().text()).toEqual('Food List')
})

test('component renders the data source breadcrumb', () => {
  const wrapper = shallow(
    <BreadCrumb match={{ url: '/source/havard' }} dataSources={dataSources} />,
  )
  expect(wrapper.find(List).find(ListItem)).toHaveLength(2)
  const dataSourceBreadCrumb = wrapper.find(List).find(ListItem).last().children()
  expect(dataSourceBreadCrumb.type()).toEqual('span')
  expect(dataSourceBreadCrumb.text()).toEqual('> Havard')
})
