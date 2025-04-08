// import { render, screen, fireEvent } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import App from './App'


// describe('TEST APP', () => {
//   test('renders learn react link', () => {
//     render(<App />);
//     const helloWorldElement = screen.getByText(/hello world!/i);
//     const buttonElement = screen.getByRole('button')
//     const inputElement = screen.getByPlaceholderText('Input value')
//     expect(helloWorldElement).toBeInTheDocument()
//     expect(buttonElement).toBeInTheDocument()
//     // expect(inputElement).toMatchSnapshot()
//     // screen.debug()
//   })

//   test('find', async () => {
//     render(<App />);
//     // const helloWorldElement = screen.getByText(/hello world!/i);
//     // const buttonElement = screen.getByRole('button')
//     // const inputElement = screen.getByPlaceholderText('Input value')
//     // expect(helloWorldElement).toBeInTheDocument()
//     // expect(buttonElement).toBeInTheDocument()
//     // expect(inputElement).toMatchSnapshot()
//     // screen.debug()
//     const helloWorldElement = await screen.findByText(/hello world!/i);
//     expect(helloWorldElement).toBeInTheDocument()
//     expect(helloWorldElement).toHaveStyle({ color: 'red' })
//   })

//   test('test click event', async () => {
//     render(<App />);
//     const toggleButtonElement = screen.queryByTestId('toggle-button')
//     expect(screen.queryByTestId('toggle-element')).toBeNull()
//     fireEvent.click(toggleButtonElement)
//     expect(screen.queryByTestId('toggle-element')).toBeInTheDocument()
//     fireEvent.click(toggleButtonElement)
//     expect(screen.queryByTestId('toggle-element')).toBeNull()
//   })

//   test('value button', () => {
//     render(<App />);
//     const valueInputElement = screen.queryByTestId('value-input')
//     expect(screen.queryByTestId('value-element')).toContainHTML('')
//     // fireEvent.input(valueInputElement, {
//     //   target: { value: '123' }
//     // })
//     userEvent.type(valueInputElement, '123')
//     expect(screen.queryByTestId('value-element')).toContainHTML('123')
//   })
// })

import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('TEST APP', () => {
  test('router test', () => {
    render(<App />)
    const mainLink = screen.getByTestId('main-link')
    const aboutLink = screen.getByTestId('about-link')
    userEvent.click(aboutLink)
    expect(screen.getByTestId('about-page')).toBeInTheDocument()
    userEvent.click(mainLink)
    expect(screen.getByTestId('main-page')).toBeInTheDocument()
  })
})