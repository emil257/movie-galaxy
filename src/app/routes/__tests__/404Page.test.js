import { render, cleanup, screen } from '@testing-library/react';
import { ConnectedRouter } from "connected-react-router";
import {store, history} from 'store'
import  {Provider} from 'react-redux'
import PageNotFound from '../404Page'

afterEach(cleanup)

function renderWithReduxAndRouter(component) {
  return {
    ...render(<Provider store={store}><ConnectedRouter history={history}>{component}</ConnectedRouter></Provider>)
  }
}

describe('Check if PageNotFound renders with redux', () => {
  it('Should render PageNotFound component', () => {
    const component = renderWithReduxAndRouter(<PageNotFound/>)
    expect(component).toBeDefined()
  })
  it('Should have 404 message', async () => {
    renderWithReduxAndRouter(<PageNotFound/>)
    const message = await screen.findByText('404 not found...')
    expect(message).toBeDefined()
  })
})