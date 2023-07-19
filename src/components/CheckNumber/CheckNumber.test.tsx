import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { CheckNumber } from "."
import userEvent from "@testing-library/user-event";

const getInput = () =>{
    return screen.getByPlaceholderText('Type a number');
}

describe('<CheckNumber/>', () => {
    test('renders a title', () => {
        render(<CheckNumber/>);

        const title = screen.getByText('Even or Odd component');

        expect(title).toBeInTheDocument;
    })

    test('renders an input', () => {
        render(<CheckNumber/>);

        const input = getInput();

        expect(input).toBeInTheDocument;
    })

    describe('When there is no erro', () => {
        test('renders the error message section empty', () => {
            render(<CheckNumber/>);

            const alert = screen.getByRole('alert')

            expect(alert).toBeInTheDocument;
            expect(alert).toBeEmptyDOMElement;
        })
    })

    describe('When the user  types an odd number', () =>{
        test('renders Even on the screen', () =>{
            render(<CheckNumber/>);

            const input = getInput();

            userEvent.clear(input);
            userEvent.type(input, '1');

            const section = screen.getByRole('presentation');

            expect(section.textContent).toBe('Even')
        })
    })

    describe('When the user  types an even number', () =>{
        test('renders Odd on the screen', () =>{
            render(<CheckNumber/>);

            const input = getInput();

            userEvent.clear(input);
            userEvent.type(input, '12');

            const section = screen.getByRole('presentation');

            expect(section.textContent).toBe('Odd')
        })
    })

    describe('When the user pypes a not number value', () => {
        test('renders the error message on the screen', () =>{
            render(<CheckNumber/>);

            const input = getInput();

            userEvent.clear(input);
            userEvent.type(input, 'potato');

            const section = screen.getByRole('alert');

            expect(section.textContent).toBe('Type a number please!')
        })
    })
})