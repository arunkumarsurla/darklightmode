import {Component} from 'react'
import './index.css'

class DarkLightMode extends Component{
    state = {
        isLightMode : true
    }

    onChange = () => {
        this.setState(prevState =>({
            isLightMode: !prevState.isLightMode
        }))
        // or
        // this.setState({
        //     isLightMode: !isLightMode
        // })
    }

    render(){
        const {isLightMode} = this.state
        return(
                  <div className={`container ${isLightMode ? "dark-mode" : "light-mode"}`}>
                    <div className={`container $ {isLightMode ? "dark-mode" : "light-mode"}`}>
                      <h1 className="heading">Click To Change Mode</h1>
                      <button type="button" onClick={this.onChange} className="button">
                        {!isLightMode ? "Enable DarkMode" : "Enable Light Mode"}
                      </button>
                    </div>
                  </div>
                )
              }
        
        }

export default DarkLightMode