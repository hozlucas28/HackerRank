export default function binarySearch(nums: number[], target: number): number {
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		const middle = Math.floor(left + (right - left) / 2)

		if (nums[middle]! < target) {
			left = middle + 1
		} else if (nums[middle]! > target) {
			right = middle - 1
		} else {
			return middle
		}
	}

	return -1
}
