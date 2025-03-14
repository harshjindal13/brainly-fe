import './App.css'
import { PlusIcons } from "./icons/PlusIcon";
import { Button } from "./components/Button";
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';
function App() {

  return (
      <div>
        <Button variant="primary" text="Add content" startIcon={<PlusIcons />}></Button>
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon />}></Button>
        <Card />
      </div>
  )
}

export default App
