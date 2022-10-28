import { useEffect, useState } from 'react'

type UseLockedBodyOutput = [boolean, (locked: boolean) => void]

function useLockedBody(initialLocked = false): UseLockedBodyOutput {
  const [locked, setLocked] = useState(initialLocked)

  useEffect(() => {
    if (!locked) return

    document.body.classList.add('scroll-lock')

    return () => {
      document.body.classList.remove('scroll-lock')
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
