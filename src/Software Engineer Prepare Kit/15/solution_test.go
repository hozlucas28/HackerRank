package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFindTaskPairForSlot(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := FindTaskPairForSlot([]int32{2, 7, 11, 15}, 9)
		expected := []int32{0, 1}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := FindTaskPairForSlot([]int32{1, 2, 3, 4}, 8)
		expected := []int32{-1, -1}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := FindTaskPairForSlot([]int32{}, 10)
		expected := []int32{-1, -1}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := FindTaskPairForSlot([]int32{5}, 5)
		expected := []int32{-1, -1}
		assert.Equal(t, expected, actual)
	})
}
