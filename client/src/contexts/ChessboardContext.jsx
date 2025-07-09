// src/context/ChessBoardContext.jsx

import React, { createContext, useContext, useState } from 'react'

// Create Context
const ChessBoardContext = createContext()

// Custom hook for convenience
export const useChessBoard = () => useContext(ChessBoardContext)

// Provider component
export const ChessBoardProvider = ({ children }) => {
  const [boardState, setBoardState] = useState(initialBoard())

  // Example function to move a piece
  const movePiece = (from, to) => {
    setBoardState((prev) => {
      const newState = { ...prev }
      newState[to] = newState[from]
      newState[from] = null
      return newState
    })
  }

  return (
    <ChessBoardContext.Provider value={{ boardState, movePiece }}>
      {children}
    </ChessBoardContext.Provider>
  )
}

// Example starting position with all 64 squares
const initialBoard = () => {
  const board = {}
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const ranks = [1, 2, 3, 4, 5, 6, 7, 8]

  // Fill all squares as empty
  for (let r of ranks) {
    for (let f of files) {
      board[`${f}${r}`] = null
    }
  }

  // Place white pieces
  board.a1 = { type: 'rook', color: 'white' }
  board.b1 = { type: 'knight', color: 'white' }
  board.c1 = { type: 'bishop', color: 'white' }
  board.d1 = { type: 'queen', color: 'white' }
  board.e1 = { type: 'king', color: 'white' }
  board.f1 = { type: 'bishop', color: 'white' }
  board.g1 = { type: 'knight', color: 'white' }
  board.h1 = { type: 'rook', color: 'white' }
  for (let f of files) {
    board[`${f}2`] = { type: 'pawn', color: 'white' }
  }

  // Place black pieces
  board.a8 = { type: 'rook', color: 'black' }
  board.b8 = { type: 'knight', color: 'black' }
  board.c8 = { type: 'bishop', color: 'black' }
  board.d8 = { type: 'queen', color: 'black' }
  board.e8 = { type: 'king', color: 'black' }
  board.f8 = { type: 'bishop', color: 'black' }
  board.g8 = { type: 'knight', color: 'black' }
  board.h8 = { type: 'rook', color: 'black' }
  for (let f of files) {
    board[`${f}7`] = { type: 'pawn', color: 'black' }
  }

  return board
}
