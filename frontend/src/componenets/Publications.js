import React from 'react'
import Header from './Header'
import './Header.css'
export default function Publications() {
  return (
    <div className='container '>
    <Header />
    <div className="col col-7">
    <div class="publications-section">
  <h1 class="section-title"><span>PUBLICATIONS</span></h1>

  <div class="publication">
    <h3 class="publication-title">Optimization Toolbox Solvers in MATLAB for Nonlinear Constraints and Objective Functions</h3>
    <p class="authors"><b>Dwaipayan Bhowmik</b>, Goutam Mandal, Anup Kumar Thander</p>
    <p class="journal-details">
      <strong>Published in:</strong> Moenia Journal, Volume 10, Issue 7, Pages 164-170, 2023<br />
      <strong>Publisher:</strong> Universidade de San-Tiago de Compostela (Scopus Indexed)
      <br />
      <br />
      <a href="https://drive.google.com/file/d/15d010EHGEruH0KrwO43Ki99MUMc3pWXY/view?usp=sharing" 
      class="pdf-button" rel="noreferrer" target="_blank">
        View</a>

    </p>
  </div>
 <br></br>
  <div class="publication">
    <h3 class="publication-title">Artificial Neural Network with the Levenberg-Marquardt Algorithm for Numerical Solution of Two-Dimension Poisson's Equation</h3>
    <p class="authors">Dwaipayan Bhowmik, Anup Kumar Thander</p>
    <p class="journal-details">
      <strong>Published in:</strong> BOHR International Journal of Smart Computing and Information, Volume 4, Issue 1, Pages 55-61, 2023
    </p>
    <br />
    <a href="https://journals.bohrpub.com/index.php/bijscit/article/view/444/3537" 
    rel="noreferrer"class="pdf-button" target="_blank">View</a>
  </div>
</div>
    </div>
    </div>
  )
}
