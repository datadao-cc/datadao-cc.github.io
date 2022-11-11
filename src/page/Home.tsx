import { Card } from "flowbite-react";
import Markdown from "../view/Markdown";


function Home() {
  return <div className="container mx-auto max-w-xs sm:max-w-7xl sm:p-4">
    <Card>
      <Markdown src="https://gist.githubusercontent.com/0x50Fc/bae2f7f96945cb96bd551f1f4bd5238b/raw/README.md"></Markdown>
    </Card>
  </div>
}

export default Home;
