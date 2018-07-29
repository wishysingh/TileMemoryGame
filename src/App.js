import React, { Component } from 'react';
import './App.css';
import TilesList from './TilesList';
import Level from './Level';

class App extends Component {
  constructor()
  {
    super();
    
    this.state={
      color_array:[],
      color_last:'',
      color_current:'',
      index_last:'',
      index_current:'',
      counter:0,
      card_open:[]
    }
  }
  setLevel(num)
  {
    var ar=[];
    var card=[];
    var no=num/2;
    var a=1;
    for(var i=0;i<num;i++)
    {
      if(a>no)
      {
        a=1;
      }
      ar[i]=a;
      a++;
      card[i]='n';
    }
    for(var i1=0;i1<num;i1++)
    {
        var n1=Math.floor(Math.random()*num);
        var n2=Math.floor(Math.random()*num);
        var temp = ar[n1];
        ar[n1] = ar[n2];
        ar[n2] = temp;
    }
    this.setState({color_array:ar,
      card_open:card,
    });
  }
  onTileClick(color,index)
  {
    let a = this.state.card_open.slice();
    a[index] = 'y';
    let b=this.state.counter;
    b++;
    this.setState({
      color_last:this.state.color_current,
      index_last:this.state.index_current,
      color_current:color,
      index_current:index,
      counter:b,
      card_open:a
    },
    () => {
      if(this.state.counter ===2) {
        this.compare();
      }
    }
  )
  }
  compare()
  {
    let a=this.state.color_current;
    let b=this.state.color_last;
    if(a!==b)
    {
      setTimeout(() => {
        let c = this.state.card_open.slice();
        c[this.state.index_current] = 'n';
        c[this.state.index_last] = 'n';
        this.setState({card_open:c ,
          counter:0,
        });
      }, 500)
    } 
    else if(a===b)
    {
      this.setState({counter:0,
        color_last:'',
      index_last:'',
      color_current:'',
      index_current:''
      })
    }
  }
  render() {
    const {card_open,color_array}=this.state;
    console.log(this.state.card_open);
    console.log(this.state.color_last);
    console.log(this.state.index_last);
    console.log(this.state.color_current);
    console.log(this.state.index_current);
    console.log(this.state.counter);
    return (
      <div class = "containers">
        <Level mode={this.setLevel.bind(this)}/>
        <TilesList TileClick={this.onTileClick.bind(this)} arr={card_open} ar={color_array}/>
      </div>
    );
  }
}

export default App;
