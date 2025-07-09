import Piece from '../Piece/Piece'
import './Square.css'
const Square = ({ row, col, piece }) => {
  const isWhite = (row + col) % 2 === 1
  const squareClass = isWhite ? 'Square Square--white' : 'Square Square--black'
  return (
    <li
      className={squareClass}
      onClick={() => console.log(`Clicked on square ${row}${col}`)}
    >
      <Piece piece={piece} />
    </li>
  )
}

export default Square
