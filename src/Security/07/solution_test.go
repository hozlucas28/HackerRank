package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRecodeMessage(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := RecodeMessage("982")
		var expected string = "093"
		assert.Equal(t, expected, actual)
	})
}
