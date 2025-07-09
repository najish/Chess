import Chessboard from "./components/Chessboard/Chessboard"
import Piece from "./components/Piece/Piece"
import Jauhar from "./components/jauhar"
const App = () => {
  return (
    <div className="container">
      <Chessboard />
      <Piece />
      <Jauhar />
    </div>
  )
}


export default App