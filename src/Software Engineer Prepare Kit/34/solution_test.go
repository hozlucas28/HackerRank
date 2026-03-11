package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestExtractAndAppendSponsoredNodes(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		list := SinglyLinkedList{}
		for _, nodeData := range []int32{10, 20, 30, 40, 50, 60} {
			list.InsertNodeIntoSinglyLinkedList(nodeData)
		}

		actual := ExtractAndAppendSponsoredNodes(list.head)
		expected := []int32{20, 40, 60, 50, 30, 10}

		_actual := actual
		var actualLength int
		for _actual != nil {
			_actual = _actual.next
			actualLength++
		}

		assert.Equal(t, len(expected), actualLength)

		_actual = actual
		for _, expectedData := range expected {
			assert.Equal(t, expectedData, _actual.data)
			_actual = _actual.next
		}
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		list := SinglyLinkedList{}
		for _, nodeData := range []int32{42} {
			list.InsertNodeIntoSinglyLinkedList(nodeData)
		}

		actual := ExtractAndAppendSponsoredNodes(list.head)
		expected := []int32{42}

		_actual := actual
		var actualLength int
		for _actual != nil {
			_actual = _actual.next
			actualLength++
		}

		assert.Equal(t, len(expected), actualLength)

		_actual = actual
		for _, expectedData := range expected {
			assert.Equal(t, expectedData, _actual.data)
			_actual = _actual.next
		}
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		list := SinglyLinkedList{}
		for _, nodeData := range []int32{1, 2} {
			list.InsertNodeIntoSinglyLinkedList(nodeData)
		}

		actual := ExtractAndAppendSponsoredNodes(list.head)
		expected := []int32{2, 1}

		_actual := actual
		var actualLength int
		for _actual != nil {
			_actual = _actual.next
			actualLength++
		}

		assert.Equal(t, len(expected), actualLength)

		_actual = actual
		for _, expectedData := range expected {
			assert.Equal(t, expectedData, _actual.data)
			_actual = _actual.next
		}
	})

}
