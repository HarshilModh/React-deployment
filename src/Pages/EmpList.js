import React from 'react'
import { Emp } from './Emp'

export const EmpList = (props) => {
    return (
        <div>
            {props.empList.length <=0 ?"No employees found":

            props.empList.map((Emps)=>{

                return <Emp emp={Emps}/>
            })

            }
        </div>
    )
}
