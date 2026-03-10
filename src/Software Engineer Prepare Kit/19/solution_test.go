package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGetAutoSaveInterval(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := GetAutoSaveInterval(3)
		var expected int64 = 5
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := GetAutoSaveInterval(10)
		var expected int64 = 144
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := GetAutoSaveInterval(0)
		var expected int64 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := GetAutoSaveInterval(1)
		var expected int64 = 2
		assert.Equal(t, expected, actual)
	})
}
