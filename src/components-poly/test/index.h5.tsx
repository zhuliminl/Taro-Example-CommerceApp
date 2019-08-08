
import Taro, { Component } from '@tarojs/taro'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface TestInterface {
}

export default class Test extends Component<TestInterface,{}> {
  notify = () => toast("Wow so easy !")

  componentDidMount = () => {
  }

  render() {
    return (
      <div>
         <button onClick={() => {

         }}>Notify !</button>
          {/* <ToastContainer /> */}
      </div>
    )
  }
}
