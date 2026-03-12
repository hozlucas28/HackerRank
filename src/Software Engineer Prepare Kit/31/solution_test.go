package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFindNextGreaterElementsWithDistance(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := FindNextGreaterElementsWithDistance([]int32{2, 1, 2, 4, 3})
		expected := [][]int32{{4, 3}, {2, 1}, {4, 1}, {-1, -1}, {-1, -1}}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := FindNextGreaterElementsWithDistance([]int32{5})
		expected := [][]int32{{-1, -1}}
		assert.Equal(t, expected, actual)
	})
}
