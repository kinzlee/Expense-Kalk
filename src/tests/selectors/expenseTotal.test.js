import expenseTotal from '../../selectors/expenseTotal';
import expenses from '../fixture/expenses';

test('should run if their are 0 or no expenses', () => {
    const response = expenseTotal([]);
    expect(response).toBe(0);
});

test('should run if it correctly add up a single expense', () => {
    const response = expenseTotal([expenses[1]]);
    expect(response).toBe(45000);
});

test('should run if it add up multiple expexnses', () => {
    const response = expenseTotal(expenses);
    expect(response).toBe(440000); 
}); 