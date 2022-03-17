import React, { DetailedHTMLProps, ImgHTMLAttributes, ReactNode} from 'react'
import { Container, Date, Resume, Title } from './styles'

interface newsProps {
  image: string | undefined,
  title: string,
  resume: string,
  alt: string,
  date: string,
}

export function News(props: newsProps) {
  return (
    <Container>
      <img src={props.image} alt={props.alt} />
      <Date>{props.date}</Date>
      <Title>{props.title}</Title>
      <Resume>{props.resume}</Resume> 
      </Container>
  )
}

