import { useState, useEffect, useRef } from 'react'

export const useLogic = (startingTime = 20) => {

  const [text, setText] = useState('')
  const [time, setTime] = useState(startingTime)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  const handleChange = (e) => {
    const { value } = e.target
    setText(value)
  }

  const countWords = (str) => {
    const words = str.trim().split(" ")
    return words.filter(word => word !== "").length
  }

  const startGame = () => {
    setIsTimeRunning(true)
    setTime(startingTime)
    setText('')
    setWordCount(0)
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  const endGame = () => {
    setIsTimeRunning(false)
    setWordCount(countWords(text))
  }

  useEffect(() => {
    if(isTimeRunning && time > 0) {
      setTimeout(() => {
        setTime(oldTime => oldTime - 1)
        }, 1000)
    } else if(time === 0) {
      endGame()
    }
  }, [time, isTimeRunning])

  return {
    handleChange,
    startGame, 
    wordCount, 
    text, 
    textBoxRef, 
    isTimeRunning,
    time
  }
}