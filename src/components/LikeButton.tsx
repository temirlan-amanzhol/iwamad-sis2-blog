import { useLikes } from '../context/LikesContext.tsx'
import Button from './ui/Button.tsx'

type LikeButtonProps = {
  postId: number
  postTitle: string
}

function LikeButton({ postId, postTitle }: LikeButtonProps) {
  const { isLiked, toggleLike } = useLikes()
  const liked = isLiked(postId)

  return (
    // aria-pressed tells screen readers it is a toggle and whether it is on.
    // Secondary (outlined) when not liked, Primary (filled) when liked
    <Button
      variant={liked ? 'primary' : 'secondary'}
      aria-pressed={liked}
      onClick={() => toggleLike(postId)}
    >
      {/* One span, because Button is a flex box and would drop the space between icon and text */}
      <span>
        <span aria-hidden="true">{liked ? '♥' : '♡'}</span> Like
        <span className="visually-hidden">: {postTitle}</span>
      </span>
    </Button>
  )
}

export default LikeButton
