import { useState } from 'react'
import './styles/App.css'
import BasicInfo from './components/BasicInfo';
import EducInfo from './components/EducInfo'
import ExpInfo from './components/ExpInfo';
import CVPreview from './components/CVPreview';

function App() {

  const [basicInfo, setBasicInfo] = useState({ name: '', email: '', phone: '' });

  function handleBasicSubmit(savedData) {
    setBasicInfo(savedData);
    console.log('Saved Basic Info in App:', savedData);

  }

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

  const [experiences, setExperiences] = useState([
    { id: crypto.randomUUID(), expName: '', title: '', description: '', startDate: '', endDate: '', }
  ]);

  function handleAddExperience() {
    console.log('Add Experience button clicked! Current count:',
      experiences.length + 1);
    setExperiences([
      ...experiences,
      { id: crypto.randomUUID(), schoolName: '', description: '', startDate: '', endDate: '' }
    ]);
  }
  function handleSubmitExperience(e) {
    e.preventDefault();
    console.log('Submitted experiences List:', experiences);
  }

  function handleExperienceChange(id, field, value) {
    setExperiences(experiences.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  }




  return (
    <main className='app-container'>
      <header>
        <h1>CV Generator</h1>
      </header>
      <div className="form-column">

        <h2> Basic Info </h2>
        <BasicInfo onSubmitInfo={handleBasicSubmit} />

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


        <h2> Experiences  </h2>

        <form onSubmit={handleSubmitExperience}>

          {experiences.map((item) => (
            <ExpInfo key={item.id} data={item}
              onChange={handleExperienceChange}
              onAdd={handleAddExperience} />

          ))}

          <button type="button" onClick={handleAddExperience}>
            Add Experience
          </button>

          <button type="button" onClick={handleSubmitExperience}>
            Submit
          </button>
        </form>
      </div>
      <div className="preview-column">
        <CVPreview
          basicInfo={basicInfo}
          educations={educations}
          experiences={experiences}
        />
      </div>

    </main>
  )
}


export default App
