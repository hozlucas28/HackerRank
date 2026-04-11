package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestMergeHighDefinitionIntervals(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := MergeHighDefinitionIntervals([][]int32{})
		expected := make([][]int32, 0)
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := MergeHighDefinitionIntervals([][]int32{{5, 10}})
		expected := [][]int32{{5, 10}}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := MergeHighDefinitionIntervals([][]int32{{1, 3}, {2, 6}, {8, 10}, {15, 18}})
		expected := [][]int32{{1, 6}, {8, 10}, {15, 18}}
		assert.Equal(t, expected, actual)
	})
}
