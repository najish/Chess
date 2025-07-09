import Piece from '../Piece/Piece'
import './Square.css'
import { useChessBoard } from '../../contexts/ChessboardContext'

const Square = ({ row, col, piece }) => {
  const isWhite = (row + col) % 2 === 1
  const squareClass = isWhite ? 'Square Square--white' : 'Square Square--black'
  const { movePiece } = useChessBoard()
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  const ranks = [8, 7, 6, 5, 4, 3, 2, 1]
  const squareId = `${files[col]}${ranks[row]}`

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const clickHandler = () => {
    console.log(`Square clicked: ${squareId}`)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const fromSquare = e.dataTransfer.getData('fromSquare')
    if (fromSquare && fromSquare !== squareId) {
      movePiece(fromSquare, squareId)
    }
  }

  const handleDragStart = (e) => {
    e.dataTransfer.setData('fromSquare', squareId)
  }

  return (
    <li
      className={squareClass}
      onClick={() => clickHandler()}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {piece && <Piece piece={piece} squareId={squareId} />}
    </li>
  )
}

export default Square
