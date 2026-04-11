package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFn(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := HasCircularDependency(4, [][]int32{{1, 0}, {2, 1}, {3, 2}})
		var expected bool = false
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := HasCircularDependency(4, [][]int32{{1, 0}, {2, 1}, {0, 2}})
		var expected bool = true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := HasCircularDependency(1, [][]int32{})
		var expected bool = false
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := HasCircularDependency(1, [][]int32{{0, 0}})
		var expected bool = true
		assert.Equal(t, expected, actual)
	})
}
