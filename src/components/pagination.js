import React from 'react'
import Button from './button'

export default ({pageIndex,pages}) => {
    const pageEnd = pages.length -1
    console.log('from pagination',pages,pageIndex)
    
    return (
        <div>
            {pageIndex != 0 && <Button name="next" datePath={pages[pageIndex-1].node.date}  />}
            {pageIndex===pageEnd || <Button name="prev" datePath={pages[pageIndex+1].node.date}  />}           
        </div>
    )
}
