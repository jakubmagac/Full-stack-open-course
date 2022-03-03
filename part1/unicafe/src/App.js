import { useState } from 'react'

const StatisticsLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, bad, neutral}) => {
  const getAverage = () => {
    return (
      (good - bad) / (good + neutral + bad)
    )
  }

  const getPositive = () => {
    return (
      (100 / (good + neutral + bad) ) * good
    )
  }

  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good + neutral + bad} />
          <StatisticsLine text="average" value={getAverage()} />
          <StatisticsLine text="positive" value={getPositive()} />
        </tbody>
      </table>
    </>
  )
}



const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button> 
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button> 
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App