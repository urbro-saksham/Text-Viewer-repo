1. Props
      -->To Add Props 1st you need to pass it as parameter in ur componenet,
      --> Then in App.js u give them value
      --> if u dont want to directly use it then 
            'const { title } = props
            const check = { title: props.title };'  initialize it


2. Events
      --> OnClick , Onchange, u can more events like this..
      --> We can add events directly in HTML
             --> <button onClick={ToUp}> CLICK </button>

3. Hooks
     --> useState
         --> 1st import (import { useState } from "react")
         --> Then use it, const[customName , setName] = useState();
         --> Inside () in useState u can pass no.,string,char,objects,Arrays, etc...
         --> when u want to change use 'setName' 
4. Style object 
    --> 1. U can pass style through object and use it whenever u want

        --> let Cstyle = {
                  color: 'white',
                  backgroundColor: 'black'
        } 

        --> <button style = {Cstyle}> click <button/> 

    --> 2. U can also pass this in Hook 

        -->  const[Cstyle , setStyle] = useState(
            {
                  color: 'white',
                  backgroundColor: 'black'
        } 
        )

        --> <button style = {Cstyle}> click <button/> 

5. 