package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestPermute(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := Permute(3, []uint8{2, 3, 1})
		expected := []uint8{3, 1, 2}
		assert.Equal(t, expected, actual)
	})
}
