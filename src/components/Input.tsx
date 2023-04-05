import React, { useState } from "react"

type InputProps = {
    value: string,
    handleChange :(event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({value , handleChange }: InputProps) => {
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log();
    }
  return (
    <input type="text" name="input" value={value} onChange={handleChange} />
  )
}
