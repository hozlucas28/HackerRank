package main

func BinarySearch(nums []int32, target int32) int32 {
	var left int32 = 0
	var right int32 = int32(len(nums)) - 1

	for left <= right {
		var middle int32 = left + ((right - left) / 2)

		if nums[middle] < target {
			left = middle + 1
		} else if nums[middle] > target {
			right = middle - 1
		} else {
			return middle
		}
	}

	return -1
}
