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

  // Draft state for Education form inputs
  const [educations, setEducations] = useState([
    { id: crypto.randomUUID(), schoolName: '', description: '', startDate: '', endDate: '' }
  ]);
  // Submitted state passed to CVPreview
  const [submittedEducations, setSubmittedEducations] = useState([]);

  function handleAddEducation() {
    setEducations([
      ...educations,
      { id: crypto.randomUUID(), schoolName: '', description: '', startDate: '', endDate: '' }
    ]);
  }

  function handleSubmitEducation(e) {
    e.preventDefault();
    setSubmittedEducations([...educations]);
    console.log('Submitted Education List:', educations);
  }

  function handleEducationChange(id, field, value) {
    setEducations(educations.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  }

  function handleDeleteEducation(id) {
    setEducations(educations.filter((item) => item.id !== id));
    setSubmittedEducations(submittedEducations.filter((item) => item.id !== id));
  }

  // Draft state for Experience form inputs
  const [experiences, setExperiences] = useState([
    { id: crypto.randomUUID(), expName: '', title: '', description: '', startDate: '', endDate: '' }
  ]);
  // Submitted state passed to CVPreview
  const [submittedExperiences, setSubmittedExperiences] = useState([]);

  function handleAddExperience() {
    setExperiences([
      ...experiences,
      { id: crypto.randomUUID(), expName: '', title: '', description: '', startDate: '', endDate: '' }
    ]);
  }

  function handleSubmitExperience(e) {
    e.preventDefault();
    setSubmittedExperiences([...experiences]);
    console.log('Submitted Experiences List:', experiences);
  }

  function handleExperienceChange(id, field, value) {
    setExperiences(experiences.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    ));
  }

  function handleDeleteExperience(id) {
    setExperiences(experiences.filter((item) => item.id !== id));
    setSubmittedExperiences(submittedExperiences.filter((item) => item.id !== id));
  }


  return (
    <main className='app'>
      <header>
        <h1>CV Generator</h1>
      </header>
      <div className="app-container">

        <div className="forms-column">

          <h2> Basic Info </h2>
          <BasicInfo onSubmitInfo={handleBasicSubmit} />

          <h2> Education  </h2>

          <form onSubmit={handleSubmitEducation}>

            {educations.map((item) => (
              <EducInfo key={item.id} data={item}
                onChange={handleEducationChange}
                onDelete={handleDeleteEducation} />
            ))}

            <div className="button-group">
              <button type="button" onClick={handleAddEducation}>
                + Add Education
              </button>

              <button type="submit">
                Submit Education
              </button>
            </div>
          </form>


          <h2> Experiences  </h2>

          <form onSubmit={handleSubmitExperience}>

            {experiences.map((item) => (
              <ExpInfo key={item.id} data={item}
                onChange={handleExperienceChange}
                onDelete={handleDeleteExperience} />
            ))}

            <div className="button-group">
              <button type="button" onClick={handleAddExperience}>
                + Add Experience
              </button>

              <button type="submit">
                Submit Experience
              </button>
            </div>
          </form>

        </div>


        <div className="preview-column">
          <CVPreview
            basicInfo={basicInfo}
            educations={submittedEducations}
            experiences={submittedExperiences}
          />
        </div>

      </div>
    </main>
  );
}



export default App
