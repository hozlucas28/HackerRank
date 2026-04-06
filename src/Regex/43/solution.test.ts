import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 43: Building a smart IDE - Programming language detection", () => {
	test("Test 01", () => {
		const received = fn(`
    import java.io.*;

    public class SquareNum {

       public static void main(String args[]) throws IOException
       {
          System.out.println("This is a small Java Program!");
       }
    }`)

		const expected = "Java"

		expect(received).toBe(expected)
	})
})
