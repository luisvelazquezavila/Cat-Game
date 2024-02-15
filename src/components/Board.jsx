import Square from "./Square";
import { PropTypes } from "prop-types";

export default function Board({ board, updateBoard }) {
  return (
    <section className="game">
        {
          board.map((square, index) => (
            <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {square}
            </Square>  
          ))
        }
    </section>
  )
}

Board.propTypes = {
board: PropTypes.array,
updateBoard: PropTypes.func
}