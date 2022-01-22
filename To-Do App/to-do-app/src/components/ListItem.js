import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"

function ListItem(props) {
    const {list} = props
    const listItems = list.map(item => {
        return (
            <div className='listItemBox' key={item.key}>
                <div className='listItem'>{item.input}</div>
                <div className='deleteIcon'>
                    <FontAwesomeIcon icon={faTrashAlt} onClick={ () => props.deleteItem(item.key) }/>
                </div>
            </div>
        )
    });
    
    return <>{listItems}</>
}

export default ListItem;