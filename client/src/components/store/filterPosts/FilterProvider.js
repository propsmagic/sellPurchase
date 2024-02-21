import React, { useState } from 'react'
import FilterContext from './FilterContext'

const FilterProvider=(props)=> {
    const[value,setValue]=useState("");
    const searchValue = {
      value,
      setValue,
    }

    //console.log(value);
  return (
    <FilterContext.Provider value={searchValue} >
        {props.children}
    </FilterContext.Provider>
  )
}

export default FilterProvider