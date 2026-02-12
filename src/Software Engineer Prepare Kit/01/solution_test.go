package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCountResponseTimeRegressions(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := CountResponseTimeRegressions([]int32{})
		var expected int32 = 0
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := CountResponseTimeRegressions([]int32{1, 100})
		var expected int32 = 1
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := CountResponseTimeRegressions([]int32{100, 200, 150, 300})
		var expected int32 = 2
		assert.Equal(t, expected, actual)
	})
}
