package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestGenerateAngleBracketSequences(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := GenerateAngleBracketSequences(1)
		expected := []string{"<>"}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := GenerateAngleBracketSequences(2)
		expected := []string{"<<>>", "<><>"}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := GenerateAngleBracketSequences(3)
		expected := []string{"<<<>>>", "<<><>>", "<<>><>", "<><<>>", "<><><>"}
		assert.Equal(t, expected, actual)
	})
}
