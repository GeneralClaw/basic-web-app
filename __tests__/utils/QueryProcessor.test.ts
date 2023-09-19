import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
        ));
    }); 

    test('should return andrewid', () => {
        const query = "andrewid";
        const response: string = QueryProcessor(query);
        expect(response).toBe("My Andrew ID is dballuff");
    });

    test('should return name', () => {
        const query = "name";
        const response: string = QueryProcessor(query);
        expect(response).toBe("My name is General_Claw");
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should find max of numbers', () => {
        expect(QueryProcessor("Which of the following numbers is the largest: 1, 2, 4?")).toEqual("4");
        expect(QueryProcessor("Which of the following numbers is the largest: 4, 5, 6?")).toEqual("6");
    });
    // What is 78 multiplied by 83?
    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 78 multiplied by 83?")).toEqual("6474");
        expect(QueryProcessor("What is 2 multiplied by 3?")).toEqual("6");
    });
    //Which of the following numbers is both a square and a cube: 677, 624, 64, 324, 512, 3678, 362?
    test('should find square and cube', () => {
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 677, 624, 64, 324, 512, 3678, 362?")).toEqual("64");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 677, 624, 324, 512, 3678, 362?")).toEqual("");
        expect(QueryProcessor("Which of the following numbers is both a square and a cube: 4881, 4560, 27, 4361, 3785, 2601, 64?")).toEqual("64");
    });
    // Which of the following numbers are primes: 88, 23, 96, 10, 12?
    test('should find primes', () => {
        expect(QueryProcessor("Which of the following numbers are primes: 88, 23, 96, 10, 12?")).toEqual("23");
        expect(QueryProcessor("Which of the following numbers are primes: 88, 96, 10, 12?")).toEqual("");
    });
    // What is 31 minus 19?
    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 31 minus 19?")).toEqual("12");
        expect(QueryProcessor("What is 31 minus 19?")).toEqual("12");
    });
    // 	What is 85 to the power of 15?
    test('should find power of numbers', () => {
        expect(QueryProcessor("What is 2 to the power of 3?")).toEqual("8");
    });
});
