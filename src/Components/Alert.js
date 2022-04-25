import React from 'react'

function Alert(props) {
    /*Capatalize function is made a=to make the first letter of alert type as caps*/
    const capatalize=(word)=>{
        const lower=word.toLowerCase(); /*Taking the entire word and convering it to lowercase*/
        return lower.charAt(0).toUpperCase() + lower.slice(1); /*Taking first char of that word and converting to uppercase and by slice it means except the 1st char take other as they are*/
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> {/* it means the stataement before && is true then only the next statement will be calculated , if alert is having value then it will move forward or if it is null than no further evauation */}
   <strong>{capatalize(props.alert.type)}:{props.alert.msg}</strong> 
 
  </div>
  )
}

export default Alert