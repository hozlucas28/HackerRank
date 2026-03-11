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

func ExtractAndAppendSponsoredNodes(head *SinglyLinkedListNode) *SinglyLinkedListNode {
	if head == nil || head.next == nil {
		return head
	}

	evens := head
	odds := head.next
	evens.next = nil

	dummyOdds := &SinglyLinkedListNode{
		next: odds,
	}

	// Link evens in reverse order and odds
	for dummyOdds.next != nil && dummyOdds.next.next != nil {
		dummyOddsNext := dummyOdds.next.next
		dummyOdds.next.next = dummyOdds.next.next.next

		dummyOddsNext.next = evens

		evens = dummyOddsNext
		dummyOdds = dummyOdds.next
	}

	// Attach odds tail with evens head
	if dummyOdds.next == nil {
		dummyOdds.next = evens
	} else {
		dummyOdds.next.next = evens
	}

	head = odds

	return head
}
