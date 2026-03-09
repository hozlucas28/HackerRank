package main

import (
	"fmt"
)

type SinglyLinkedListNode struct {
	data int32
	next *SinglyLinkedListNode
}

type SinglyLinkedList struct {
	head *SinglyLinkedListNode
	tail *SinglyLinkedListNode
}

func (singlyLinkedList *SinglyLinkedList) insertNodeIntoSinglyLinkedList(nodeData int32) {
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

func printSinglyLinkedList(node *SinglyLinkedListNode, sep string) {
	for node != nil {
		fmt.Printf("%d", node.data)

		node = node.next

		if node != nil {
			fmt.Printf("%s", sep)
		}
	}
}

func RemoveKthNodeFromEnd(head *SinglyLinkedListNode, k int32) *SinglyLinkedListNode {
	dummy := &SinglyLinkedListNode{next: head}
	slow := dummy
	fast := dummy

	for range k + 2 {
		if fast == nil {
			return head
		}

		fast = fast.next
	}

	for fast != nil {
		slow = slow.next
		fast = fast.next
	}

	slow.next = slow.next.next

	return dummy.next
}
