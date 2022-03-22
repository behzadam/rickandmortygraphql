import React from 'react'

import { render } from '../utils/test-utils'
import Home from './index'

describe('HomePage', () => {
  it('should render the heading', () => {
    const { asFragment } = render(<Home />)
    const firstRender = asFragment()
    expect(firstRender).toMatchSnapshot(asFragment())
  })
})
