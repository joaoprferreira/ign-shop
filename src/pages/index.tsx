import { styled } from "../styles"
import React from "react"

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '3px 3px 3px 3px ',

  span: {
    fontWeight: 'bold'
  },

  '&:hover': {
    filter: 'brightness(0.8)'
  }
})

export default function Home() {
  return (
    <Button>
      <span>test</span>
      Hello word
    </Button>
  )
}