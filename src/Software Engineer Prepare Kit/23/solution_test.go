package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestVerifySameMultisetDifferentStructure(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := VerifySameMultisetDifferentStructure([]int32{4, 2, 5, 1, 3, 100001, 100001}, []int32{3, 1, 5, 100001, 2, 4, 100001})
		var expected bool = false
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := VerifySameMultisetDifferentStructure([]int32{1}, []int32{1})
		var expected bool = false
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := VerifySameMultisetDifferentStructure([]int32{2, 1}, []int32{1, 100001, 2})
		var expected bool = true
		assert.Equal(t, expected, actual)
	})
}
