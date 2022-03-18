import React from 'react'

import { render, screen } from '../utils/test-utils'
import Home from './index'

describe('HomePage', () => {
  it('should render the heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Rick and Morty | React Query Nextjs Graphql!/i,
    })

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument()
  })
})
