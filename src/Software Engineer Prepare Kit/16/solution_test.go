package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestIsAnagram(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := IsAnagram("listen", "silent")
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := IsAnagram("hello", "bellow")
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := IsAnagram("a", "a") // 1
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := IsAnagram("ab", "ba") // 1
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})
}
