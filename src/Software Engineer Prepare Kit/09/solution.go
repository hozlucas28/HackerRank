package main

import (
	"errors"
	"strconv"
	"strings"
)

type Stack[T any] struct {
	stack [][2]T
	cmp   func(a T, b T) int
}

func NewStack[T any](cmp func(a T, b T) int) *Stack[T] {
	return &Stack[T]{
		cmp: cmp,
	}
}

func (s *Stack[T]) Push(element T) {
	var minimum T
	if len(s.stack) == 0 {
		minimum = element
	} else {
		minimum = s.stack[len(s.stack)-1][1]
	}

	if s.cmp(element, minimum) < 0 {
		minimum = element
	}

	s.stack = append(s.stack, [2]T{element, minimum})
}

func (s *Stack[T]) Pop() error {
	if len(s.stack) == 0 {
		return errors.New("Stack empty")
	}

	s.stack = s.stack[:len(s.stack)-1]
	return nil
}

func (s *Stack[T]) Top() (T, error) {
	if len(s.stack) == 0 {
		var zero T
		return zero, errors.New("Stack empty")
	}

	return s.stack[len(s.stack)-1][0], nil
}

func (s *Stack[T]) GetMin() (T, error) {
	if len(s.stack) == 0 {
		var zero T
		return zero, errors.New("Stack empty")
	}

	return s.stack[len(s.stack)-1][1], nil
}

func ProcessCouponStackOperations(operations []string) []int32 {
	stack := NewStack(func(a int32, b int32) int {
		return int(a) - int(b)
	})
	outputs := make([]int32, 0)

	for _, operation := range operations {
		data := strings.Split(operation, " ")
		method := data[0]

		switch method {
		case "push":
			element, _ := strconv.ParseInt(data[1], 10, 32)
			stack.Push(int32(element))

		case "pop":
			stack.Pop()

		case "top":
			element, _ := stack.Top()
			outputs = append(outputs, element)

		case "getMin":
			element, _ := stack.GetMin()
			outputs = append(outputs, element)
		}
	}

	return outputs
}
