import { FormControl, OutlinedInput } from '@mui/material'
const Input = ({placeholder="hello", defaultValue="", value="", cb=()=>{},name="",fullWidth=false, multiline=false, minRows=8}) => {

  return (
    <FormControl
    fullWidth={fullWidth}
 
                sx={{
                  boxSizing: "border-box",
                  borderRadius: "10px",
                  background: "#F8F7F0",
                  p:"0"
                }}
              >
                <OutlinedInput
                defaultValue={defaultValue}
                value={value}
                onChange={cb}
                   multiline={multiline}
                   minRows={minRows}
                   name={name}
                className="CustomInput manRope500"
                  sx={{
                    color:"#878680",
                    fontSize:"14px",
                    p:"18px 30px",
                    border: "0px",
                    outline: "none",
                    "&.Mui-focused": {
                      border: "0px",
                      outline: "none",
                    },
                    "&.Mui-hover": {
                      border: "0px",
                      outline: "none",
                    },
                  }}
                  placeholder={placeholder}
                />
              </FormControl>
  )
}

export default Input