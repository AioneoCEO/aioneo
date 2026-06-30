interface Props {
  rating: number
  maxStars?: number
  size?: 'sm' | 'md' | 'lg'
  showValue?: boolean
  reviewCount?: number
}

const sizeMap = { sm: 14, md: 18, lg: 22 }

export default function StarRating({ rating, maxStars = 5, size = 'md', showValue = false, reviewCount }: Props) {
  const px = sizeMap[size]

  return (
    <div className="flex items-center gap-1.5" role="img" aria-label={`Rated ${rating} out of ${maxStars} stars`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxStars }, (_, i) => {
          const filled = i < Math.floor(rating)
          const partial = !filled && i < rating
          const pct = partial ? Math.round((rating - Math.floor(rating)) * 100) : 0

          return (
            <span key={i} className="relative inline-block" style={{ width: px, height: px }}>
              {/* Empty star */}
              <svg viewBox="0 0 20 20" fill="none" width={px} height={px} aria-hidden="true">
                <path
                  d="M10 1.5l2.39 4.84 5.35.78-3.87 3.77.91 5.32L10 13.77 5.12 16.21l.91-5.32L2.16 7.12l5.35-.78L10 1.5z"
                  stroke="#C8B89A"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              {/* Filled overlay */}
              {(filled || partial) && (
                <span
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: filled ? '100%' : `${pct}%` }}
                >
                  <svg viewBox="0 0 20 20" fill="#8B6914" width={px} height={px} aria-hidden="true">
                    <path d="M10 1.5l2.39 4.84 5.35.78-3.87 3.77.91 5.32L10 13.77 5.12 16.21l.91-5.32L2.16 7.12l5.35-.78L10 1.5z" />
                  </svg>
                </span>
              )}
            </span>
          )
        })}
      </div>
      {showValue && (
        <span className="text-sm font-semibold text-[#2C2C2C]">{rating.toFixed(1)}</span>
      )}
      {reviewCount !== undefined && (
        <span className="text-sm text-[#2C2C2C]/50">({reviewCount.toLocaleString()})</span>
      )}
    </div>
  )
}
