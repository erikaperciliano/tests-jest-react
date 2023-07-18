import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { CheckNumber } from "."

describe('<CheckNumber/>', () => {
    test('renders a title', () => {
        render(<CheckNumber/>);

        const title = screen.getByText('Even or Odd component');

        expect(title).toBeInTheDocument;
    })
})