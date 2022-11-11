import { Card } from "flowbite-react";
import Markdown from "../view/Markdown";


function Home() {
  return <div className="container mx-auto max-w-xs sm:max-w-7xl sm:p-4">
    <Card>
      <Markdown src="https://gist.githubusercontent.com/0x50Fc/592590483aafb10f30c29e6905a9dd3c/raw/README.md"></Markdown>
    </Card>
  </div>
}

export default Home;
