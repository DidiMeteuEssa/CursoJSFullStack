import Poster from "./components/Poster"
import Title from "./components/Title"
import Text from "./components/Text"
import Button from "./components/Button"
import "./styles/globals.css"

export default function App() {
  return (
    <div className="main">
      <div className="content">
        <Poster />
        <div className="text">
          <Title />
          <Text />
          <Button />
        </div>
      </div>
    </div>
  )
}