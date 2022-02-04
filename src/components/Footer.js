import React from 'react';

export default function Footer() {
  return (<div>

<footer className="bg-dark text-center text-white">
  <div className="container p-4 pb-0">
    <section className="mb-4">

    <a className="btn btn-outline-light btn-floating m-1" href="https://vaheedsk36.herokuapp.com/" role="button"
        ><i className="fas fa-user-circle"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/sk36/" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></a>

      <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/vaheedsk36/" role="button"
        ><i className="fab fa-github"></i
      ></a>
    </section>
    </div>
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © 2022 Copyright Masood Akhtar Vaheed
  </div>
  </footer>


  </div>);
}
