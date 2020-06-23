import React, { useState } from "react"
import styled from "styled-components"

const StyledContact = styled.section`
  height: 100vh;
  padding-top: 50px;
  form {
    margin: 0 auto;
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50%;
    @media (max-width: 900px) {
      width: 80%;
      margin: 0 auto;
    }
  }
`
const Contact = () => {
  const [status, setStatus] = useState("")

  const submitForm = (ev) => {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        setStatus("SUCCESS")
      } else {
        setStatus("ERROR")
      }
    }
    xhr.send(data)
  }

  return (
    <StyledContact id="contact">
      <h2>📧 Contact</h2>

      <form
        onSubmit={submitForm}
        action="https://formspree.io/xaypblkl"
        method="POST"
      >
        <label htmlFor="name">Name:</label>
        <input type="name" name="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" />
        <label htmlFor="message">Message:</label>
        <input type="text" name="message" />
        <button>Submit</button>
        {status === "SUCCESS" && (
          <p>🙏 Thank you. I will get back to you ASAP.</p>
        )}
        {status === "ERROR" && (
          <p>💥Ooops! There was an error. Please try again.</p>
        )}
      </form>
    </StyledContact>
  )
}

export default Contact
