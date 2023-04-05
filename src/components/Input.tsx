import React from "react"

type InputProps = {
    value: string,
    handleChange :(event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
    }
  return (
    <input type="text" name="input" value={props.value} onChange={props.handleChange} />
  )
}