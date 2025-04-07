import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/components/Counter';

test('renders counter with initial value 0', () => {
    // Рендерим компонент Counter
    render(<Counter />);

    // Находим элемент с данным id и проверяем, что он отображает правильное начальное значение
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('Count: 0');
});

test('increments count when button is clicked', () => {
    render(<Counter />);

    // Находим кнопку и кликаем по ней
    const button = screen.getByRole('button', { name: /increase/i });
    fireEvent.click(button);

    // Проверяем, что значение счётчика увеличилось
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('Count: 1');
});

test('increments count multiple times when button is clicked multiple times', () => {
    render(<Counter />);

    const button = screen.getByRole('button', { name: /increase/i });

    // Кликаем 3 раза
    fireEvent.click(button)
    fireEvent.click(button)
    fireEvent.click(button)

    // Проверяем, что значение счётчика стало 3
    const countElement = screen.getByTestId('count')
    expect(countElement).toHaveTextContent('Count: 3')
})