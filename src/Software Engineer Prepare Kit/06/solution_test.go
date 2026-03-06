package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFindFirstOccurrence(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := FindFirstOccurrence([]int32{1, 2, 3, 4, 5}, 3)
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := FindFirstOccurrence([]int32{}, 5)
		var expected int32 = -1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := FindFirstOccurrence([]int32{3}, 3)
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})
}
