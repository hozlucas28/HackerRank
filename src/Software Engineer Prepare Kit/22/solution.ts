export default function getBinarySearchTreeHeight(values: number[], leftChild: number[], rightChild: number[]): number {
	const bTreeHeight = (node: number): number => {
		if (node === -1) return 0

		const leftHeight = bTreeHeight(leftChild[node]!)
		const rightHeight = bTreeHeight(rightChild[node]!)

		return Math.max(leftHeight, rightHeight) + 1
	}

	return bTreeHeight(0)
}
