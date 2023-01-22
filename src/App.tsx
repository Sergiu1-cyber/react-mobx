import {observer} from 'mobx-react-lite'
import Counter from './store/Counter'

const App = observer(() => {
  
  return (
    <div>
      <h1>React + Mobx + Vite</h1>
      <h1 className='text-red-500'>Count: {Counter.count}</h1>
      <br/>
      <button onClick={() => Counter.increment()}>incr</button>
      <br/>
      <button onClick={() => Counter.decrement()}>decr</button>
    </div>
  )
})

export default App
