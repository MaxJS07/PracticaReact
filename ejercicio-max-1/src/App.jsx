import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Button from './components/Button'
import AccordionItem from './components/AcorddionItem'
import Card from './components/Card'
import TextInput from './components/TextInput'
import Select from './components/Select'
import Checkbox from './components/Checkbox'
import './App.css'
import RadioButton from './components/RadioButton'

function App() {


  const selectData = [
    {value: "ES", text: "El Salvador"},
    {value: "HN", text: "Honduras"},
    {value: "US", text: "Estados Unidos"}
  ]

  const accordionData = [
    {
      id: 'collapseOne',
      title: 'Botones',
      content: <div className="gap2">
                <Button text="Boton 1" />
                <Button text="Boton 2" />
                <Button text="Boton 3" />
                <Button text="Boton 4" />
                <Button text="Boton 5" />
      </div>,
      open: false 
    },
    {
      id: 'collapseTwo',
      title: 'Tarjetas',
      content: <div className='d-flex gap-3'>
        <Card cardImg="https://picsum.photos/seed/picsum/200/300" cardText= "Ejemplo de tarjeta 1"></Card>
        <Card cardImg="https://picsum.photos/seed/picsum/200/300" cardText= "Ejemplo de tarjeta 2"></Card>
        <Card cardImg="https://picsum.photos/seed/picsum/200/300" cardText= "Ejemplo de tarjeta 3"></Card>
      </div>,
      open: false
    },
    {
      id: "collapseThree",
      title: "Inputs de texto",
      content: <div>
        <TextInput id="email" type="email" label="Correo" placeholder="ejemplo@gmail.com"></TextInput>
        <TextInput id="name" type="text" label="Nombre" placeholder="Ingrese su nombre"></TextInput>
      </div>
    },
    {
      id: "collapseFour",
      title: "Selects",
      content: <div>
        <Select id="Select1" options={selectData}></Select>
      </div>,
      open: false
    },
    {
      id: "collapseFive",
      title: "Checkboxes",
      content: <div>
        <Checkbox id="Checkbox1" label="Checkbox número 1"></Checkbox>
        <Checkbox id="Checkbox2" label="Checkbox número 2"></Checkbox>
        <Checkbox id="Checkbox3" label="Checkbox número 3"></Checkbox>
      </div>
    },
    {
      id: "collapseSix",
      title: "Radio buttons",
      content: <div>
        <RadioButton id="Radio1" label= "Radio button 1" groupName="radioGroup1"></RadioButton>
        <RadioButton id="Radio2" label= "Radio button 2" groupName="radioGroup1"></RadioButton>
        <RadioButton id="Radio3" label= "Radio button 3" groupName="radioGroup1"></RadioButton>
        <RadioButton id="Radio4" label= "Radio button 4" groupName="radioGroup1"></RadioButton>
      </div>
    }
  ]

  return (
    <>
      <div className="my-3">
        <p className="text-center fs-2 fw-bold text-primary">EJERCICIO 1 - COMPONENTES</p>
      </div>
      
      <div className="accordion mx-5" id="accordionExample">
        {accordionData.map((item) =>(
          <AccordionItem
            key= {item.id}
            id= {item.id}
            title= {item.title}
            parentId= "accordionExample"
            isOpen = {item.open}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    </>
  )
}

export default App
