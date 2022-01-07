class Boxes extends React.Component{
    render(){
        return(
            <div class = "gridSystem">
                <div class="tallRect">
                    <h3>Dashboard</h3>
                    <h3>Widget</h3>
                    <h3>Reviews</h3>
                    <h3>Customers</h3>
                    <h3>Online Analysis</h3>
                    <h3>Settings</h3>

                
                </div>
                    <div class ="moveRight">
                    <div class = "cards">

                <div class="Reviews">
                    <h4>Reviews</h4>
                    <h2>1,281</h2>
                    </div>         

                <div class="avRat">
                    <h4>Average Rating</h4>
                    <h2>4.6</h2>
                    </div>

                <div class="sentAnal">
                    <h4>Sentiment Analysis</h4>
                    <h2>960</h2>
                    <h2>122</h2>
                    <h2>321</h2>
                    </div>
                
                
                    </div>

                <div class="fallenRectOuter">
                    <h2>Website Visitors</h2> <h1>821</h1>
                <div class="fallenRectInner"></div>
                </div>
                    </div> 
            </div>
        )
    }
}

ReactDOM.render(
  <Boxes />,
  document.querySelector("#container")  
)