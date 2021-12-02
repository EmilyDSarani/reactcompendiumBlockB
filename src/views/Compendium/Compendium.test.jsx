import {screen, render} from '@testing-library/react'
import Compendium from './Compendium'

//
it('render characters', () => {
    render(<Compendium />);
    const loading = screen.getByText(/Welcome to Hogwarts/);
    expect(loading).toBeInTheDocument()
})