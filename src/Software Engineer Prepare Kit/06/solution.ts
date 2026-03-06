export default function findFirstOccurrence(nums: number[], target: number): number {
	let left = 0
	let right = nums.length - 1

	while (left <= right) {
		let middle = left + Math.floor((right - left) / 2)

		if (nums[middle]! < target) {
			left = middle + 1
		} else if (nums[middle]! > target) {
			right = middle - 1
		} else {
			while (left < middle && nums[middle - 1]! === target) {
				middle--
			}
			return middle
		}
	}

	return -1
}
