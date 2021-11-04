import { render, cleanup, screen } from '@testing-library/react';
import { ConnectedRouter } from "connected-react-router";
import {store, history} from 'store'
import  {Provider} from 'react-redux'
import Watchlater from '../Watchlater'

afterEach(cleanup)

function renderWithReduxAndRouter(component) {
  return {
    ...render(<Provider store={store}><ConnectedRouter history={history}>{component}</ConnectedRouter></Provider>)
  }
}

describe('Check if Watchlater renders with redux', () => {
  it('Should render Watchlater component', () => {
    const component = renderWithReduxAndRouter(<Watchlater/>)
    expect(component).toBeDefined()
  })
})