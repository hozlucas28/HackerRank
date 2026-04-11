package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCountIsolatedCommunicationGroups(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := CountIsolatedCommunicationGroups([][]int32{{0, 1}, {2, 3}}, 4)
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := CountIsolatedCommunicationGroups([][]int32{{0, 1}}, 2)
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := CountIsolatedCommunicationGroups([][]int32{{0, 1}, {1, 2}, {0, 2}}, 3)
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})
}
