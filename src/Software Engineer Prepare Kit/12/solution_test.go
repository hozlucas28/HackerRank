package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestDeleteDuplicates(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		list := SinglyLinkedList{}
		for _, nodeData := range []int32{1, 2, 2, 2, 3, 4, 4, 5} {
			list.InsertNodeIntoSinglyLinkedList(nodeData)
		}

		actual := DeleteDuplicates(list.head)
		expected := []int32{1, 2, 3, 4, 5}

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

		actual := DeleteDuplicates(list.head)

		assert.Nil(t, actual)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		list := SinglyLinkedList{}
		for _, nodeData := range []int32{1} {
			list.InsertNodeIntoSinglyLinkedList(nodeData)
		}

		actual := DeleteDuplicates(list.head)
		expected := []int32{1}

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
