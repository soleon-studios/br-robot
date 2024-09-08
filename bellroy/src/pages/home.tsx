import { CharacterPicker, Controls, Grid, Header } from '../components';
import '../App.css';

function Home() {
  return (
    <div className='App'>
      <Header />
      <Grid />
      <Controls />
      <CharacterPicker />
    </div>
  );
}

export default Home;
