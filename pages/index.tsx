import type { NextPage } from 'next';
import Link from 'next/link'

const Home: NextPage = () => {
    
  return (
    <div 
    style={{gridColumn: '1 / 12'}} 
    dangerouslySetInnerHTML={{__html: `Нажмите на "Зарегистрироваться" -> "Войти" -> email: <b>6650775@gmail.com</b> password: <b>password</b> -> "Войти"`}}
    />
  )
}

export default Home
