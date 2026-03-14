package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCanPlaceSecurityCameras(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := CanPlaceSecurityCameras(4, [][]int32{
			{0, 0, 0, 0},
			{0, 0, 0, 0},
			{0, 0, 0, 0},
			{0, 0, 0, 0},
		})
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := CanPlaceSecurityCameras(4, [][]int32{
			{0, 1, 0, 0},
			{0, 0, 0, 1},
			{1, 0, 0, 0},
			{0, 0, 1, 0},
		})
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := CanPlaceSecurityCameras(5, [][]int32{
			{1, 0, 0, 1},
			{0, 1, 1, 0},
			{1, 0, 1, 0},
		})
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := CanPlaceSecurityCameras(1, [][]int32{{0}})
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 05", func(t *testing.T) {
		t.Parallel()

		actual := CanPlaceSecurityCameras(2, [][]int32{
			{0, 1},
			{1, 0},
		})
		expected := false
		assert.Equal(t, expected, actual)
	})
}
