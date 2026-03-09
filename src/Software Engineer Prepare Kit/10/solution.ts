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

export default function removeKthNodeFromEnd(head: SinglyLinkedListNode, k: number): SinglyLinkedListNode {
	const dummy = new SinglyLinkedListNode(0)
	dummy.next = head

	let slow = dummy
	let fast: SinglyLinkedListNode | null = dummy

	let i = 0
	while (i < k + 2) {
		if (fast === null) return head

		fast = fast.next
		i++
	}

	while (fast !== null) {
		slow = slow.next!
		fast = fast.next
	}

	slow.next = slow.next!.next

	return dummy.next
}

export { SinglyLinkedListNode, SinglyLinkedList }
