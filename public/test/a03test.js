QUnit.test('Testing the new add function with four sets of inputs', function (assert) {
    assert.equal(percalculator(50,100), 50, "50 is 50% of 100");
    assert.equal(percalculator(60,100), 60, "60 is 60% of 100 ");
    assert.equal(percalculator(-20,100), -20, "-20 is -20% of 100");
    assert.equal(percalculator(1000,200), 500, "1000 is 500% of 200");
    // assert.equal(add(-3, -3), -8, "works with three negative integers");
    // assert.equal(add(2.5, 2.5), 10, "works with four positive real numbers");
    // assert.equal(add(10, -10), 0, "works with a positive and a negative");
});
