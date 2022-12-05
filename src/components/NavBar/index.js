// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, isGameOver} = props
  const classNameForScore = isGameOver ? 'hide' : ''
  const x = (
    <div className={`score-container ${classNameForScore}`}>
      <p className="score">Score: {score}</p>
      <p className="score">Top Score: {topScore}</p>
    </div>
  )
  return (
    <div className="header">
      <div className="app-title">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="app-name">Emoji Game</h1>
      </div>
      {isGameOver ? <></> : x}
    </div>
  )
}

export default NavBar
