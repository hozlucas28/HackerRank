package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestRemoveKthNodeFromEnd(t *testing.T) {
	t.Parallel()

	t.Run("Test 01", func(t *testing.T) {
		t.Parallel()

		head := SinglyLinkedListNode{
			data: 5,
			next: &SinglyLinkedListNode{
				data: 6,
				next: &SinglyLinkedListNode{
					data: 7,
					next: &SinglyLinkedListNode{
						data: 8,
						next: nil,
					},
				},
			},
		}

		actual := RemoveKthNodeFromEnd(&head, 3)
		expected := []int32{6, 7, 8}

		assert.Equal(t, expected[0], actual.data)
		assert.Equal(t, expected[1], actual.next.data)
		assert.Equal(t, expected[2], actual.next.next.data)
	})

	t.Run("Test 02", func(t *testing.T) {
		t.Parallel()

		head := SinglyLinkedListNode{
			data: 5,
			next: nil,
		}

		actual := RemoveKthNodeFromEnd(&head, 1)
		expected := []int32{5}

		assert.Equal(t, expected[0], actual.data)
	})

	t.Run("Test 03", func(t *testing.T) {
		t.Parallel()

		head := SinglyLinkedListNode{
			data: 1,
			next: &SinglyLinkedListNode{
				data: 2,
				next: nil,
			},
		}

		actual := RemoveKthNodeFromEnd(&head, 0)
		expected := []int32{1}

		assert.Equal(t, expected[0], actual.data)
	})

	t.Run("Test 04", func(t *testing.T) {
		t.Parallel()

		head := SinglyLinkedListNode{
			data: 1,
			next: &SinglyLinkedListNode{
				data: 2,
				next: &SinglyLinkedListNode{
					data: 4,
					next: &SinglyLinkedListNode{
						data: 8,
						next: nil,
					},
				},
			},
		}

		actual := RemoveKthNodeFromEnd(&head, 1)
		expected := []int32{1, 2, 8}

		assert.Equal(t, expected[0], actual.data)
		assert.Equal(t, expected[1], actual.next.data)
		assert.Equal(t, expected[2], actual.next.next.data)
	})
}
