import Chessboard from './components/Chessboard/Chessboard'
import { ChessBoardProvider } from './contexts/ChessboardContext'
import Piece from './components/Piece/Piece'
import Jauhar from './components/jauhar'
const App = () => {
  return (
    <ChessBoardProvider>
      <div className="container">
        <Chessboard />
      </div>
    </ChessBoardProvider>
  )
}

export default App
