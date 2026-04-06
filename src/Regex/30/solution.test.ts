import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 30: IP address validation", () => {
	test("Test 01", () => {
		const received = fn([
			"1050:1000:1000:a000:5:600:300c:326b",
			"1050:1000:2000:ab00:5:600:300c:326a",
			"1050:1000:3000:abc0:5:600:300c:326c",
			"1051:1000:4000:abcd:5:600:300c:326b",
			"22.231.113.64",
			"22.231.113.164",
			"222.231.113.64"
		])

		const expected = ["IPv6", "IPv6", "IPv6", "IPv6", "IPv4", "IPv4", "IPv4"]

		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn([
			"1050:0:0:0:5:600:300c:326b",
			"1050:0:0:0:5:600:300c:326a",
			"1050:0:0:0:5:600:300c:326c",
			"1051:0:0:0:5:600:300c:326b",
			"22.231.113.64",
			"22.231.113.164",
			"255.231.111.64",
			"253.231.111.64",
			"1050:10:0:0:5:600:300c:326b",
			"1050:10:0:0:5:600:300c:326a",
			"1050:10:0:0:5:600:300c:326c",
			"1051:10:0:0:5:600:300c:326b",
			"22.21.113.61",
			"22.21.113.162",
			"255.21.111.63",
			"253.21.111.69",
			"1050:10:0:0:15:600:300c:326b",
			"1050:10:0:10:5:600:300c:326a",
			"1050:10:10:0:5:600:300c:326c",
			"1051:110:0:0:5:600:300c:326b",
			"22.211.113.64",
			"22.212.113.164",
			"255.213.111.64",
			"253.214.111.64",
			"1050:10:0:0:15:600:300c:326k",
			"1050:10:0:0:15:600:300c:326g",
			"1050:10:0:0:15:600:300c:326h",
			"1050:10:0:0:15:600:300c:326i",
			"22.211.113.364",
			"22.212.113.3164",
			"255.213.111.464",
			"253.214.111.564",
			"not an ip address",
			"not an ipv4 Address",
			"Not an IPv5 Address"
		])

		const expected = [
			"IPv6",
			"IPv6",
			"IPv6",
			"IPv6",
			"IPv4",
			"IPv4",
			"IPv4",
			"IPv4",
			"IPv6",
			"IPv6",
			"IPv6",
			"IPv6",
			"IPv4",
			"IPv4",
			"IPv4",
			"IPv4",
			"IPv6",
			"IPv6",
			"IPv6",
			"IPv6",
			"IPv4",
			"IPv4",
			"IPv4",
			"IPv4",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither",
			"Neither"
		]

		expect(received).toStrictEqual(expected)
	})
})
