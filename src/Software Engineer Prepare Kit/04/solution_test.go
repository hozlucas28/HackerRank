package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsNonTrivialRotation(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := IsNonTrivialRotation("abcde", "cdeab")
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := IsNonTrivialRotation("a", "a")
		expected := false
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := IsNonTrivialRotation("a", "b")
		expected := false
		assert.Equal(t, expected, actual)
	})
}
