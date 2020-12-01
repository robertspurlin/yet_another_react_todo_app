import { expect } from 'chai';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodos = [
            {
                text: '1', 
                isCompleted: false
            },
            {
                text: '2', 
                isCompleted: true
            },
        ];
        const expected = [{
            text: '2', 
            isCompleted: true
        }];

        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    });
});