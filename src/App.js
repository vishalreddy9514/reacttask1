import {Component} from "react"
import './App.css';

class App extends Component {
  state={count:0}

  onChangeCount = (event)=>{
    if(event.target.value.trim().length===0){
      this.setState({count:0})
    }
    else{
      this.setState({count:event.target.value.trim().split(" ").length})
    }
   
  }
 render(){
  const {count} = this.state
  return (
    <div className="app">
        <div className='word-count-container'>
          <h1 className='word-count-heading'>Responsive Paragraph Word Counter</h1>
          <textarea cols={40} rows={6} className='input-words' onChange={this.onChangeCount}/>
          <p style={{alignSelf:"flex-start",marginLeft: "50px"}}>Word Count:{count}</p>
        </div>
    </div>
  );
 }
  
}

export default App;