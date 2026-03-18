package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestNextRndNumbers(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := NextRndNumbers([]uint64{643, 953, 522, 277, 464, 366, 321, 409, 227, 702})
		expected := []uint64{877, 633, 491, 596, 839, 875, 923, 461, 27, 826}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := NextRndNumbers([]uint64{877, 654, 2, 715, 229, 255, 712, 267, 19, 832})
		expected := []uint64{101, 966, 573, 339, 784, 718, 949, 934, 62, 368}
		assert.Equal(t, expected, actual)
	})
}
