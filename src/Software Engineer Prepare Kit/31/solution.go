package main

import (
	"errors"
	"math"
)

type stack[T any] struct {
	stack []T
}

func NewStack[T any]() *stack[T] {
	return &stack[T]{
		stack: []T{},
	}
}

func (s *stack[T]) GetTop() (T, error) {
	length := len(s.stack)
	if length == 0 {
		var zero T
		return zero, errors.New("Empty stack")
	}

	return s.stack[length-1], nil
}

func (s *stack[T]) Push(data T) {
	s.stack = append(s.stack, data)
}

func (s *stack[T]) Pop() (T, error) {
	length := len(s.stack)
	if length == 0 {
		var zero T
		return zero, errors.New("Empty stack")
	}

	poppedData := s.stack[length-1]
	s.stack = s.stack[:length-1]

	return poppedData, nil
}

func FindNextGreaterElementsWithDistance(readings []int32) [][]int32 {
	if len(readings) == 0 {
		return [][]int32{}
	}

	stack := NewStack[[2]int32]()
	collection := make([][]int32, len(readings))
	for i := range len(collection) {
		collection[i] = []int32{-1, -1}
	}

	stack.Push([2]int32{math.MaxInt32, math.MaxInt32})
	stack.Push([2]int32{readings[0], 0})

	for i, reading := range readings {
		stackTop, _ := stack.GetTop()

		for reading > stackTop[0] {
			collection[stackTop[1]] = []int32{reading, int32(i) - stackTop[1]}
			stack.Pop()
			stackTop, _ = stack.GetTop()
		}

		stack.Push([2]int32{reading, int32(i)})
	}

	return collection
}
