import { describe, expect, test } from 'vitest';
import { formValidator } from './validator';

describe('Form validation', () => {
    test('should return an error if first name is missing', () => {
        const errors = formValidator('', 'Doe', 30);
        expect(errors).toContain('First name is required');
    });

    test('should return an error if last name is missing', () => {
        const errors = formValidator('John', '', 30);
        expect(errors).toContain('Last name is required');
    });

    test('should return an error if age is negative', () => {
        const errors = formValidator('John', 'Doe', -1);
        expect(errors).toContain('Age must be a positive number');
    });

    test('should return empty array if there isnt any errors', () => {
        const errors = formValidator('John', 'Doe', 30);
        expect(errors).toEqual([]);
        expect(errors.length).toBe(0);
    });

    test('should return an error if first name or lastname are shorter than 2', () => {
        const errors = formValidator('J', 'D', 30);
        expect(errors).toContain('First name and last name must have at list one sign');
    });

    test('should return an error if age is not a number', () => {
        const errors = formValidator('Jon', 'Doe', NaN);
        expect(errors).toContain('Age must be a number');
    })
});