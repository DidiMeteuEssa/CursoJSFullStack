import Poster from "./Poster"
import Title from "./Title"
import Text from "./Text"
import Button from "./Button"
import "../styles/globals.css"

export default function Card() {
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
