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
import Alert from './components/Alert'
import Form from './components/Form'
import Badge from './components/Badge'

function App() {

  const handleFormSubmit = (data) => {
    console.log("Datos del formulario:", data);
  };

  const formFields = [
    {name: "email", label: "Email", type: "email"},
    {name: "password", label: "Password", type: "password"},
    {name: "remember", label: "Recordarme", type: "checkbox"}
  ]

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
    },
    {
      id: "collapseSeven",
      title: "Alertas",
      content: <div>
        <Alert alertType="alert-primary" text="Esta es una alerta con color azul"></Alert>
        <Alert alertType="alert-danger" text="Esta es una alerta de peligro"></Alert>
        <Alert alertType="alert-warning" text="Esta es una alerta de precaución"></Alert>
      </div>
    },
    {
      id: "collapseEight",
      title: "Forms",
      content: <div>
        <Form fields={formFields} onSubmit={handleFormSubmit}></Form>
      </div>
    },
    {
      id: "collapseNine",
      title: "Badges",
      content: <div>
        <h1>Este es un titulo nivel uno con un badge <Badge extraClasses="text-bg-secondary" text="Nuevo!"></Badge></h1>
        <h2>Este es un titulo nivel dos con un badge <Badge extraClasses="text-bg-secondary" text="Nuevo!"></Badge></h2>
        <button type="button" class="btn btn-primary position-relative">
          Mensajes
          <Badge extraClasses={"position-absolute top-0 start-100 translate-middle rounded-pill bg-danger"} text={"+99"}/>  
        </button>
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
