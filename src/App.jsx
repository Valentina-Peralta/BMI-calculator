import person from './assets/person.png'
import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [system, setSystem] = useState('metric');
  const [BMI, setBMI] = useState()
  const [health, setHealth] = useState('')
  const [minWeight, setMinWeight] = useState()
  const [maxWeight, setMaxWeight] = useState()

  const handleHeightChange = (event) => {
    setHeight(Number(event.target.value));
    if (system === 'imperial') {
      setHeight(Number(event.target.value) * 2.54);

    }
  };

  const handleWeightChange = (event) => {
    setWeight(Number(event.target.value));
    if (system === 'imperial') {
      setWeight(Number(event.target.value) * 0.453592);

    }
  };

  const handleSystemChange = (event) => {
    setSystem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Realizar cualquier acción adicional que desees con los valores

    setBMI((weight / ((height / 100) ** 2)).toFixed(1));
    console.log(BMI)


  };

  useEffect(() => {
    if (BMI < 18.5) {
      setHealth("Your BMI suggests that you're underweight")
    }
    else if (BMI < 25) {
      setHealth("Your BMI suggests that you have a normal weight")
    }
    else if (BMI < 30) {
      setHealth("Your BMI suggests that you`re overweight")
    }
    else {
      setHealth("Your BMI suggests that you have obesity")
    }
    setMinWeight(18.5 * ((height / 100) ** 2).toFixed(1))
    setMaxWeight(25 * ((height / 100) ** 2).toFixed(1))
  }, [BMI])
  return (
    <div className="App">
      <header className="intro-wrapper">
        <div className="intro">
          <h1>Body Mass Index Calculator</h1>
          <p>Better understand our weight in relation to your height using our body mass index (BM)
            calculator. While BMI is note the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.
          </p>
        </div>
        <div className="form-wrapper">
          <h4>Enter your details below</h4>
          <form onSubmit={handleSubmit}>
            <label className="metric">
              <input
                type="radio"
                name="opcion"
                value="metric"
                checked={system === 'metric'}
                onChange={handleSystemChange}
              />
              Metric
            </label>

            <label className="imperial">
              <input
                type="radio"
                name="opcion"
                value="imperial"
                checked={system === 'imperial'}
                onChange={handleSystemChange}
              />
              Imperial
            </label>
            <div className="height">
              <label htmlFor="height">Height</label>
              <input
                type="text"
                placeholder="0"
                value={height}
                onChange={handleHeightChange}
              />
              <span>{system === 'metric' ? 'cm' : 'in'}</span>
            </div>
            <div className="weight">
              <label htmlFor="weight">Weight</label>
              <input
                type="text"
                placeholder="0"
                value={weight}
                onChange={handleWeightChange}
              />
              <span>{system === 'metric' ? 'kg' : 'lbs'}</span>

            </div>
            {BMI ? <div className="welcome">
              <p>Your BMI is...</p>
              <h4>{BMI}</h4>

              <p>{health}. Your ideal weight is between {minWeight}kgs and {maxWeight}kgs.</p>
            </div> : <div className="welcome">
              <h4>Welcome!</h4>
              <p>Enter your height and weight and you'll see your BMI result here</p>
            </div>}

            <button style={{ display: 'none' }} type="submit">Submit</button>
          </form>
        </div>
      </header>
      <main >
        <div className="img-wrapper">
          <img src={person} alt="" />
        </div>
        <div className="text-wrapper">
          <h2>What your BMI result means</h2>
          <p>A BMI range of 18.5 to 24.9 is considered a 'healthy weight'.
            Maintaining a healthy weight may lower your chances of experencing health issues later on, such as
            obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daile for five days a week.
          </p>
        </div>
      </main>
      <aside>
        <div className='habits-wrapper'>
          <div>
            <svg
              className='food'
              version="1.1" id="Uploaded to svgrepo.com" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml: space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <path class="linesandangles_een" d="M25.609,20.046C25.868,19.423,26,18.71,26,18c0-3.589-2.068-6-4-6h-0.996v0.919 c-0.001,0.006-0.103,0.518-0.921,1.507l-3.76-3.76l-3.243,1L4.707,3.293L3.293,4.707l8.373,8.374l-0.999,3.243L14.343,20H13 c-2.206,0-4,1.794-4,4s1.794,4,4,4h12c2.206,0,4-1.794,4-4C29,22.001,27.527,20.341,25.609,20.046z M15.879,18.707l-2.293-2.293 l0.707-0.707L16.586,18L15.879,18.707z M18,16.586l-2.293-2.293l0.707-0.707l2.293,2.293L18,16.586z M25,26H13c-1.103,0-2-0.897-2-2 s0.897-2,2-2h2.414l5.293-5.293c1.015-1.015,1.583-1.829,1.9-2.439C23.263,14.79,24,16.067,24,18c0,0.807-0.317,2-1,2v2h2 c1.103,0,2,0.897,2,2S26.103,26,25,26z"></path> </g></svg>            <h3>Healthy eating</h3>
            <p>Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood</p>
          </div>
          <div>
            <svg
              className='exersise'
              version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml: space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path d="M7,25c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3s3,1.3,3,3v12C10,23.7,8.7,25,7,25z"></path> </g> <g> <path d="M25,25c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3s3,1.3,3,3v12C28,23.7,26.7,25,25,25z"></path> </g> <g> <path d="M23,17H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S23.6,17,23,17z"></path> </g> <g> <path d="M2,10.2c-1.2,0.4-2,1.5-2,2.8v6c0,1.3,0.8,2.4,2,2.8V10.2z"></path> <path d="M30,10.2v11.6c1.2-0.4,2-1.5,2-2.8v-6C32,11.7,31.2,10.6,30,10.2z"></path> </g> </g></svg>            <h3>Regular exersise</h3>
            <p>Exersise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity</p>
          </div>
          <div>
            <svg
              className='sleep'
              viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#000000" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M41.56,38.94A17.37,17.37,0,0,1,26.5,23.14,17.14,17.14,0,0,1,29.57,11.9a.11.11,0,0,0-.11-.16A19.3,19.3,0,1,0,52.41,36.93a.1.1,0,0,0-.14-.12A17.23,17.23,0,0,1,41.56,38.94Z"></path></g></svg>
            <h3>Adequate sleep</h3>
            <p>Sleep enhances mental clarity, emotional stability, and phisical wellness, promoting overall restoration and rejuvenation.</p>
          </div>
        </div>
        <div className='limitations-wrapper'>
          <div className='row-1'>
            <div className='limitations'>
              <h2>Limitations of BMI</h2>
              <p>Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
              </p>
            </div>
            <div className="age">
              <div>
                <svg height="30px" width="30px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 600 512" xml: space="preserve" fill="#ff7b00"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M267.817,171.048c-12.343-12.388-27.371-22.176-44.078-28.53c-7.888,8.766-13.259,19.438-15.502,31.01 c-0.61,3.12-0.976,6.248-1.144,9.361c1.373,0.472,2.716,0.976,4.029,1.548c14.555,6.171,27.051,16.501,35.808,29.515 c7.033,10.405,11.702,22.451,13.274,35.504c0.412,3.257,0.61,6.576,0.61,9.963c0,11.306-2.273,21.956-6.377,31.674 c-5.096,11.985-12.984,22.588-22.886,30.835c-2.105,1.777-4.318,3.426-6.606,4.974c-13.014,8.788-28.546,13.884-45.497,13.884 c-11.275,0-21.909-2.281-31.643-6.378c-14.586-6.171-27.036-16.508-35.824-29.515c-8.758-12.992-13.854-28.561-13.854-45.474 c0-11.298,2.243-21.932,6.362-31.674c5.539-13.075,14.464-24.487,25.678-33.008c-0.214-2.953-0.306-5.905-0.306-8.857 c0-15.165,2.38-29.965,6.912-43.956c-17.348,6.309-32.91,16.34-45.665,29.126c-22.611,22.543-36.648,53.919-36.602,88.37 c-0.045,34.459,13.992,65.835,36.602,88.385c18.827,18.857,43.788,31.696,71.556,35.426v38.952h-57.901v33.55h57.901V512h33.566 v-56.268h57.947v-33.55H196.23v-38.952c27.784-3.73,52.775-16.569,71.587-35.426c6.286-6.286,11.886-13.228,16.752-20.742 c12.587-19.491,19.896-42.781,19.865-67.643c0-5.835-0.412-11.61-1.175-17.24C299.43,214.562,286.583,189.769,267.817,171.048z"></path> <path class="st0" d="M349.015,0v33.551h51.203l-52.912,52.912c-22.276-16.981-49.052-25.564-75.691-25.54 c-31.903-0.024-64.019,12.22-88.37,36.617c-17.424,17.378-28.622,38.714-33.627,61.12c-0.061,0.274-0.091,0.549-0.168,0.778 c-0.198,0.87-0.366,1.747-0.533,2.579c-0.306,1.617-0.58,3.227-0.839,4.836c-0.168,0.969-0.305,1.984-0.412,2.952 c-0.198,1.473-0.366,2.983-0.488,4.493c-0.076,0.87-0.168,1.748-0.213,2.617c-0.03,0.435-0.061,0.877-0.091,1.343 c-0.077,0.877-0.107,1.777-0.138,2.646c-0.061,1.648-0.107,3.326-0.107,4.974c0,1.274,0.046,2.548,0.077,3.852 c0.061,1.282,0.138,2.548,0.198,3.861l0.198,2.822c0,0.466,0.076,0.938,0.106,1.442c2.686,27.874,14.723,55.124,36.037,76.4 c12.908,12.916,28.012,22.436,44.078,28.516c4.866-5.363,8.834-11.572,11.687-18.255c2.944-7.01,4.623-14.426,4.958-22.077 c-10.908-3.921-21.1-10.23-29.888-19.018c-7.949-7.987-13.899-17.118-17.851-26.914c-2.822-6.92-4.638-14.166-5.432-21.475 c-0.518-4.326-0.64-8.689-0.442-13.014c0.061-1.076,0.137-2.113,0.198-3.158c0.076-0.77,0.137-1.541,0.274-2.319 c0-0.298,0.061-0.595,0.092-0.9c0.076-0.74,0.168-1.51,0.305-2.243c0.168-1.007,0.336-2.052,0.534-3.051 c0.884-4.57,2.151-9.063,3.829-13.427c0.306-0.801,0.61-1.571,0.977-2.38c0.336-0.839,0.701-1.678,1.098-2.517 c0.336-0.839,0.733-1.679,1.175-2.487c0.366-0.831,0.808-1.64,1.282-2.441c2.212-4.104,4.822-8.055,7.812-11.817 c0.61-0.77,1.251-1.54,1.877-2.281c1.388-1.579,2.792-3.12,4.302-4.63c1.876-1.877,3.784-3.624,5.767-5.234 c6.5-5.401,13.624-9.635,21.1-12.648c14.662-5.942,30.804-7.453,46.199-4.463c15.41,2.99,29.995,10.36,41.988,22.344 c7.98,7.987,13.884,17.118,17.836,26.906c5.981,14.662,7.492,30.773,4.501,46.176c-3.021,15.394-10.406,29.988-22.337,41.973 c-2.624,2.616-5.37,5.035-8.223,7.178c0.167,2.952,0.259,5.905,0.259,8.818c0.046,15.036-2.35,29.858-6.942,43.956 c16.707-6.042,32.375-15.769,45.726-29.119c24.366-24.327,36.648-56.443,36.617-88.377c0.03-26.647-8.559-53.377-25.571-75.691 l52.912-52.912v51.226h33.55V0H349.015z"></path> </g> </g></svg>
                <h3> Gender</h3>

              </div>
              <p>The developmet and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </div>
          </div>
          <div className='row-2'>

            <div className="age">
              <div>
                <svg fill="#028f00" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>birthday-cake</title> <path d="M28 14.25h-3.25v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-6.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-6.5v-3.25c0-0.414-0.336-0.75-0.75-0.75s-0.75 0.336-0.75 0.75v0 3.25h-3.25c-1.518 0.002-2.748 1.232-2.75 2.75v11c0.002 1.518 1.232 2.748 2.75 2.75h24c1.518-0.002 2.748-1.232 2.75-2.75v-11c-0.002-1.518-1.232-2.748-2.75-2.75h-0zM4 15.75h3.25v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h6.5v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h6.5v2.25c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-2.25h3.25c0.69 0.001 1.249 0.56 1.25 1.25v7.186l-2.719-2.719c-0.142-0.134-0.334-0.217-0.546-0.217-0.021 0-0.042 0.001-0.062 0.002l0.003-0c-0.231 0.023-0.429 0.148-0.549 0.329l-0.002 0.003c-1.664 2.514-3.309 3.809-4.824 3.66-2.324-0.188-3.852-3.52-3.866-3.553-0.121-0.262-0.382-0.441-0.685-0.441s-0.562 0.178-0.682 0.435l-0.002 0.005c-0.016 0.033-1.526 3.322-3.843 3.518-1.497 0.090-3.172-1.129-4.852-3.627-0.123-0.182-0.32-0.305-0.547-0.328l-0.003-0c-0.021-0.002-0.045-0.003-0.070-0.003-0.208 0-0.396 0.083-0.533 0.218l-2.72 2.72v-7.187c0.001-0.69 0.56-1.249 1.25-1.25h0zM28 29.25h-24c-0.69-0.001-1.249-0.56-1.25-1.25v-1.691l3.15-3.151c1.867 2.516 3.791 3.699 5.704 3.543 1.903-0.366 3.477-1.538 4.377-3.14l0.017-0.032c0.918 1.654 2.505 2.842 4.386 3.204l0.040 0.006c0.111 0.008 0.223 0.014 0.334 0.014 2.307-0.29 4.245-1.649 5.327-3.556l0.018-0.035 3.147 3.148v1.69c-0.001 0.69-0.56 1.249-1.25 1.25h-0zM7.991 8.75c1.693-0.040 3.073-1.333 3.249-2.985l0.001-0.015c0-1.132-1.883-3.35-2.692-4.251-0.138-0.153-0.336-0.249-0.558-0.249h-0.001c-0.222 0-0.421 0.097-0.558 0.25l-0.001 0.001c-0.804 0.9-2.673 3.118-2.673 4.249 0.172 1.663 1.544 2.956 3.228 3l0.004 0zM7.993 3.148c0.699 0.744 1.284 1.605 1.723 2.549l0.025 0.060c-0.173 0.833-0.883 1.456-1.746 1.493l-0.004 0c-0.86-0.040-1.565-0.661-1.73-1.478l-0.002-0.012c0.457-1.005 1.039-1.867 1.739-2.617l-0.005 0.006zM15.991 8.75c1.693-0.040 3.072-1.333 3.248-2.985l0.001-0.015c0-1.132-1.882-3.35-2.691-4.251-0.138-0.153-0.336-0.249-0.558-0.249h-0.001c-0.222 0-0.421 0.097-0.558 0.25l-0.001 0.001c-0.804 0.9-2.673 3.118-2.673 4.249 0.172 1.663 1.544 2.956 3.228 3l0.004 0zM15.993 3.148c0.699 0.744 1.284 1.605 1.722 2.549l0.025 0.060c-0.135 0.851-0.863 1.493-1.741 1.493-0.877 0-1.604-0.641-1.739-1.48l-0.001-0.010c0.457-1.005 1.039-1.867 1.739-2.617l-0.005 0.006zM23.99 8.75c1.694-0.040 3.073-1.333 3.249-2.985l0.001-0.015c0-1.132-1.883-3.35-2.691-4.251-0.138-0.153-0.337-0.249-0.559-0.249h-0.002c-0.222 0.001-0.421 0.097-0.558 0.25l-0.001 0.001c-0.803 0.901-2.67 3.118-2.67 4.249 0.171 1.663 1.543 2.955 3.226 3l0.004 0zM23.992 3.149c0.699 0.744 1.285 1.605 1.723 2.548l0.025 0.060c-0.134 0.851-0.862 1.493-1.74 1.493-0.877 0-1.604-0.641-1.739-1.48l-0.001-0.010c0.456-1.004 1.037-1.867 1.737-2.616l-0.005 0.005z"></path> </g></svg>
                <h3>Age</h3>
              </div>
              <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate bosy fat content.</p>
            </div>
            <div className="age">
              <div>
                <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#7d09f1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path class="cls-1" d="M9.14,16.77S8,13.17,10.09,11A14.12,14.12,0,0,1,13,9.13a4.78,4.78,0,1,1,5.61,4.7c-1.83,2.77-5.83,7.71-11.33,7.71C4.36,21.54,1.5,13,1.5,9.13V4.48A2.26,2.26,0,0,1,3.64,2.23c1.73-.09,4,0,4.54,1.17C9,5.11,7.23,8.18,5.32,8.18c0,1.5,1.83,4.76,3.49,6.56"></path></g></svg>
                <h3>Muscle</h3>
              </div>
              <p>BMI may misclassify muscular individuals and overweight or obese, as it doesn't differentiate muscle from fat.</p>
            </div>
          </div>
          <div className='row-3'>
            <div className="age">
              <div>
                <svg height="200px" width="200px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml: space="preserve" fill="#a6b201"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M254.962,145.192c-38.209,36.682-47.168,80.782-47.168,80.782s-78.16,49.137-47.591,157.646h91.854 l13.549,102.607C267.553,500.985,280.129,512,295.004,512h5.189c16.379,0,29.656-13.273,29.656-29.652V383.62h12.053 c0,0,0-189.14,0-233.837C341.902,114.63,290.042,111.517,254.962,145.192z"></path> <path class="st0" d="M305.398,0c-29.542,0-53.493,23.955-53.493,53.493c0,29.546,23.951,53.493,53.493,53.493 c29.542,0,53.49-23.947,53.49-53.493C358.888,23.955,334.94,0,305.398,0z"></path> </g> </g></svg>
                <h3>Pregnancy</h3>
              </div>
              <p>Expectan mothers experience weight gain due their growing baby. Maintaining a healthy pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
            </div>
            <div className="age">
              <div>
                <svg fill="#e600c7" height="200px" width="200px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="-69 0 117 256" xml: space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-10.9,4.9c11.3,0,20.5,9.2,20.5,20.5S0.4,45.9-10.9,45.9s-20.5-9.2-20.5-20.5S-22.2,4.9-10.9,4.9z M14.9,51.2h-51.2 c-14.2,0-25.6,11.4-25.6,25.6v62.6c0,4.9,3.9,9,9,9s9-3.9,9-9V81.9c0-1.4,1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6v155.2 c0,7.7,5.7,14,12.8,14s12.8-6.3,12.8-14v-88.5c0-1.4,1.2-2.6,2.6-2.6c1.4,0,2.6,1.2,2.6,2.6v88.5c0,7.7,5.7,14,12.8,14 c7.1,0,12.8-6.3,12.8-14V81.9c0-1.4,1.2-2.6,2.6-2.6s2.6,1.2,2.6,2.6v57.6c0,4.9,3.9,9,9,9s9-3.9,9-9V76.8 C40.5,62.6,28.8,51.2,14.9,51.2z"></path> </g></svg>
                <h3>Race</h3>
              </div>
              <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
