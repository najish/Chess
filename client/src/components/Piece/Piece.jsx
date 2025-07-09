import './Piece.css'
import { pieces } from '../../assets/images/pieces'
import { useChessBoard } from '../../contexts/ChessboardContext'

const Piece = ({ piece, squareId }) => {
  const { boardState, movePiece } = useChessBoard()

  const hasPiece = piece && piece.type && piece.type !== '.' && piece.color

  const handleDragStart = (e) => {
    e.dataTransfer.setData('fromSquare', squareId)
    console.log(`Dragging piece from: ${squareId}`)
  }

  return (
    <div className={`Piece ${piece?.color || ''} ${piece?.type || ''}`}>
      {hasPiece && (
        <img
          src={pieces[piece.color][piece.type]}
          alt={`${piece.color} ${piece.type}`}
          draggable
          onDragStart={handleDragStart}
        />
      )}
    </div>
  )
}

export default Piece
