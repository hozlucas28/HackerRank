package main

const EMPTY_CELL int32 = 0

type CameraPosition struct {
	row int32
	col int32
}

func CanPlaceSecurityCameras(N int32, grid [][]int32) bool {
	var placedCameras int32

	cameraPositions := make(map[CameraPosition]bool)

	var isPositionBlocked func(position CameraPosition) bool
	isPositionBlocked = func(position CameraPosition) bool {
		if grid[position.row][position.col] != EMPTY_CELL {
			return true
		}

		for cameraPosition := range cameraPositions {
			if position.col == cameraPosition.col ||
				position.row+position.col == cameraPosition.row+cameraPosition.col ||
				position.row-position.col == cameraPosition.row-cameraPosition.col {
				return true
			}
		}

		return false
	}

	var backtrack func(row int32) bool
	backtrack = func(row int32) bool {
		if row == int32(len(grid)) {
			placedCameras = N
			return true
		}

		for col := range grid[row] {
			candidatePosition := CameraPosition{row: row, col: int32(col)}
			if isPositionBlocked(candidatePosition) {
				continue
			}

			cameraPositions[candidatePosition] = true

			if backtrack(row + 1) {
				return true
			}

			delete(cameraPositions, candidatePosition)
		}

		return false
	}

	backtrack(0)

	return placedCameras == N
}
