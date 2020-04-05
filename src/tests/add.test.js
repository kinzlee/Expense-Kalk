const sum = (x, y) => (x + y);
const greeting = (name) => (`hello there ${name}`);

test('adding two numbers', () => {
    const solution = sum(4, 5);
    expect(solution).toBe(9);
});

test('this is the person you intend to greet', () => {
    const greeted = greeting('tunik');
    expect(greeted).toBe(`hello there tunik`);
})

