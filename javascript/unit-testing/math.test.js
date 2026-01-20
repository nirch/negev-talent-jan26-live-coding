const { add, multiply } = require('./math');


// Test Suite (describe)
describe('Math functions', () => {

  describe('add function', () => {
    // Basic functionality
    it('should add two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
    });

    // Edge case: negative numbers
    it('should add two negative numbers correctly', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    it('should add a positive and negative number correctly', () => {
      expect(add(10, -4)).toBe(6);
    });

    it('should add a negative and positive number correctly', () => {
      expect(add(-7, 12)).toBe(5);
    });

    // Edge case: zero
    it('should add zero to a positive number', () => {
      expect(add(5, 0)).toBe(5);
    });

    it('should add zero to a negative number', () => {
      expect(add(-5, 0)).toBe(-5);
    });

    it('should add zero to zero', () => {
      expect(add(0, 0)).toBe(0);
    });

    // Edge case: decimal numbers
    it('should add decimal numbers correctly', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2);
    });

    it('should add negative decimal numbers correctly', () => {
      expect(add(-1.5, -2.3)).toBeCloseTo(-3.8);
    });

    // Edge case: large numbers
    it('should add large numbers correctly', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('multiply function', () => {
    // Basic functionality
    it('should multiply two positive numbers correctly', () => {
      expect(multiply(4, 5)).toBe(20);
    });

    // Edge case: negative numbers
    it('should multiply two negative numbers correctly', () => {
      expect(multiply(-3, -4)).toBe(12);
    });

    it('should multiply a positive and negative number correctly', () => {
      expect(multiply(6, -2)).toBe(-12);
    });

    it('should multiply a negative and positive number correctly', () => {
      expect(multiply(-5, 3)).toBe(-15);
    });

    // Edge case: zero
    it('should multiply any number by zero to get zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should multiply zero by any number to get zero', () => {
      expect(multiply(0, 7)).toBe(0);
    });

    it('should multiply zero by zero', () => {
      expect(multiply(0, 0)).toBe(0);
    });

    it('should multiply negative number by zero', () => {
      expect(multiply(-5, 0)).toEqual(-0);
    });

    // Edge case: one
    it('should multiply by one to get the same number', () => {
      expect(multiply(8, 1)).toBe(8);
    });

    it('should multiply one by a number to get the same number', () => {
      expect(multiply(1, 9)).toBe(9);
    });

    // Edge case: decimal numbers
    it('should multiply decimal numbers correctly', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should multiply two decimal numbers correctly', () => {
      expect(multiply(1.5, 2.5)).toBeCloseTo(3.75);
    });

    it('should multiply negative decimal numbers correctly', () => {
      expect(multiply(-2.5, 3)).toBe(-7.5);
    });

    // Edge case: large numbers
    it('should multiply large numbers correctly', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });
});