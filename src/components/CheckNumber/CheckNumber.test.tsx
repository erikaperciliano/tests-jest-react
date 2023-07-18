import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { CheckNumber } from "."

describe('<CheckNumber/>', () => {
    test('renders a title', () => {
        render(<CheckNumber/>);

        const title = screen.getByText('Even or Odd component');

        expect(title).toBeInTheDocument;
    })

    test('renders an input', () => {
        render(<CheckNumber/>);

        const input = screen.getByPlaceholderText('Type a number');

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
})