import { useState, useEffect } from "react"

export default function NewDropdown ({categorys}){
  const category = categorys
    console.log(category)
  return(
    
    <select name="cars" className="w-full rounded-sm">
                        <option ></option>
                      
                    </select> 
  )
}