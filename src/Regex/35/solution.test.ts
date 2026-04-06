import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 35: Detecting valid latitude and longitude pairs", () => {
	test("Test 01", () => {
		const received = fn([
			"(75, 180)",
			"(+90.0, -147.45)",
			"(77.11112223331, 149.99999999)",
			"(+90, +180)",
			"(90, 180)",
			"(-90.00000, -180.0000)",
			"(75, 280)",
			"(+190.0, -147.45)",
			"(77.11112223331, 249.99999999)",
			"(+90, +180.2)",
			"(90., 180.)",
			"(-090.00000, -180.0000)"
		])

		const expected = [
			"Valid",
			"Valid",
			"Valid",
			"Valid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid"
		]

		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn([
			"(-127, -48)",
			"(-127.560528, -48.560528)",
			"(-97, -282)",
			"(-97.354318, -282.354318)",
			"(-66, -43)",
			"(-66.435670, -43.435670)",
			"(-146, -101)",
			"(-146.725709, -101.725709)",
			"(-14, -113)",
			"(-14.19976, -113.19976)"
		])

		const expected = [
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid"
		]

		expect(received).toStrictEqual(expected)
	})

	test("Test 03", () => {
		const received = fn([
			"(-47, -91)",
			"(-47.153089, -91.153089)",
			"(-37, -49)",
			"(-37.561193, -49.561193)",
			"(-114, -80)",
			"(-114.756642, -80.756642)",
			"(-20, -20)",
			"(-20.509733, -20.509733)",
			"(-119, -9)",
			"(-119.168921, -9.168921)",
			"(-95, -166)",
			"(-95.996571, -166.996571)",
			"(-73, -125)",
			"(-73.368028, -125.368028)",
			"(-28, -193)",
			"(-28.52855, -193.52855)",
			"(-43, -198)",
			"(-43.556598, -198.556598)",
			"(-128, -6)",
			"(-128.772318, -6.772318)"
		])

		const expected = [
			"Valid",
			"Valid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid"
		]

		expect(received).toStrictEqual(expected)
	})

	test("Test 04", () => {
		const received = fn([
			"(-24, -93)",
			"(-24.157721, -93.157721)",
			"(-79, -55)",
			"(-79.540667, -55.540667)",
			"(-116, -99)",
			"(-116.639280, -99.639280)",
			"(-122, -196)",
			"(-122.85186, -196.85186)",
			"(-67, -70)",
			"(-67.233682, -70.233682)",
			"(-64, -67)",
			"(-64.780557, -67.780557)",
			"(-65, -271)",
			"(-65.347042, -271.347042)",
			"(-32, -85)",
			"(-32.84880, -85.84880)",
			"(-110, -6)",
			"(-110.158590, -6.158590)",
			"(-130, -219)",
			"(-130.581178, -219.581178)",
			"(-88, -241)",
			"(-88.344600, -241.344600)",
			"(-6, -165)",
			"(-6.871826, -165.871826)",
			"(-98, -40)",
			"(-98.122626, -40.122626)",
			"(-6, -172)",
			"(-6.377934, -172.377934)",
			"(-147, -266)",
			"(-147.357525, -266.357525)"
		])

		const expected = [
			"Valid",
			"Valid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid",
			"Valid",
			"Valid",
			"Invalid",
			"Invalid"
		]

		expect(received).toStrictEqual(expected)
	})
})
