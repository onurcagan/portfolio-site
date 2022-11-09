import { ArrowUpIcon } from '@chakra-ui/icons'
import { Container, IconButton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <>
      {showTopBtn && (
        <IconButton
          aria-label="scroll to top"
          icon={<ArrowUpIcon />}
          size="lg"
          position="fixed"
          bottom="2rem"
          right="2rem"
          onClick={goToTop}
        />
      )}
    </>
  )
}
