import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as api from '../../../services/http-tasks';
import { List } from './list';

// Mock de un módulo
jest.mock('../../../services/http-tasks');

describe('first', () => {
    test('should first', () => {
        (api.getAllTasks as jest.Mock).mockResolvedValue([]);
        render(<List></List>);
    });
});
