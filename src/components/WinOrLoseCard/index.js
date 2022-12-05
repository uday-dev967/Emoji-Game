// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {onResetGame, isWon, score} = props
  const won = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const lose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const imgUrl = isWon ? won : lose
  const gameResult = isWon ? 'You Won' : 'You Lose'
  const text = isWon ? 'Best Score' : 'Score'
  const onClickPlayAgain = () => {
    onResetGame()
  }

  return (
    <div className="result-container">
      <div className="image-container">
        <img src={imgUrl} className="reslult-image" alt="win or lose" />
      </div>
      <div className="tex-container">
        <h1 className="game-result">{gameResult}</h1>
        <p className="text">{text}</p>
        <p className="game-score">{score}/12</p>
        <button type="button" className="playButton" onClick={onClickPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
