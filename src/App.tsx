import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {
let items = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
const handleSelectItem = (item: string) => {
  console.log(item);
}
const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} >
      </ListGroup>
      <Button onClick={() => console.log('Clicked')}>
        Click me
      </Button>
      <br></br>
      <br></br>
      {alertVisible && <Alert onClose = {() => setAlertVisibility(false)}>My alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>
        Aler
      </Button>
    </div>
  )
}


export default App;