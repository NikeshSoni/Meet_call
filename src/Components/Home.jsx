import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

import { styles } from './constant';
import Image from "../assets/Illustration.png"

const Home = () => {

  const navigate = useNavigate()

  const [input, setInput] = useState("")

  const submitHandler = () => {
    navigate(`/room/${input}`)
  }

  return (
    <div>
      {/* <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='enter your name...' />

        <button onClick={submitHandler}>
          Join Now
        </button>
      </div> */}
      <div style={styles.container}>
        <div style={styles.leftPanel}>
          <img
            src={Image}
            alt="Illustration"
            style={styles.illustration}
          />
        </div>

        <div style={styles.rightPanel}>
          <h2 style={styles.heading}>Welcome to <span style={styles.highlight}>Over Digital World</span></h2>
          <p style={styles.registerText}>
            Engineered a user-friendly online conferencing tool integrating ZugoCloud with React for real-time communication
          </p>
          {/*
          <div style={styles.socialLoginButtons}>
            <button style={styles.googleButton}>Login with Google</button>
            <button style={styles.facebookButton}>Login with Facebook</button>
          </div> */}

          {/* <p style={styles.orText}>OR</p> */}

          <form style={styles.form}>
            <input type="text" value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='enter your name...' style={styles.input} />

            <button type="submit" onClick={submitHandler} style={styles.loginButton}>Join Now</button>
          </form>


        </div>
      </div>
    </div>
  )
}

export default Home
