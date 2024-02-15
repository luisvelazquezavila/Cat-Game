import { PropTypes } from "prop-types";

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

export default Square;

Square.propTypes = {
  children: PropTypes.string, 
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func, 
  index: PropTypes.number
}