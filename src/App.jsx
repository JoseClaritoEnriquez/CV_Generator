import { useState } from 'react'
import './styles/App.css'
import BasicInfo from './components/BasicInfo';
import EducInfo from './components/EducInfo'
import ExpInfo from './components/ExpInfo';


function App() {
  const [educations, setEducations] = useState([
    { id: crypto.randomUUID(), schoolName: '', description: '', startDate: '', endDate: '' }
  ]);

  function handleAddEducation() {
    console.log('Add Education button clicked! Current count:',
      educations.length + 1);
    setEducations([
      ...educations,
      { id: crypto.randomUUID(), schoolName: '', description: '', startDate: '', endDate: '' }
    ]);
  }
  function handleSubmitEducation(e) {
    e.preventDefault();
    console.log('Submitted Education List:', educations);
  }

  function handleEducationChange(id, field, value) {
    setEducations(educations.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  }


  return (
    <main className='app-container'>
      <header>
        <h1>CV Generator</h1>
      </header>
      <BasicInfo />
      <h2> Education  </h2>

      <form onSubmit={handleSubmitEducation}>

        {educations.map((item) => (
          <EducInfo key={item.id} data={item}
            onChange={handleEducationChange}
            onAdd={handleAddEducation} />

        ))}

        <button type="button" onClick={handleAddEducation}>
          Add Education
        </button>

        <button type="button" onClick={handleSubmitEducation}>
          Submit
        </button>
      </form>

      <ExpInfo />


    </main>
  )
}


export default App
