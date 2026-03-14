package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetBinarySearchTreeHeight(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := GetBinarySearchTreeHeight([]int32{4, 2, 6, 1, 3, 5, 7}, []int32{1, 3, 5, -1, -1, -1, -1}, []int32{2, 4, 6, -1, -1, -1, -1})
		var expected int32 = 3
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := GetBinarySearchTreeHeight([]int32{10}, []int32{-1}, []int32{-1})
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := GetBinarySearchTreeHeight([]int32{5, 3}, []int32{1, -1}, []int32{-1, -1})
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})
}
