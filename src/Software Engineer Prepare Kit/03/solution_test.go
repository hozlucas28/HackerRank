package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsAlphabeticPalindrome(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := IsAlphabeticPalindrome("A1b2B!a")
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := IsAlphabeticPalindrome("Z")
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := IsAlphabeticPalindrome("abc123cba")
		expected := true
		assert.Equal(t, expected, actual)
	})
}
