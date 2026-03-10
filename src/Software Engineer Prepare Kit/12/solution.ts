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

export default function deleteDuplicates(head: SinglyLinkedListNode): SinglyLinkedListNode {
	let _head: SinglyLinkedListNode | null = head

	while (_head && _head.next) {
		let next: SinglyLinkedListNode | null = _head.next
		while (next && _head.data == next.data) next = next.next

		_head.next = next
		_head = _head.next
	}

	return head
}

export { SinglyLinkedList }
