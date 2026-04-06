import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 34: Building a smart IDE - Identifying comments", () => {
	test("Test 01", () => {
		const received = fn(`// my  program in C++

#include <iostream>
/** playing around in
a new programming language **/
using namespace std;

int main ()
{
  cout << "Hello World";
  cout << "I'm a C++ program"; //use cout
  return 0;
}`)

		const expected = `// my  program in C++
/** playing around in
a new programming language **/
//use cout`

		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received =
			fn(` /*This is a program to calculate area of a circle after getting the radius as input from the user*/
#include<stdio.h>
int main()
{
   double radius,area;//variables for storing radius and area
   printf("Enter the radius of the circle whose area is to be calculated\n");
   scanf("%lf",&radius);//entering the value for radius of the circle as float data type
   area=(22.0/7.0)*pow(radius,2);//Mathematical function pow is used to calculate square of radius
   printf("The area of the circle is %lf",area);//displaying the results
   getch();
}
/*A test run for the program was carried out and following output was observed
If 50 is the radius of the circle whose area is to be calculated
The area of the circle is 7857.1429*/`)

		const expected = `/*This is a program to calculate area of a circle after getting the radius as input from the user*/
//variables for storing radius and area
//entering the value for radius of the circle as float data type
//Mathematical function pow is used to calculate square of radius
//displaying the results
/*A test run for the program was carried out and following output was observed
If 50 is the radius of the circle whose area is to be calculated
The area of the circle is 7857.1429*/`

		expect(received).toBe(expected)
	})
})
