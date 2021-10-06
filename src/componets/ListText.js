import React, { useState } from 'react'
import Text from './Text'

const ListText = () => {
    const [Texts, setTexts] = useState([
       { id:1,content:"Text 1 😄"},
       { id:2,content:"Text 2 😄"},
       { id:3,content:"Text 3 😄"}
    ])

    //delete text
    const deleteTextById = (textId)=>{
        //are yuou sure 
        if(window.confirm("Are you sure ?")===false) return 

        // alert(textId)
        let newList = [...Texts]
        //suppression fel copie 
        newList = newList.filter((t)=>t.id!=textId)
        //update state
        setTexts([...newList])
    }
    return (
        <div>
            {
                Texts.map(txt=>(
                <Text 
                    key={txt.id}
                    id={txt.id}
                    title={txt.content}
                    onDeleteText={deleteTextById}/>
                ))
            }
        </div>
    )
}

export default ListText
