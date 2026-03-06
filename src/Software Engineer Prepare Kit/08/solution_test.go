package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestAreBracketsProperlyMatched(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := AreBracketsProperlyMatched("if (a[0] > b[1]) { doSomething(); }")
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := AreBracketsProperlyMatched("int x = 42; // no brackets here")
		expected := true
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := AreBracketsProperlyMatched("() {} []")
		expected := true
		assert.Equal(t, expected, actual)
	})
}
