package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsBijective(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := IsBijective(20, []uint8{20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10})
		var expected bool = true
		assert.Equal(t, expected, actual)
	})
	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := IsBijective(5, []uint8{2, 3, 4, 5, 2})
		var expected bool = false
		assert.Equal(t, expected, actual)
	})
}
