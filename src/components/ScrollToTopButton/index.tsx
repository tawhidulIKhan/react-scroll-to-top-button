import React, { useEffect } from 'react'
import 'style.css'

interface Props {
  background?: string
  width?: string
  height?: string
}
export default function ScrollToTopButton(props: Props) {
  const [show, setShow] = React.useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 700) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const config = {
    shadow: true,
    rounded: true,
    circle: false,
  }
  const getClassName = () => {
    const classes = ['st-button']
    if (config.shadow) {
      classes.push('shadow')
    }
    if (config.rounded) {
      classes.push('rounded')
    }
    if (config.circle) {
      classes.push('circle')
    }
    if (show) {
      classes.push('active')
    }
    return classes.join(' ')
  }
  const getStyles = () => {
    const styles = { background: '', width: '56px', height: '56px' }
    if (props.background) {
      styles.background = props.background
    }
    if (props.width) {
      styles.width = props.width
    }
    if (props.height) {
      styles.height = props.height
    }
    return styles
  }

  return (
    <button style={getStyles()} className={getClassName()} onClick={goTop}>
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12.9987 18.7915V7.62148L17.8787 12.5015C18.2687 12.8915 18.9087 12.8915 19.2987 12.5015C19.6887 12.1115 19.6887 11.4815 19.2987 11.0915L12.7087 4.50148C12.3187 4.11148 11.6888 4.11148 11.2988 4.50148L4.69875 11.0815C4.30875 11.4715 4.30875 12.1015 4.69875 12.4915C5.08875 12.8815 5.71875 12.8815 6.10875 12.4915L10.9988 7.62148V18.7915C10.9988 19.3415 11.4488 19.7915 11.9988 19.7915C12.5487 19.7915 12.9987 19.3415 12.9987 18.7915Z'
          fill='white'
        />
      </svg>
    </button>
  )
}
