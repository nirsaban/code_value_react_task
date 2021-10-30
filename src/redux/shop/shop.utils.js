export const addItem = (items , itemToAdd) => {
    itemToAdd['id'] = items.length + 1
    return [...items,{...itemToAdd}]
}


export const removeItem = (items,itemToRemove) => {
      let afterRemove =  items.filter(item => item.id != itemToRemove)        
     return [...afterRemove]
}
export const editItem = (items,newItem) => {
     let newItems  = items.map(item => {
         if(item.id == newItem.id){
             return newItem
         }else{
            return  item
         }
     }) 
     return newItems
}