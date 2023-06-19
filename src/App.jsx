import person from './assets/person.png'
import './App.css'

function App() {

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
          <form action="">
            <label className='metric'>
              <input type="radio" name="opcion" value="metric" checked />
              Metric
            </label>

            <label className='imperial'>
              <input type="radio" name="opcion" value="imperial" />
              Imperial
            </label>
            <div className="height">
              <label htmlFor="height">Height</label>
              <input type="text" placeholder='0' />
            </div>
            <div className="weight">
              <label htmlFor="weight">Weight</label>
              <input type="text" placeholder='0' />
            </div>
            <div className="welcome">
              <h4>Welcome!</h4>
              <p>Enter your height and weight and you'll see your BMI result here</p>
            </div>
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
              <h3>Gender</h3>
              <p>The developmet and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.</p>
            </div>
          </div>
          <div className='row-2'>

            <div className="age">
              <h3>Age</h3>
              <p>In aging individuals, increased body fat and muscle loss may cause BMI to underestimate bosy fat content.</p>
            </div>
            <div className="age">
              <h3>Muscle</h3>
              <p>BMI may misclassify muscular individuals and overweight or obese, as it doesn't differentiate muscle from fat.</p>
            </div>
          </div>
          <div className='row-3'>
            <div className="age">
              <h3>Pregnancy</h3>
              <p>Expectan mothers experience weight gain due their growing baby. Maintaining a healthy pregnancy BMI is advisable to minimise health risks for both mother and child.</p>
            </div>
            <div className="age">
              <h3>Race</h3>
              <p>Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default App
