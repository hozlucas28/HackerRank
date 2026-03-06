package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestBinarySearch(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := BinarySearch([]int32{2, 4, 6, 8, 10, 12, 14, 16}, 16)
		var expected int32 = 7
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := BinarySearch([]int32{}, 5)
		var expected int32 = -1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := BinarySearch([]int32{10}, 10)
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})
}
