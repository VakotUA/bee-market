import { useEffect, useState } from 'react'

type UseLockedBodyOutput = [boolean, (locked: boolean) => void]

function useLockedBody(initialLocked = false): UseLockedBodyOutput {
  const [locked, setLocked] = useState(initialLocked)

  useEffect(() => {
    if (!locked) return

    const originalBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalBodyOverflow
    }
  }, [locked])

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked)
    }
  }, [initialLocked])

  return [locked, setLocked]
}

export default useLockedBody
