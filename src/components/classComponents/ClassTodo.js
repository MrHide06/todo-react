import React from 'react'
import '../../App.scss'
import ListItems from '../classComponents/ListItemsClass'
import Form from 'react-bootstrap/Form'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class ClassTodo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.setUpdate = this.setUpdate.bind(this);
    }
    handleInput= (event) =>{
        this.setState({
            currentItem:{
                text:event.target.value,
                key:Date.now()
            }
        })
    }
    addItem = (event) =>{
        event.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text !==""){
            const newItems=[...this.state.items, newItem];
            this.setState({
                items:newItems,
                    currentItem:{
                        text:'',
                        key:''
                    }
                }
            )
            console.log(newItems)
        }
        
    }
    deleteItem=(key) =>{
        const filteredItems = this.state.items.filter(item =>
            item.key!==key);
        this.setState({
            items:filteredItems
        })
    }
    setUpdate=(text, key)=>{
        const items = this.state.items;
        items.map(item =>{
            if(item.key===key){
                item.text=text;
            }
        })
        this.setState({
            items:items
        })
    }
    
    render(){
        return(
            <div>
                <header>
                    <Form className="todoform" onSubmit={this.addItem}>
                        <input type="text" placeholder="Class Todo" 
                            value={this.state.currentItem.text}
                            onChange={this.handleInput}
                            className="inputC"
                        />
                        <button type="submit" className="buttonC">Add</button>
                    </Form>
                </header>
                <ListItems items={this.state.items} 
                    deleteItem={this.deleteItem}
                    setUpdate={this.setUpdate}
                />
            </div>
        )
    }
}

export default ClassTodo;