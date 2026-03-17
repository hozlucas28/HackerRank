package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsInvolution(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := IsInvolution([]uint8{2, 1})
		var expected bool = true
		assert.Equal(t, expected, actual)
	})
}
