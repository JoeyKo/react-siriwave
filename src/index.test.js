import React from 'react'
import { shallow } from 'enzyme'
import Siriwave from './index'

jest.useFakeTimers()

describe('Siriwave', () => {
  it('should render', () => {
    expect(() => {
      shallow(<Siriwave />)
    })
  })
})