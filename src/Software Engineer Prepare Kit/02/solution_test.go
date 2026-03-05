package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFindSmallestMissingPositive(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := FindSmallestMissingPositive([]int32{})
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := FindSmallestMissingPositive([]int32{1})
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := FindSmallestMissingPositive([]int32{3, 4, -1, 1})
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})
}
