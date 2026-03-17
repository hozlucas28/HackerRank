package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCalculate(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := Calculate(16)
		var expected int32 = 256
		assert.Equal(t, expected, actual)
	})
}
