import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// class Introduction extends Component{
//
//     render(){
//         return(
//             <div>
//                 <h1>this is a introduction of {this.props.name}</h1>
//                 <ul>
//                     <li>the first line</li>
//                     <li>the second line</li>
//                     <li>the third line</li>
//                 </ul>
//             </div>
//         );
//     }
// }

class Board extends Component{
    constructor(props){
      super(props);
      this.state={square: Array(9).fill(null),}
    }

    handleClick(i){
      const square = this.state.square.slice();
      square[i]='x';
      this.setState({square:square});
    }

    renderSquare(i){
        return(
            <Square value={this.state.square[i]} onClick={()=>{this.handleClick(i)}}/>
        );
    }

    render(){
        return(
          <div>
            <div className="status">"this is my first job"</div>
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
        );
    }
}

class Square extends Component{

    render(){
        return(
            <button className="square" onClick={() => {this.props.onClick()}}>
                {this.props.value}
            </button>

        );
    }
}

class Game extends Component{
    render(){
        const show = "this is a game"
        return(
            <div>
              <body>
                <h1>{show}</h1>
                <Board/>
              </body>
            </div>
        );
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));
registerServiceWorker();
