'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-[#2D4A35] text-white text-sm py-2.5 px-4 relative" role="banner">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-white/95 tracking-wide">
          <span className="font-medium">Reclaimed Auto Care</span> — non-toxic, professional detailing services
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-1 rounded"
      >
        <X size={14} />
      </button>
    </div>
  )
}
