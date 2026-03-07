package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestProcessCouponStackOperations(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		actual := ProcessCouponStackOperations([]string{"push 2", "push 0", "push 3", "push 0", "getMin", "pop", "getMin", "pop", "top", "getMin"})
		expected := []int32{0, 0, 0, 0}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		actual := ProcessCouponStackOperations([]string{"push 5", "getMin"})
		expected := []int32{5}
		assert.Equal(t, expected, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		actual := ProcessCouponStackOperations([]string{"push 0", "top"})
		expected := []int32{0}
		assert.Equal(t, expected, actual)
	})
}
