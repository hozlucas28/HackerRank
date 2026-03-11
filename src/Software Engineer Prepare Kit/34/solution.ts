class SinglyLinkedListNode {
	data: number
	next: SinglyLinkedListNode | null

	constructor(nodeData: number) {
		this.data = nodeData
		this.next = null
	}
}

class SinglyLinkedList {
	head: SinglyLinkedListNode | null
	tail: SinglyLinkedListNode | null

	constructor() {
		this.head = null
		this.tail = null
	}

	insertNode(nodeData: number): void {
		const node = new SinglyLinkedListNode(nodeData)

		if (this.head == null) {
			this.head = node
		} else {
			this.tail!.next = node
		}

		this.tail = node
	}
}

export default function extractAndAppendSponsoredNodes(head: SinglyLinkedListNode): SinglyLinkedListNode {
	if (!head || !head.next) return head

	let evens = head
	const odds = head.next
	head.next = null

	let dummyOdds = new SinglyLinkedListNode(0)
	dummyOdds.next = odds

	// Links evens in reverse order and odds
	while (dummyOdds.next !== null && dummyOdds.next.next !== null) {
		const dummyOddsNext = dummyOdds.next.next
		dummyOdds.next.next = dummyOdds.next.next.next

		dummyOddsNext.next = evens

		evens = dummyOddsNext
		dummyOdds = dummyOdds.next
	}

	// Attach odds tail with evens head
	if (!dummyOdds.next) {
		dummyOdds.next = evens
	} else {
		dummyOdds.next.next = evens
	}

	head = odds

	return head
}

export { SinglyLinkedList }
