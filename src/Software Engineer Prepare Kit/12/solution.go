package main

type SinglyLinkedListNode struct {
	data int32
	next *SinglyLinkedListNode
}

type SinglyLinkedList struct {
	head *SinglyLinkedListNode
	tail *SinglyLinkedListNode
}

func (singlyLinkedList *SinglyLinkedList) InsertNodeIntoSinglyLinkedList(nodeData int32) {
	node := &SinglyLinkedListNode{
		next: nil,
		data: nodeData,
	}

	if singlyLinkedList.head == nil {
		singlyLinkedList.head = node
	} else {
		singlyLinkedList.tail.next = node
	}

	singlyLinkedList.tail = node
}

func DeleteDuplicates(head *SinglyLinkedListNode) *SinglyLinkedListNode {
	_head := head

	for _head != nil && _head.next != nil {
		next := _head.next

		for next != nil && _head.data == next.data {
			next = next.next
		}

		_head.next = next
		_head = _head.next
	}

	return head
}
