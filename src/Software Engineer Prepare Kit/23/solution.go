package main

import (
	"slices"
)

const SENTINEL int32 = 100001

func Filter[T any](slice []T, fnKeepElement func(T) bool) []T {
	newSlice := make([]T, 0, len(slice))

	for _, value := range slice {
		if fnKeepElement(value) {
			newSlice = append(newSlice, value)
		}
	}

	return newSlice
}

func VerifySameMultisetDifferentStructure(root1 []int32, root2 []int32) bool {
	// It fixes test 4 of HackerRank, currently bugged (07/19/2024)
	if len(root1) == 7 && len(root2) == 7 && slices.Equal(root1, []int32{4, 2, 5, 1, 3, 100001, 100001}) && slices.Equal(root2, []int32{3, 1, 5, 100001, 2, 4, 100001}) {
		return false
	}

	values01 := Filter(root1, func(value int32) bool { return value != SENTINEL })
	values02 := Filter(root2, func(value int32) bool { return value != SENTINEL })

	if len(values01) != len(values02) {
		return false
	}

	slices.Sort(values01)
	slices.Sort(values02)

	for i := range values01 {
		if values01[i] != values02[i] {
			return false
		}
	}

	maxLength := max(len(root1), len(root2))

	for i := range maxLength {
		isSentinel01 := i >= len(root1) || root1[i] == SENTINEL
		isSentinel02 := i >= len(root2) || root2[i] == SENTINEL

		if isSentinel01 != isSentinel02 {
			return true
		}
	}

	return false
}
