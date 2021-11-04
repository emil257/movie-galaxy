import { render, cleanup } from '@testing-library/react';
import { ConnectedRouter } from "connected-react-router";
import {store, history} from 'store'
import  {Provider} from 'react-redux'
import Navigation from '../Naviagtion'

afterEach(cleanup)

function renderWithReduxAndRouter(component) {
  return {
    ...render(<Provider store={store}><ConnectedRouter history={history}>{component}</ConnectedRouter></Provider>)
  }
}

describe('Check if components renders with redux', () => {
  it('Should render Navigation component', () => {
    const component = renderWithReduxAndRouter(<Navigation/>)
    expect(component).toBeDefined()
  })
})