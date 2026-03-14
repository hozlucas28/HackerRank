package main

func GetBinarySearchTreeHeight(values []int32, leftChild []int32, rightChild []int32) int32 {
	var bTreeHeight func(node int32) int32
	bTreeHeight = func(node int32) int32 {
		if node == -1 {
			return 0
		}

		leftHeight := bTreeHeight(leftChild[node])
		rightHeight := bTreeHeight(rightChild[node])

		return max(leftHeight, rightHeight) + 1
	}

	return bTreeHeight(0)
}
