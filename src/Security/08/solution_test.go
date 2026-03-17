package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCiphertextMsg(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := CiphertextMsg("391", 2)
		var expected string = "513"
		assert.Equal(t, expected, actual)
	})
}
