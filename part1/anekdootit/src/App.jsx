import { useState } from 'react'

const Header = ({text}) => <div><h2>{text}</h2></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(new Uint8Array(8))
  const [winner, setWinner] = useState(0)

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVote(copy)
  
    let max = copy[0]
    let maxIndex = 0
  
    for (var i = 1; i < copy.length; i++) {
        if (copy[i] > max) {
            maxIndex = i
            max = copy[i]
        }
    }
    setWinner(maxIndex)

  }

  return (
    <>
    <div>
    <Header text={"Anecdote of the day"} />
    </div>
    <div>
    {anecdotes[selected]}
    <div>
    has {votes[selected]} votes
    </div>  
    <button onClick={handleVote}>vote</button>
    <button onClick={() => setSelected(Math.floor(Math.random() * 8))}>
    next anecdote
    </button>
    <div>
    <Header text={"Anecdote with most votes"} />
    {anecdotes[winner]}
    <div>
    has {votes[winner]} votes
    </div>  
    </div> 
    </div>
    </>
  )
}

export default App
