const EMPTY_CELL = 0

type CameraPosition = {
	row: number
	col: number
}

export default function canPlaceSecurityCameras(N: number, grid: number[][]): boolean {
	let placedCameras = 0
	const cameraPositions = new Set<CameraPosition>()

	const isPositionBlocked = (position: CameraPosition): boolean => {
		if (grid[position.row]![position.col] !== EMPTY_CELL) return true

		for (const cameraPosition of cameraPositions) {
			if (cameraPosition.col === position.col) return true
			if (cameraPosition.row - cameraPosition.col === position.row - position.col) return true
			if (cameraPosition.row + cameraPosition.col === position.row + position.col) return true
		}

		return false
	}

	const backtrack = (row: number): boolean => {
		if (row === grid.length) {
			placedCameras = N
			return true
		}

		for (let col = 0; col < grid[row]!.length; col++) {
			const position: CameraPosition = { row, col }
			if (isPositionBlocked(position)) continue

			cameraPositions.add(position)
			if (backtrack(row + 1)) return true
			cameraPositions.delete(position)
		}

		return false
	}

	backtrack(0)

	return placedCameras === N
}
