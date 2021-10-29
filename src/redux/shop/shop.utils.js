export const addItem = (items , itemToAdd) => {
    itemToAdd['id'] = items.length + 1
    return [...items,{...itemToAdd}]
}


export const removeItem = (items,itemToRemove) => {
      let afterRemove =  items.filter(item => item.id != itemToRemove)        
     return [...afterRemove]
    }