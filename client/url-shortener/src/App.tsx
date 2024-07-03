import Container from './components/Containter'
import Footer from './components/Footer'
import Header from './components/Header'

type Props = {}

export default function App({}: Props) {
  return (
    <div>
      <Header />
      <Container/>
      <Footer/>
    </div>
  )
}