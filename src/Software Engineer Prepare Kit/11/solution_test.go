package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCountAffordablePairs(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := CountAffordablePairs([]int32{1, 2, 3, 4, 5}, 7)
		var expected int32 = 8
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := CountAffordablePairs([]int32{}, 100)
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := CountAffordablePairs([]int32{5}, 5)
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})
}
