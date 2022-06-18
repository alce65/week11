import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter as Router } from 'react-router-dom';
import { Add } from './add';

// gherkins - GWT

describe('Given the component Menu', () => {
    describe('When the component is rendered', () => {
        test('Then it should have ....', () => {
            const handleAddMock = jest.fn();
            render(
                <Router>
                    <Add handleAdd={handleAddMock}></Add>
                </Router>
            );
            const inputs = screen.getAllByRole('textbox');
            expect(inputs[0]).toBeInTheDocument();
            expect(inputs[1]).toBeInTheDocument();
            userEvent.type(inputs[0], 'Tarea');
            userEvent.type(inputs[1], 'Pepe');
            const button = screen.getByRole('button');
            expect(button).toBeInTheDocument();
            userEvent.click(button);
            expect(handleAddMock).toHaveBeenCalledWith({
                title: 'Tarea',
                responsible: 'Pepe',
                isCompleted: false,
            });
        });
    });
});
