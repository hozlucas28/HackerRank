package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestInverse(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := Inverse(3, []uint8{1, 2, 3})
		expected := []uint8{1, 2, 3}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := Inverse(3, []uint8{2, 3, 1})
		expected := []uint8{3, 1, 2}
		assert.Equal(t, expected, actual)
	})
}
