import { render, cleanup, screen } from '@testing-library/react';
import { ConnectedRouter } from "connected-react-router";
import {store, history} from 'store'
import  {Provider} from 'react-redux'
import HomePage from '../HomePage'

afterEach(cleanup)

function renderWithReduxAndRouter(component) {
  return {
    ...render(<Provider store={store}><ConnectedRouter history={history}>{component}</ConnectedRouter></Provider>)
  }
}

describe('Check if HomePage renders with redux', () => {
  it('Should render HomePage component', () => {
    const component = renderWithReduxAndRouter(<HomePage/>)
    expect(component).toBeDefined()
  })
})