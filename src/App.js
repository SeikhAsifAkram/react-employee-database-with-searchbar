import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value,setValue]
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    const newFilteredEmployees = employees.filter((employee) => {
      return employee.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEmployees(newFilteredEmployees);
  }, [employees, searchField])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setEmployees(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }
  

  return(
    <div className="App">
        <h1 className='app-title'>Employee Details</h1>
        
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeholder="Search Employee" 
          className="monsters-search-box" 
        />
      <CardList employees={filteredEmployees} />
      </div>
  ) 
}


export default App;
