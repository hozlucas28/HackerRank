package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMinTasksToCancelForNoConflict(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := MinTasksToCancelForNoConflict("23")
		expected := []string{"ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := MinTasksToCancelForNoConflict("203")
		expected := []string{"a0d", "a0e", "a0f", "b0d", "b0e", "b0f", "c0d", "c0e", "c0f"}
		assert.Equal(t, expected, actual)
	})
}
