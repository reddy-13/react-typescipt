
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import { Greet } from './components/Greet';
import Heading from './components/Heading';
import { Input } from './components/Input';
import Oscar from './components/Oscar';
import { Person } from './components/Person';
import PersonList from './components/PersonList';
import { Status } from './components/Status';

function App() {
  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameLIst = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  //   {
  //     first: 'Princess',
  //     last: 'Diana'
  //   }
  // ]
  return (
    <div className="App">
      {/* <Status status='loading' />
      <Heading>
        Hehdsjhsjh
      </Heading>
      <Oscar>
        <h2>Ocsar goes to goutham</h2>
      </Oscar>
      <Greet name='GGGG'  isLoggedIn={true} />
      <Button handleClick={(event, id) => {
        console.log(`Button Clicked`, event, id)
      }} />
      <Input value='' handleChange={event => console.log(event.target.value)} /> */}
      <Container styles={{border: '2px solid red', padding: '1rem', color: 'orange'}} />
    </div>
  );
}   

export default App;
