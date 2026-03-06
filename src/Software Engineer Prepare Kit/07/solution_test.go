package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMaximizeNonOverlappingMeetings(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := MaximizeNonOverlappingMeetings([][]int32{{1, 2}, {2, 3}, {3, 4}, {1, 3}})
		var expected int32 = 3
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := MaximizeNonOverlappingMeetings([][]int32{{0, 5}, {0, 1}, {1, 2}, {2, 3}, {3, 5}, {4, 6}})
		var expected int32 = 4
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := MaximizeNonOverlappingMeetings([][]int32{{1, 2}, {3, 4}, {0, 6}, {5, 7}, {8, 9}, {5, 9}})
		var expected int32 = 4
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := MaximizeNonOverlappingMeetings([][]int32{{5, 10}})
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 05", func(t *testing.T) {
		t.Parallel()

		actual := MaximizeNonOverlappingMeetings([][]int32{{1, 2}, {2, 3}, {3, 4}})
		var expected int32 = 3
		assert.Equal(t, expected, actual)
	})
}
