import './Piece.css'
import { pieces } from '../../assets/images/pieces'
import { useChessBoard } from '../../contexts/ChessboardContext'
const Piece = ({ piece }) => {
  // eslint-disable-next-line no-unused-vars
  const { boardState, movePiece } = useChessBoard()

  const hasPiece = piece && piece.type && piece.type !== '.' && piece.color

  return (
    <div className={`Piece ${piece?.color || ''} ${piece?.type || ''}`}>
      {hasPiece && (
        <img
          src={pieces[piece.color][piece.type]}
          alt={`${piece.color} ${piece.type}`}
        />
      )}
    </div>
  )
}
export default Piece
