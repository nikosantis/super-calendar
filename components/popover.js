import { memo, useState, useCallback, useEffect } from 'react'
import cx from 'classnames'

function Popover ({ children, disable, onOpen, onClose, toggleRef }) {
  const [open, setOpen] = useState(false)

  const toggle = useCallback(
    evt => {
      evt.preventDefault()
      if (disable) return
      setOpen(!open)

      if (!open === true & onOpen) {
        onOpen()
      }

      if (!open === false && onClose) {
        onClose()
      }
    }, [disable, open, onOpen, onClose]
  )

  useEffect(() => {
    if (toggleRef) {
      toggleRef(toggle)
    }
  }, [toggleRef, toggle])

  const keydown = useCallback(
    evt => {
      if (evt.key === 'Escape') {
        setOpen(false)
      }
    }, []
  )

  useEffect(() => {
    if (open) {
      window.addEventListener('keydown', keydown)
    }

    return () => window.removeEventListener('keydown', keydown)
  }, [open, keydown])

  return (
    <div className={cx('popover', { open })}>
      {children}
    </div>
  )
}

export default memo(Popover)
