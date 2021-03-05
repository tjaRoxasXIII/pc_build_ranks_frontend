import React from 'react';

const SearchResults = props => {
  let cpus = props.location.state.results.cpus.slice(0, 5)
  let gpus = props.location.state.results.gpus.slice(0, 5)
  let computers = props.location.state.results.computers.slice(0, 5)
  debugger
  return (
      <div>
        <h1>Search Results</h1>
        <hr />
        <h2>Processors:</h2>
        {cpus.map(cpu => {
          return(
            <ul>
              {cpu.model}
            </ul>
          )
        })}
        <ul><a href="#">See more</a></ul>
        <h2>Graphics Cards:</h2>
        {gpus.map(gpu => {
        return(
            <ul>
              {gpu.model}
            </ul>
          )
        })}
        <ul><a href="#">See more</a></ul>
        <h2>Computers:</h2>
        {computers.map(computer => {
          return(
            <ul>
              {computer.name}
            </ul>
          )
        })}
        <ul><a href="#">See more</a></ul>
      </div>
  )
};

export default SearchResults;