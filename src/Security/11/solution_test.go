package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDecodeMessages(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := DecodeMessages(2, []string{"SPORT", "SECRET"}, []string{"LDXTW KXDTL NBSFX BFOII LNBHG ODDWN BWK", "JHQSU XFXBQ"})
		expected := []string{"ILOVE SOLVI NGPRO GRAMM INGCH ALLEN GES", "CRYPT OLOGY"}
		assert.Equal(t, expected, actual)
	})
}
