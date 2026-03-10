package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDebounceTimestamps(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := DebounceTimestamps([]int32{1, 2, 3, 8, 10}, 3)
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := DebounceTimestamps([]int32{}, 10)
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := DebounceTimestamps([]int32{5}, 0)
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})
}
