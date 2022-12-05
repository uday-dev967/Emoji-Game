// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickThisEmoji = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={onClickThisEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
