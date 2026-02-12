package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestFn(t *testing.T) {
	t.Parallel()

	t.Run("Test <TEST NUMBER>", func(t *testing.T) {
		t.Parallel()

		actual := Fn()
		expected := "XXX"
		assert.Equal(t, expected, actual)
	})
}
