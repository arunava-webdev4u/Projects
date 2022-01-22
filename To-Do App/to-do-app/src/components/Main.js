import React, { Component } from 'react';
import ListItem from './ListItem';

export class Main extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            List: [],
            currentItem: {
                input: '',
                key: ''
            }
        }
    }

    // handleSubmit = (event) => {
    //     event.preventDefault()
    // }
    
    handleInput = (event) => {
        this.setState({
            currentItem: {
                input: event.target.value,
                key: Date.now()
            }
        })
    }

    addTask = (event) => {
        event.preventDefault()
        const newTask = this.state.currentItem;
        if (newTask.input !== "") {
            const newList = [...this.state.List, newTask];
            this.setState({
                List: newList,
                currentItem: {
                    input: '',
                    key: ''
                }
            })
        }
        console.log(event)
    }

    deleteItem = (key) => {
        const NewList = this.state.List.filter(item => item.key !== key)
        this.setState({
            List: NewList
        })
    }

    render() {
        return (
            <main>
                <div className="box">
                    <div className='form-div'>
                        <form className='form'>
                            <input type='text' value={this.state.input} onChange={this.handleInput} placeholder='Enter text...' />
                            <button type='submit' onClick={this.addTask}>+add</button>
                        </form>
                    </div>
                    <div className='body-div'>
                        <ListItem list={this.state.List} deleteItem={this.deleteItem}/>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;
