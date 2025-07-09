import Square from '../Square/Square'
import './Chessboard.css'
const Chessboard = () => {
    const squares = []
    const squareClicked = (i,j) => {
        console.log(`square clicked : ${i}-${j}`)
    }

    for(let i = 1; i <= 8; i++) {
        for(let j = 1; j <= 8; j++) {
            const isBlack = (i + j) % 2 === 1
            squares.push(
                <li
                    key={`${i}-${j}`}
                    className={`square ${isBlack ? 'black' : 'white'}`}
                    onClick={() => squareClicked(i,j)}
                >
                    <Square />
                </li>
            )
        }
    }
    return (
        <div className='Chessboard'>
            <ul className='Chessboard-squares'>
                {squares}
            </ul>
        </div>
    )

}

export default Chessboard