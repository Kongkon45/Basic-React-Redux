import './Counter.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../Services/actions/actionsCounter'
const Counter = () => {
    const count = useSelector((state)=>state.count)
    // console.log(count)
    const dispatch = useDispatch();
    const Increment = ()=>{
        dispatch(incrementCounter())
    }
    const Decrement = ()=>{
        dispatch(decrementCounter())
    }
    const Reset = ()=>{
        dispatch(resetCounter())
    }
  return (
    <div>
        <h1 className='text-center my-8 text-4xl font-bold '>Counter App</h1>
        <div className='w-2/5 mx-auto bg-orange-400 p-12 rounded-3xl'>
            <h1 className='text-center text-2xl font-semibold my-4'>Count : {count}</h1>
            <div className='flex justify-center'>
                <button className='bg-green-500 mx-auto hover:bg-green-700 px-6 py-2  rounded-2xl  text-white text-2xl font-bold' disabled={count===5? true:false} onClick={Increment}>Increment</button>
                <button className='bg-green-500 mx-auto hover:bg-green-700 px-6 py-2 rounded-2xl  text-white text-2xl font-bold' disabled={count===-5? true:false} onClick={Decrement}>Decrement</button>
                <button className='bg-red-500 mx-auto hover:bg-red-700 px-6 py-2 rounded-2xl  text-white text-2xl font-bold' onClick={Reset}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Counter