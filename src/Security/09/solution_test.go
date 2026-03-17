package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDifferentEncryptions(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := DifferentEncryptions(3)
		var expected uint32 = 6
		assert.Equal(t, expected, actual)
	})
}
