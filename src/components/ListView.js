import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  CContainer,
  CSpinner,
  CFormInput,
  CForm,
  CFormLabel,
  CFormSelect,
  CButton,
} from '@coreui/react'

const ListView = () => {
  // State with list of all checked item
  const [checked, setChecked] = useState([])
  const checkList = ['Apple X', 'Apple 12 pro', 'Apple 13 pro', 'Apple 11 pro']

  // Add/Remove checked item from list
  const handleCheck = (event) => {
    var updatedList = [...checked]
    if (event.target.checked) {
      updatedList = [...checked, event.target.value]
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1)
    }
    setChecked(updatedList)
  }

  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ', ' + item
      })
    : ''

  // Return classes based on whether item is checked
  var isChecked = (item) => (checked.includes(item) ? 'checked-item' : 'not-checked-item')

  return (
    <CContainer lg>
      <CForm className="right-side-form">
        <div className="app right-widget">
          <div className="checkList">
            <div className="title"></div>
            <div>
              <div className="mx-2">
                <CFormLabel htmlFor="exampleColorInput">
                  Smart Search <span className="pull-right">...</span>
                </CFormLabel>
                <CFormInput
                  className="rounded-corner"
                  placeholder="type to search here"
                  autoComplete="type to search here"
                />
                <br></br>
                <CFormSelect aria-label="Default select example" className="rounded-corner">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3" disabled>
                    Three
                  </option>
                </CFormSelect>
              </div>
              <br></br>
              <CButton color="success" size="sm" className="rightside-buttons m-2">
                Find
              </CButton>
              <CButton color="danger" size="sm" className="rightside-buttons m-2" shape="pill">
                Reset
              </CButton>
              <br></br>
              <br></br>
            </div>
            <div className="list-container">
              {checkList.map((item, index) => (
                <div key={index}>
                  <input value={item} type="checkbox" onChange={handleCheck} />
                  <span className={isChecked(item)}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* <div>{`Items checked are: ${checkedItems}`}</div> */}
        </div>
      </CForm>
    </CContainer>
  )
}

const rootElement = document.getElementById('root')
// ReactDOM.render(<LiastView />, rootElement)
export default React.memo(ListView)
