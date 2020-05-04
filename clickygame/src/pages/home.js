import React, { Component } from "react"

import Card from "../components/Card"
import db from '../utils/db.json'
import UIContainer from '../components/Container'
class Home extends Component {
    state = {
        db,
        highScore: 0,
        score: 0
    }


    handleSubmit = (id) => {


       let newDb = []      


        if (this.state.score === 0) {
            newDb = this.state.db.map(card => {
                card.clicked = false
                return card
            })
            this.setState({ db: newDb })
            console.log("db", this.state.db)
    
        }
       
             
         newDb = this.state.db.map(card  => {

            if (id === card.id) {

                if (!card.clicked) {
                    this.setState({
                        score: this.state.score + 1
                    })

                    if (this.state.score >= this.state.highScore) {
                        this.setState({
                            highScore: this.state.highScore + 1
                        })
                    }
                    card.clicked = true


                }
                else {
                    this.setState({
                        score: 0

                    })
                }


            }


            return card

        })
        
        newDb.sort((a,b) => {
              
            return Math.random() - 0.5
        })

        console.log("newDb", newDb)

        this.setState({ db: newDb })
        console.log("db", this.state.db)



    }
    render() {
        return (
            <UIContainer>
                <h1>Harry Potter Clicky Game</h1>  
                <h3>Click an image</h3>
                <h2><span>Score: {this.state.score}</span><span> | High Score: {this.state.highScore}</span></h2>
                {console.log("score", this.state.score, "high score ", this.state.highScore)}
                <Card database={this.state.db} handleSubmit={this.handleSubmit} />
                
            </UIContainer>
        )
    }


}

export default Home