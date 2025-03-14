import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Butters from '../Butters';
import '@testing-library/jest-dom'

test('renders  component',  () => {
    render(<Butters />);
})

test('button displays butters onclick', () => {
    render(<Butters />)

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByTestId('list')).toBeInTheDocument();
})