import React, { Component } from 'react';
import './App.css';
import ArrowKeysReact from 'arrow-keys-react';
class Simple extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,image:[{index:101,imageURL:"https://cdn.shopify.com/s/files/1/2331/3573/products/Strawberry-Transparent-Background.png?v=1505654837"},
       {index:102, imageURL : "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/12/10/campaign_images/webdr06/which-fruit-matches-your-personality-2-7554-1426171034-0_dblbig.jpg" },
       {index:103, imageURL : "https://arpicosupercentre.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/6/8/68035_3.jpg" },
       {index:104, imageURL : "https://o.aolcdn.com/images/dims3/GLOB/crop/813x407+17+114/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F260da1b226e6a9d1cca56b4476bb6f54%2F202587887%2FFD005086.jpg"},
       {index:105, imageURL : "https://www.mensjournal.com/wp-content/uploads/mf/_power_fruit_pomegranate_0.jpg"},
        {imageURL :""} ], previcone:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-left-icon.png",nexticon:"http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-right-icon.png"}

        ArrowKeysReact.config({
      left: () => {
        if (this.state.clicks===0) {
      this.setState({clicks:5}); 
    }else
    {
    this.setState({ clicks: this.state.clicks - 1 });
  }
     
      },
      right: () => {
          if (this.state.clicks===5) 
    {
         this.setState({clicks:0});  
    }else
    {
       this.setState({ clicks: this.state.clicks + 1 });
    }
      }
   });

  }
  IncrementItem = () => {if (this.state.clicks===5) 
    {
         this.setState({clicks:0});  
    }else
    {
       this.setState({ clicks: this.state.clicks + 1 });
    }

  }
  DecreaseItem = () => {
    if (this.state.clicks===0) {
      this.setState({clicks:5}); 
    }else
    {
    this.setState({ clicks: this.state.clicks - 1 });
    }
  }

    render() {
    return (
     
      <div {...ArrowKeysReact.events} tabIndex="1"  >

        
        <button className="prev-button" onClick={this.DecreaseItem}><img className="icone-size-prev" src={this.state.previcone}/> </button><br/>
      
        <img className="image-size" src ={this.state.image[this.state.clicks].imageURL} alt="image not found" />
id No:{this.state.image[this.state.clicks].index} 
       <button className="next-button" onClick={this.IncrementItem}><img className="icone-size-next" src={this.state.nexticon} /></button>
   
               
      </div>
    );
  }

}

export default Simple;