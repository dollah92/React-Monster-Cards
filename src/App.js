import { Component } from 'react';
import CardList from './components/card-list/card-list.compo'
import SearchBox from './components/search-box/search-box-compo'
import './App.css';
class App extends Component {

  constructor() {
    
    super();

    this.state = {
      monsters: [] ,
      searchField :''

    };
  
  }

  componentDidMount() {
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
        () => {
          return { monsters: users };
        
        },
          () => {
            console.log(this.state);
        }
      ));
  }


 onSearchChange =  (event) => {
         const searchField = event.target.value.toLocaleLowerCase();
         
          this.setState(() => {
            return { searchField }
          });
        }


  render() {
// console.log('render from App');


const { monsters, searchField} = this.state;
const {onSearchChange} = this;


  const filteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
   });



    return (
      
      <div className="App">

        <h1 className='app-title'>Monsters Cards</h1>

        < SearchBox
          className='monsters-search-box'
          onChangehandler={onSearchChange}
          placeholder='serch monsters' />
        <CardList monsters={filteredMonsters} />
       
      </div>
    );
    }
  
}

export default App;
