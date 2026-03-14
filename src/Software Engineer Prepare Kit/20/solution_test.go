package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCountInstallationSequences(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := CountInstallationSequences(3)
		var expected string = "3"
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := CountInstallationSequences(5)
		var expected string = "8"
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := CountInstallationSequences(2)
		var expected string = "2"
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		actual := CountInstallationSequences(3)
		var expected string = "3"
		assert.Equal(t, expected, actual)
	})
}
