import { useState } from 'react'

const Header = ({text}) => <div><h1>{text}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Total = (props) => {
  return (
    (props.good + props.neutral + props.bad)
  )
}

const Average = (props) => {
  return (
    (props.good*1 + props.neutral*0 + props.bad*(-1)) / (props.good + props.neutral + props.bad)
  )
}

const Positive = (props) => {
  return (
    (100*(props.good / (props.good + props.neutral + props.bad))) + " %"
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div> 
  )
}

const Statistics = (props) => {
  
  return (
   
    <div>
      <table>
        <tbody>
          <tr>
            <td><StatisticLine text="good" value={props.good}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="bad" value={props.bad}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="all" value={Total(props)}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="average" value={Average(props)}/></td>
          </tr>
          <tr>
            <td><StatisticLine text="positive" value={Positive(props)}/></td>
          </tr>
        </tbody>
      </table> 
    </div>
  )
}

const History = (props) => {
  if (props.good === 0 & props.neutral === 0 & props.bad === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div><Statistics good={props.good}
                     neutral={props.neutral}
                     bad={props.bad} /></div> 
  )
}

const App = () => {
  const feedback = 'give feedback'
  const statistics = 'statistics'
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={feedback} />
    <div>
      <Button handleClick={() => setGood(good + 1)}
      text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)}
      text="neutral" />
      <Button handleClick={() => setBad(bad + 1)}
      text="bad" />
      <Header text={statistics} /> 
      <div><History good={good}
                      neutral={neutral}
                      bad={bad} /></div>          
    </div>
    </div>
  )

}

export default App