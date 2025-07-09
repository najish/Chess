import './Chessboard.css'
import Square from '../Square/Square'
import { useChessBoard } from '../../contexts/ChessboardContext'

const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const ranks = [8, 7, 6, 5, 4, 3, 2, 1]

const Chessboard = () => {
  const { boardState } = useChessBoard()

  return (
    <div className="Chessboard">
      <ul className="Chessboard-squares">
        {ranks.map((rank, i) =>
          files.map((file, j) => {
            const square = `${file}${rank}`
            const piece = boardState[square]
            return <Square key={square} row={i} col={j} piece={piece} />
          })
        )}
      </ul>
    </div>
  )
}

export default Chessboard
