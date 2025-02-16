auth.onAuthStateChanged(user=>{

    if(user){
            var id = new String(localStorage.getItem("myKey"));
            var resetVal = 0;
            localStorage.setItem("myKey", resetVal);


        
        const formDetails = document.querySelector('.readmoreForm');



            const app = document.querySelectorAll('.approvBtn');
            const disapp = document.querySelectorAll('.disapprovBtn');
            const rsbmt = document.querySelectorAll('.resubmitBtn');
            const dlt = document.querySelectorAll('.dltBtn');

            db.collection('users').doc(user.uid).get().then(doc => {
              
              if(doc.data().role == 'ADMIN'){

                db.collection('forms').doc(id).get().then(doc => {

                  let html = `<div class="form_section">SECTION–A: SUMMARY OF PROPOSED RESEARCH PROJECT</div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Full Name</span>
                      <input type="text" value="${doc.data().FullName}" id="a_fullname" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().Email}" id="a_email"required>
                    </div>
                    <div class="input-box">
                      <span class="details">Department</span>
                      <input type="text" value="${doc.data().Department}" id="a_department" required>
                    </div>
                    
                    <div class="input-box">
                      <span class="details">Title of research grant</span>
                      <input type="text" value="${doc.data().TitleOfResearchGrant}"  id="a_title_of_research_grant" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Name of the Principal Investigator</span>
                      <input type="text" value="${doc.data().NameOfThePrincipalInvestigator}"  id="a_name_of_the_principal_investigator" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Proposed Budget for 1st Year ( In Rupees)</span>
                      <input type="text" value="${doc.data().ProposedBudgetFor1stYear}" id="a_proposed_budget_for_1st_year" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Provide the outline of your Proposed Solution (Abstract)</span>
                      <input type="text" value="${doc.data().ProvideTheOutlineOfYourProposedSolution}" id="a_provide_the_outline_of_your_proposed_solution" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Project Duration</span>
                      <input type="text" value="${doc.data().ProjectDuration}" id="a_project_duration"  required>
                    </div>
                    <div class="input-box">
                      <span class="details">Provide a concise background of the project highlighting the problems to be addressed</span>
                      <input type="text" value="${doc.data().ProvideAConciseBackgroundOfTheProjectHighlightingTheProblemsToBeAddressed}" id="a_provide_a_concise_background_of_the_project_highlighting_the_problems_to_be_addressed"required>
                    </div>
                    <div class="input-box">
                      <span class="details">Define the specific research activities along with time-frame to be pursued during Project Period</span>
                      <input type="text" value="${doc.data().DefineTheSpecificResearchActivitiesAlongWithTimeFrameToBePursuedDuringProjectPeriod}"  id="a_define_the_specific_research_activities_along_with_time_frame_to_be_pursued_during_project_period" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Provide a comprehensive description of techniques/technologies to be used</span>
                      <input type="text" value="${doc.data().ProvideAComprehensiveDescriptionOfTechniquesTechnologiesToBeUsed}" id="a_provide_a_comprehensive_description_of_techniques/technologies_to_be_used" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Advantages of suggested Methodological approach</span>
                      <input type="text" value="${doc.data().AdvantagesOfSuggestedMethodologicalApproach}" id="a_advantages_of_suggested_methodological_approach"  required>
                    </div>
                    <div class="input-box">
                      <span class="details">Available resources</span>
                      <input type="text" value="${doc.data().AvailableResources}" id="a_available_resources" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Needed Resources</span>
                      <input type="text" value="${doc.data().NeededResources}" id="a_needed_resources" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Beneficiary of the Project Research Project</span>
                      <input type="text" value="${doc.data().BeneficiaryOfTheProjectResearchProject}" id="a_beneficiary_of_the_project_research_project" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Briefly describe the technical Deliverables</span>
                      <input type="text" value="${doc.data().BrieflyDescribeTheTechnicalDeliverables}" id="a_briefly_describe_the_technical_deliverables" required>
                    </div>
                  </div>
          
                 <div class="form_section">SECTION-B: PERFORMA OF EVALUATION</div>
                <div class="user-details">
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box1">${doc.data().WorkProposedIsOriginal}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box2">${doc.data().UsefulToTheStateUniversity}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box3">${doc.data().SuchProposedResearchWorkIsGoingElsewhereOrNot}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box4">${doc.data().PossibilityOfCommercialization}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box5">${doc.data().PossibilityOfFurtherResearch}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box6">${doc.data().FinancialAssistanceAskedIsJustified}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details">Any other Comments :</span>
                    <input type="text" value="${doc.data().AnyOtherComment}" id="a_comment" >
                  </div>
                </div>
          
                  <div class="form_section">SECTION-C: PARTICIPATING RESEARCHERS AND THEIR ROLES</div>
          
                  <div class="underline_title"><u>Name of the Principal Investigator</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().PIName}"  id="a_pi_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().PIInstituteName}"  id="a_pi_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().PIQualification}" id="a_pi_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().PIDesignation}" id="a_pi_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Contact</span>
                      <input type="text" value="${doc.data().PIContact}" id="a_pi_contact" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().PIEmail}" id="a_pi_email" required>
                    </div>
                  </div>
                  <div class="underline_title"><u>Researcher leading the work</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().ResearcherName}" id="a_researcher_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().ResearcherInstituteName}" id="a_researcher_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().ResearcherQualification}" id="a_researcher_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().ResearcherDesignation}" id="a_researcher_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Contact</span>
                      <input type="text" value="${doc.data().ResearcherContact}" id="a_researcher_contact" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().ResearcherEmail}" id="a_researcher_email" required>
                    </div>
                  </div>
                  <div class="underline_title"><u>Name of the other participating researchers</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().OResearcherName}" id="a_oresearcher_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().OResearcherInstituteName}" id="a_oresearcher_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().OResearcherQualification}" id="a_oresearcher_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().OResearcherDesignation}" id="a_oresearcher_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Contact</span>
                      <input type="text" value="${doc.data().OResearcherContact}" id="a_oresearcher_contact" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().OResearcherEmail}" id="a_oresearcher_email" required>
                    </div>
                  </div>
                  
                 <div class="form_section">SECTION–D: TENTATIVE BUDGET SUMMARY</div>
                  <div class="underline_title"><u>Tentative budget</u></div>
                  <div class="user-details">
                    <table class="table">
                        <tr id="header">
                          <th>Detail</th>
                          <th>1st Year</th>
                          <th>2nd Year</th>
                          <th>3rd Year</th>
                          <th>4th Year</th>
                          <th>Total</th>
                        </tr>
                        <tr>
                          <th>Equipment(s)</th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment1}" id="e1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment2}" id="e2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment3}" id="e3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment4}" id="e4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().EquipmentTotal}" id="etotal"></th>
                        </tr>
                        <tr>
                          <th>Recurring</th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring1}" id="r1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring2}" id="r2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring3}" id="r3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring4}" id="r4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().RecurringTotal}" id="rtotal"></th>
                        </tr>
                        <tr>
                          <th>Travel </th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel1}" id="t1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel2}" id="t2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel3}" id="t3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel4}" id="t4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().TravelTotal}" id="ttotal"></th>
                        </tr>
                        <tr>
                          <th>contingency</th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency1}" id="c1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency2}" id="c2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency3}" id="c3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency4}" id="c4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().ContingencyTotal}" id="ctotal"></th>
                        </tr>
                        <tr>
                          <th>consumables</th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables1}" id="con1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables2}" id="con2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables3}" id="con3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables4}" id="con4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().ConsumablesTotal}" id="contotal"></th>
                        </tr>
                        <tr>
                          <th>Total (in rupees)</th>
                          <th><input type="text"class="inputText" value="${doc.data().Total1}" id="total1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Total2}" id="total2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Total3}" id="total3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Total4}" id="total4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().TotalTotal}" id="totaltotal"></th>
                        </tr>
                    </table>
                  </div>
          
                  <div class="form_section">SECTION –E: DETAILS OF REFEREES</div>
                  <div class="underline_title"><u>Provide name of proposed referees</u></div>
                  <div class="underline_title"><u>Referee no. 1</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().R1Name}" id="a_r1_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().R1Designation}" id="a_r1_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().R1Qualification}" id="a_r1_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().R1InstituteName}" id="a_r1_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Website</span>
                      <input type="text" value="${doc.data().R1Website}" id="a_r1_website" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().R1Email}" id="a_r1_email" required>
                    </div>
                  </div>
                  <div class="underline_title"><u>Referee no. 2</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().R2Name}" id="a_r2_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().R2Designation}" id="a_r2_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().R2Qualification}" id="a_r2_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().R2InstituteName}" id="a_r2_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Website</span>
                      <input type="text" value="${doc.data().R2Website}" id="a_r2_website" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().R2Email}" id="a_r2_email" required>
                    </div>
                  </div>
              `;
                      formDetails.innerHTML = html; 
    
                      app.forEach(item => item.style.display='block');
                      app.forEach(item => item.style.cursor='pointer');
                      disapp.forEach(item => item.style.display='block');
                      disapp.forEach(item => item.style.cursor='pointer');
                      
                  })
                  app.forEach(item => item.addEventListener('click',()=>{

                    var statusRef = db.collection('forms').doc(id);
            
                    return statusRef.update({
                        Status: 'Approved by EDIC'
                        })
                        .then(() => {
                            alert('You have approved the form!');
                            window.location= `/admin/admin.html`;
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });
                        }));

                    disapp.forEach(item => item.addEventListener('click',()=>{
                            var statusRef = db.collection('forms').doc(id);
                          
                            return statusRef.update({
                            Status: 'Disapproved by EDIC'
                            })
                            .then(() => {
                              alert('You have disapproved the form!');
                              window.location= `/admin/admin.html`;
                            })
                            .catch((error) => {
                            console.error("Error updating document: ", error);
                            });

                        }));
              }
              else if(doc.data().role == 'HOD'){

                db.collection('forms').doc(id).get().then(doc => {

                  let html = `<div class="form_section">SECTION–A: SUMMARY OF PROPOSED RESEARCH PROJECT</div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Full Name</span>
                      <input type="text" value="${doc.data().FullName}" id="a_fullname" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().Email}" id="a_email"required>
                    </div>
                    <div class="input-box">
                      <span class="details">Department</span>
                      <input type="text" value="${doc.data().Department}" id="a_department" required>
                    </div>
                    
                    <div class="input-box">
                      <span class="details">Title of research grant</span>
                      <input type="text" value="${doc.data().TitleOfResearchGrant}"  id="a_title_of_research_grant" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Name of the Principal Investigator</span>
                      <input type="text" value="${doc.data().NameOfThePrincipalInvestigator}"  id="a_name_of_the_principal_investigator" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Proposed Budget for 1st Year ( In Rupees)</span>
                      <input type="text" value="${doc.data().ProposedBudgetFor1stYear}" id="a_proposed_budget_for_1st_year" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Provide the outline of your Proposed Solution (Abstract)</span>
                      <input type="text" value="${doc.data().ProvideTheOutlineOfYourProposedSolution}" id="a_provide_the_outline_of_your_proposed_solution" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Project Duration</span>
                      <input type="text" value="${doc.data().ProjectDuration}" id="a_project_duration"  required>
                    </div>
                    <div class="input-box">
                      <span class="details">Provide a concise background of the project highlighting the problems to be addressed</span>
                      <input type="text" value="${doc.data().ProvideAConciseBackgroundOfTheProjectHighlightingTheProblemsToBeAddressed}" id="a_provide_a_concise_background_of_the_project_highlighting_the_problems_to_be_addressed"required>
                    </div>
                    <div class="input-box">
                      <span class="details">Define the specific research activities along with time-frame to be pursued during Project Period</span>
                      <input type="text" value="${doc.data().DefineTheSpecificResearchActivitiesAlongWithTimeFrameToBePursuedDuringProjectPeriod}"  id="a_define_the_specific_research_activities_along_with_time_frame_to_be_pursued_during_project_period" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Provide a comprehensive description of techniques/technologies to be used</span>
                      <input type="text" value="${doc.data().ProvideAComprehensiveDescriptionOfTechniquesTechnologiesToBeUsed}" id="a_provide_a_comprehensive_description_of_techniques/technologies_to_be_used" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Advantages of suggested Methodological approach</span>
                      <input type="text" value="${doc.data().AdvantagesOfSuggestedMethodologicalApproach}" id="a_advantages_of_suggested_methodological_approach"  required>
                    </div>
                    <div class="input-box">
                      <span class="details">Available resources</span>
                      <input type="text" value="${doc.data().AvailableResources}" id="a_available_resources" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Needed Resources</span>
                      <input type="text" value="${doc.data().NeededResources}" id="a_needed_resources" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Beneficiary of the Project Research Project</span>
                      <input type="text" value="${doc.data().BeneficiaryOfTheProjectResearchProject}" id="a_beneficiary_of_the_project_research_project" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Briefly describe the technical Deliverables</span>
                      <input type="text" value="${doc.data().BrieflyDescribeTheTechnicalDeliverables}" id="a_briefly_describe_the_technical_deliverables" required>
                    </div>
                  </div>
          
                 <div class="form_section">SECTION-B: PERFORMA OF EVALUATION</div>
                <div class="user-details">
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box1">${doc.data().WorkProposedIsOriginal}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box2">${doc.data().UsefulToTheStateUniversity}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box3">${doc.data().SuchProposedResearchWorkIsGoingElsewhereOrNot}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box4">${doc.data().PossibilityOfCommercialization}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box5">${doc.data().PossibilityOfFurtherResearch}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details" id="a_checkbox_box6">${doc.data().FinancialAssistanceAskedIsJustified}</span>
                  </div>
                  <div class="checkbox">
                    <span class="details">Any other Comments :</span>
                    <input type="text" value="${doc.data().AnyOtherComment}" id="a_comment" >
                  </div>
                </div>
          
                  <div class="form_section">SECTION-C: PARTICIPATING RESEARCHERS AND THEIR ROLES</div>
          
                  <div class="underline_title"><u>Name of the Principal Investigator</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().PIName}"  id="a_pi_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().PIInstituteName}"  id="a_pi_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().PIQualification}" id="a_pi_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().PIDesignation}" id="a_pi_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Contact</span>
                      <input type="text" value="${doc.data().PIContact}" id="a_pi_contact" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().PIEmail}" id="a_pi_email" required>
                    </div>
                  </div>
                  <div class="underline_title"><u>Researcher leading the work</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().ResearcherName}" id="a_researcher_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().ResearcherInstituteName}" id="a_researcher_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().ResearcherQualification}" id="a_researcher_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().ResearcherDesignation}" id="a_researcher_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Contact</span>
                      <input type="text" value="${doc.data().ResearcherContact}" id="a_researcher_contact" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().ResearcherEmail}" id="a_researcher_email" required>
                    </div>
                  </div>
                  <div class="underline_title"><u>Name of the other participating researchers</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().OResearcherName}" id="a_oresearcher_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().OResearcherInstituteName}" id="a_oresearcher_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().OResearcherQualification}" id="a_oresearcher_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().OResearcherDesignation}" id="a_oresearcher_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Contact</span>
                      <input type="text" value="${doc.data().OResearcherContact}" id="a_oresearcher_contact" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().OResearcherEmail}" id="a_oresearcher_email" required>
                    </div>
                  </div>
                  
                 <div class="form_section">SECTION–D: TENTATIVE BUDGET SUMMARY</div>
                  <div class="underline_title"><u>Tentative budget</u></div>
                  <div class="user-details">
                    <table class="table">
                        <tr id="header">
                          <th>Detail</th>
                          <th>1st Year</th>
                          <th>2nd Year</th>
                          <th>3rd Year</th>
                          <th>4th Year</th>
                          <th>Total</th>
                        </tr>
                        <tr>
                          <th>Equipment(s)</th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment1}" id="e1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment2}" id="e2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment3}" id="e3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Equipment4}" id="e4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().EquipmentTotal}" id="etotal"></th>
                        </tr>
                        <tr>
                          <th>Recurring</th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring1}" id="r1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring2}" id="r2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring3}" id="r3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Recurring4}" id="r4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().RecurringTotal}" id="rtotal"></th>
                        </tr>
                        <tr>
                          <th>Travel </th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel1}" id="t1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel2}" id="t2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel3}" id="t3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Travel4}" id="t4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().TravelTotal}" id="ttotal"></th>
                        </tr>
                        <tr>
                          <th>contingency</th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency1}" id="c1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency2}" id="c2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency3}" id="c3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Contingency4}" id="c4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().ContingencyTotal}" id="ctotal"></th>
                        </tr>
                        <tr>
                          <th>consumables</th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables1}" id="con1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables2}" id="con2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables3}" id="con3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Consumables4}" id="con4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().ConsumablesTotal}" id="contotal"></th>
                        </tr>
                        <tr>
                          <th>Total (in rupees)</th>
                          <th><input type="text"class="inputText" value="${doc.data().Total1}" id="total1"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Total2}" id="total2"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Total3}" id="total3"></th>
                          <th><input type="text"class="inputText" value="${doc.data().Total4}" id="total4"></th>
                          <th><input type="text"class="inputText" value="${doc.data().TotalTotal}" id="totaltotal"></th>
                        </tr>
                    </table>
                  </div>
          
                  <div class="form_section">SECTION –E: DETAILS OF REFEREES</div>
                  <div class="underline_title"><u>Provide name of proposed referees</u></div>
                  <div class="underline_title"><u>Referee no. 1</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().R1Name}" id="a_r1_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().R1Designation}" id="a_r1_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().R1Qualification}" id="a_r1_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().R1InstituteName}" id="a_r1_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Website</span>
                      <input type="text" value="${doc.data().R1Website}" id="a_r1_website" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().R1Email}" id="a_r1_email" required>
                    </div>
                  </div>
                  <div class="underline_title"><u>Referee no. 2</u></div>
                  <div class="user-details">
                    <div class="input-box">
                      <span class="details">Name</span>
                      <input type="text" value="${doc.data().R2Name}" id="a_r2_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Designation</span>
                      <input type="text" value="${doc.data().R2Designation}" id="a_r2_designation" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Qualification</span>
                      <input type="text" value="${doc.data().R2Qualification}" id="a_r2_qualification" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Institute Name</span>
                      <input type="text" value="${doc.data().R2InstituteName}" id="a_r2_institute_name" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Website</span>
                      <input type="text" value="${doc.data().R2Website}" id="a_r2_website" required>
                    </div>
                    <div class="input-box">
                      <span class="details">Email</span>
                      <input type="text" value="${doc.data().R2Email}" id="a_r2_email" required>
                    </div>
                  </div>
              `;
                      formDetails.innerHTML = html; 
    
                      app.forEach(item => item.style.display='block');
                      app.forEach(item => item.style.cursor='pointer');
                      disapp.forEach(item => item.style.display='block');
                      disapp.forEach(item => item.style.cursor='pointer');
    
                  })
                  app.forEach(item => item.addEventListener('click',()=>{

                    var statusRef = db.collection('forms').doc(id);

                    return statusRef.update({
                        Status: 'Approved by hod'
                        })
                        .then(() => {
                            alert('You have approved the form!');
                            window.location= `/hod/hod.html`;
                        })
                        .catch((error) => {
                            console.error("Error updating document: ", error);
                        });
                        }));

                        disapp.forEach(item => item.addEventListener('click',()=>{
                                  var statusRef = db.collection('forms').doc(id);
                                  
                                  return statusRef.update({
                                      Status: 'Disapproved by hod'
                                      })
                                      .then(() => {
                                          alert('You have disapproved the form!');
                                          window.location= `/hod/hod.html`;
                                      })
                                      .catch((error) => {
                                          console.error("Error updating document: ", error);
                                      });

                        }));
              }
              else if(doc.data().role == 'FACULTY'){


                
             db.collection('forms').doc(id).get().then(doc => {

              let html = `<div class="form_section">SECTION–A: SUMMARY OF PROPOSED RESEARCH PROJECT</div>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Full Name</span>
                  <input type="text" value="${doc.data().FullName}" id="a_fullname" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" value="${doc.data().Email}" id="a_email"required>
                </div>
                <div class="input-box">
                  <span class="details">Department</span>
                  <input type="text" value="${doc.data().Department}" id="a_department" required>
                </div>
                
                <div class="input-box">
                  <span class="details">Title of research grant</span>
                  <input type="text" value="${doc.data().TitleOfResearchGrant}"  id="a_title_of_research_grant" required>
                </div>
                <div class="input-box">
                  <span class="details">Name of the Principal Investigator</span>
                  <input type="text" value="${doc.data().NameOfThePrincipalInvestigator}"  id="a_name_of_the_principal_investigator" required>
                </div>
                <div class="input-box">
                  <span class="details">Proposed Budget for 1st Year ( In Rupees)</span>
                  <input type="text" value="${doc.data().ProposedBudgetFor1stYear}" id="a_proposed_budget_for_1st_year" required>
                </div>
                <div class="input-box">
                  <span class="details">Provide the outline of your Proposed Solution (Abstract)</span>
                  <input type="text" value="${doc.data().ProvideTheOutlineOfYourProposedSolution}" id="a_provide_the_outline_of_your_proposed_solution" required>
                </div>
                <div class="input-box">
                  <span class="details">Project Duration</span>
                  <input type="text" value="${doc.data().ProjectDuration}" id="a_project_duration"  required>
                </div>
                <div class="input-box">
                  <span class="details">Provide a concise background of the project highlighting the problems to be addressed</span>
                  <input type="text" value="${doc.data().ProvideAConciseBackgroundOfTheProjectHighlightingTheProblemsToBeAddressed}" id="a_provide_a_concise_background_of_the_project_highlighting_the_problems_to_be_addressed"required>
                </div>
                <div class="input-box">
                  <span class="details">Define the specific research activities along with time-frame to be pursued during Project Period</span>
                  <input type="text" value="${doc.data().DefineTheSpecificResearchActivitiesAlongWithTimeFrameToBePursuedDuringProjectPeriod}"  id="a_define_the_specific_research_activities_along_with_time_frame_to_be_pursued_during_project_period" required>
                </div>
                <div class="input-box">
                  <span class="details">Provide a comprehensive description of techniques/technologies to be used</span>
                  <input type="text" value="${doc.data().ProvideAComprehensiveDescriptionOfTechniquesTechnologiesToBeUsed}" id="a_provide_a_comprehensive_description_of_techniques/technologies_to_be_used" required>
                </div>
                <div class="input-box">
                  <span class="details">Advantages of suggested Methodological approach</span>
                  <input type="text" value="${doc.data().AdvantagesOfSuggestedMethodologicalApproach}" id="a_advantages_of_suggested_methodological_approach"  required>
                </div>
                <div class="input-box">
                  <span class="details">Available resources</span>
                  <input type="text" value="${doc.data().AvailableResources}" id="a_available_resources" required>
                </div>
                <div class="input-box">
                  <span class="details">Needed Resources</span>
                  <input type="text" value="${doc.data().NeededResources}" id="a_needed_resources" required>
                </div>
                <div class="input-box">
                  <span class="details">Beneficiary of the Project Research Project</span>
                  <input type="text" value="${doc.data().BeneficiaryOfTheProjectResearchProject}" id="a_beneficiary_of_the_project_research_project" required>
                </div>
                <div class="input-box">
                  <span class="details">Briefly describe the technical Deliverables</span>
                  <input type="text" value="${doc.data().BrieflyDescribeTheTechnicalDeliverables}" id="a_briefly_describe_the_technical_deliverables" required>
                </div>
              </div>
      
              <div class="form_section">SECTION-B: PERFORMA OF EVALUATION</div>
              <div class="user-details">
                <div class="checkbox">
                  <span class="details" id="a_checkbox_box1" value="${doc.data().WorkProposedIsOriginal}" >${doc.data().WorkProposedIsOriginal}</span>
                </div>
                <div class="checkbox">
                  <span class="details" id="a_checkbox_box2" value="${doc.data().UsefulToTheStateUniversity}" >${doc.data().UsefulToTheStateUniversity}</span>
                </div>
                <div class="checkbox">
                  <span class="details" id="a_checkbox_box3" value="${doc.data().SuchProposedResearchWorkIsGoingElsewhereOrNot}" >${doc.data().SuchProposedResearchWorkIsGoingElsewhereOrNot}</span>
                </div>
                <div class="checkbox">
                  <span class="details" id="a_checkbox_box4" value="${doc.data().PossibilityOfCommercialization}" >${doc.data().PossibilityOfCommercialization}</span>
                </div>
                <div class="checkbox">
                  <span class="details" id="a_checkbox_box5" value="${doc.data().PossibilityOfFurtherResearch}" >${doc.data().PossibilityOfFurtherResearch}</span>
                </div>
                <div class="checkbox">
                  <span class="details" id="a_checkbox_box6" value="${doc.data().FinancialAssistanceAskedIsJustified}" >${doc.data().FinancialAssistanceAskedIsJustified}</span>
                </div>
                <div class="checkbox">
                  <span class="details">Any other Comments :</span>
                  <input type="text" value="${doc.data().AnyOtherComment}" id="a_comment" >
                </div>
              </div>
      
              <div class="form_section">SECTION-C: PARTICIPATING RESEARCHERS AND THEIR ROLES</div>
      
              <div class="underline_title"><u>Name of the Principal Investigator</u></div>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Name</span>
                  <input type="text" value="${doc.data().PIName}"  id="a_pi_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Institute Name</span>
                  <input type="text" value="${doc.data().PIInstituteName}"  id="a_pi_institute_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Qualification</span>
                  <input type="text" value="${doc.data().PIQualification}" id="a_pi_qualification" required>
                </div>
                <div class="input-box">
                  <span class="details">Designation</span>
                  <input type="text" value="${doc.data().PIDesignation}" id="a_pi_designation" required>
                </div>
                <div class="input-box">
                  <span class="details">Contact</span>
                  <input type="text" value="${doc.data().PIContact}" id="a_pi_contact" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" value="${doc.data().PIEmail}" id="a_pi_email" required>
                </div>
              </div>
              <div class="underline_title"><u>Researcher leading the work</u></div>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Name</span>
                  <input type="text" value="${doc.data().ResearcherName}" id="a_researcher_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Institute Name</span>
                  <input type="text" value="${doc.data().ResearcherInstituteName}" id="a_researcher_institute_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Qualification</span>
                  <input type="text" value="${doc.data().ResearcherQualification}" id="a_researcher_qualification" required>
                </div>
                <div class="input-box">
                  <span class="details">Designation</span>
                  <input type="text" value="${doc.data().ResearcherDesignation}" id="a_researcher_designation" required>
                </div>
                <div class="input-box">
                  <span class="details">Contact</span>
                  <input type="text" value="${doc.data().ResearcherContact}" id="a_researcher_contact" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" value="${doc.data().ResearcherEmail}" id="a_researcher_email" required>
                </div>
              </div>
              <div class="underline_title"><u>Name of the other participating researchers</u></div>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Name</span>
                  <input type="text" value="${doc.data().OResearcherName}" id="a_oresearcher_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Institute Name</span>
                  <input type="text" value="${doc.data().OResearcherInstituteName}" id="a_oresearcher_institute_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Qualification</span>
                  <input type="text" value="${doc.data().OResearcherQualification}" id="a_oresearcher_qualification" required>
                </div>
                <div class="input-box">
                  <span class="details">Designation</span>
                  <input type="text" value="${doc.data().OResearcherDesignation}" id="a_oresearcher_designation" required>
                </div>
                <div class="input-box">
                  <span class="details">Contact</span>
                  <input type="text" value="${doc.data().OResearcherContact}" id="a_oresearcher_contact" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" value="${doc.data().OResearcherEmail}" id="a_oresearcher_email" required>
                </div>
              </div>
              
             <div class="form_section">SECTION–D: TENTATIVE BUDGET SUMMARY</div>
              <div class="underline_title"><u>Tentative budget</u></div>
              <div class="user-details">
                <table class="table">
                    <tr id="header">
                      <th>Detail</th>
                      <th>1st Year</th>
                      <th>2nd Year</th>
                      <th>3rd Year</th>
                      <th>4th Year</th>
                      <th>Total</th>
                    </tr>
                    <tr>
                      <th>Equipment(s)</th>
                      <th><input type="text"class="inputText" value="${doc.data().Equipment1}" id="e1"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Equipment2}" id="e2"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Equipment3}" id="e3"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Equipment4}" id="e4"></th>
                      <th><input type="text"class="inputText" value="${doc.data().EquipmentTotal}" id="etotal"></th>
                    </tr>
                    <tr>
                      <th>Recurring</th>
                      <th><input type="text"class="inputText" value="${doc.data().Recurring1}" id="r1"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Recurring2}" id="r2"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Recurring3}" id="r3"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Recurring4}" id="r4"></th>
                      <th><input type="text"class="inputText" value="${doc.data().RecurringTotal}" id="rtotal"></th>
                    </tr>
                    <tr>
                      <th>Travel </th>
                      <th><input type="text"class="inputText" value="${doc.data().Travel1}" id="t1"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Travel2}" id="t2"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Travel3}" id="t3"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Travel4}" id="t4"></th>
                      <th><input type="text"class="inputText" value="${doc.data().TravelTotal}" id="ttotal"></th>
                    </tr>
                    <tr>
                      <th>contingency</th>
                      <th><input type="text"class="inputText" value="${doc.data().Contingency1}" id="c1"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Contingency2}" id="c2"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Contingency3}" id="c3"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Contingency4}" id="c4"></th>
                      <th><input type="text"class="inputText" value="${doc.data().ContingencyTotal}" id="ctotal"></th>
                    </tr>
                    <tr>
                      <th>consumables</th>
                      <th><input type="text"class="inputText" value="${doc.data().Consumables1}" id="con1"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Consumables2}" id="con2"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Consumables3}" id="con3"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Consumables4}" id="con4"></th>
                      <th><input type="text"class="inputText" value="${doc.data().ConsumablesTotal}" id="contotal"></th>
                    </tr>
                    <tr>
                      <th>Total (in rupees)</th>
                      <th><input type="text"class="inputText" value="${doc.data().Total1}" id="total1"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Total2}" id="total2"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Total3}" id="total3"></th>
                      <th><input type="text"class="inputText" value="${doc.data().Total4}" id="total4"></th>
                      <th><input type="text"class="inputText" value="${doc.data().TotalTotal}" id="totaltotal"></th>
                    </tr>
                </table>
              </div>
      
              <div class="form_section">SECTION –E: DETAILS OF REFEREES</div>
              <div class="underline_title"><u>Provide name of proposed referees</u></div>
              <div class="underline_title"><u>Referee no. 1</u></div>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Name</span>
                  <input type="text" value="${doc.data().R1Name}" id="a_r1_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Designation</span>
                  <input type="text" value="${doc.data().R1Designation}" id="a_r1_designation" required>
                </div>
                <div class="input-box">
                  <span class="details">Qualification</span>
                  <input type="text" value="${doc.data().R1Qualification}" id="a_r1_qualification" required>
                </div>
                <div class="input-box">
                  <span class="details">Institute Name</span>
                  <input type="text" value="${doc.data().R1InstituteName}" id="a_r1_institute_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Website</span>
                  <input type="text" value="${doc.data().R1Website}" id="a_r1_website" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" value="${doc.data().R1Email}" id="a_r1_email" required>
                </div>
              </div>
              <div class="underline_title"><u>Referee no. 2</u></div>
              <div class="user-details">
                <div class="input-box">
                  <span class="details">Name</span>
                  <input type="text" value="${doc.data().R2Name}" id="a_r2_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Designation</span>
                  <input type="text" value="${doc.data().R2Designation}" id="a_r2_designation" required>
                </div>
                <div class="input-box">
                  <span class="details">Qualification</span>
                  <input type="text" value="${doc.data().R2Qualification}" id="a_r2_qualification" required>
                </div>
                <div class="input-box">
                  <span class="details">Institute Name</span>
                  <input type="text" value="${doc.data().R2InstituteName}" id="a_r2_institute_name" required>
                </div>
                <div class="input-box">
                  <span class="details">Website</span>
                  <input type="text" value="${doc.data().R2Website}" id="a_r2_website" required>
                </div>
                <div class="input-box">
                  <span class="details">Email</span>
                  <input type="text" value="${doc.data().R2Email}" id="a_r2_email" required>
                </div>
              </div>
          `;
                  formDetails.innerHTML = html; 
                  app.forEach(item => item.style.display='block');
                  app.forEach(item => item.style.cursor='pointer');
                  disapp.forEach(item => item.style.display='block');
                  disapp.forEach(item => item.style.cursor='pointer');
              })
              
              app.forEach(item => item.addEventListener('click',()=>{

                var statusRef = db.collection('forms').doc(id);

                  return statusRef.update({
                      Status: 'Approved by faculty'
                      })
                      .then(() => {
                          alert('You have approved the form!');
                          window.location= `/faculty/faculty.html`;
                      })
                      .catch((error) => {
                          console.error("Error updating document: ", error);
                      });

                }));

              disapp.forEach(item => item.addEventListener('click',()=>{
              
                var statusRef = db.collection('forms').doc(id);

                  return statusRef.update({
                      Status: 'Disapproved by faculty'
                      })
                      .then(() => {
                          alert('You have disapproved the form!');
                          window.location= `/faculty/faculty.html`;
                      })
                      .catch((error) => {
                          console.error("Error updating document: ", error);
                      });
          
              }));


              }
              else{

               
          db.collection('forms').doc(id).get().then(doc => {

          let html = `<div class="form_section">SECTION–A: SUMMARY OF PROPOSED RESEARCH PROJECT</div>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input type="text" value="${doc.data().FullName}" id="a_fullname" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" value="${doc.data().Email}" id="a_email"required>
            </div>
            <div class="input-box">
              <span class="details">Department</span>
              <input type="text" value="${doc.data().Department}" id="a_department" required>
            </div>
            
            <div class="input-box">
              <span class="details">Title of research grant</span>
              <input type="text" value="${doc.data().TitleOfResearchGrant}"  id="a_title_of_research_grant" required>
            </div>
            <div class="input-box">
              <span class="details">Name of the Principal Investigator</span>
              <input type="text" value="${doc.data().NameOfThePrincipalInvestigator}"  id="a_name_of_the_principal_investigator" required>
            </div>
            <div class="input-box">
              <span class="details">Proposed Budget for 1st Year ( In Rupees)</span>
              <input type="text" value="${doc.data().ProposedBudgetFor1stYear}" id="a_proposed_budget_for_1st_year" required>
            </div>
            <div class="input-box">
              <span class="details">Provide the outline of your Proposed Solution (Abstract)</span>
              <input type="text" value="${doc.data().ProvideTheOutlineOfYourProposedSolution}" id="a_provide_the_outline_of_your_proposed_solution" required>
            </div>
            <div class="input-box">
              <span class="details">Project Duration</span>
              <input type="text" value="${doc.data().ProjectDuration}" id="a_project_duration"  required>
            </div>
            <div class="input-box">
              <span class="details">Provide a concise background of the project highlighting the problems to be addressed</span>
              <input type="text" value="${doc.data().ProvideAConciseBackgroundOfTheProjectHighlightingTheProblemsToBeAddressed}" id="a_provide_a_concise_background_of_the_project_highlighting_the_problems_to_be_addressed"required>
            </div>
            <div class="input-box">
              <span class="details">Define the specific research activities along with time-frame to be pursued during Project Period</span>
              <input type="text" value="${doc.data().DefineTheSpecificResearchActivitiesAlongWithTimeFrameToBePursuedDuringProjectPeriod}"  id="a_define_the_specific_research_activities_along_with_time_frame_to_be_pursued_during_project_period" required>
            </div>
            <div class="input-box">
              <span class="details">Provide a comprehensive description of techniques/technologies to be used</span>
              <input type="text" value="${doc.data().ProvideAComprehensiveDescriptionOfTechniquesTechnologiesToBeUsed}" id="a_provide_a_comprehensive_description_of_techniques/technologies_to_be_used" required>
            </div>
            <div class="input-box">
              <span class="details">Advantages of suggested Methodological approach</span>
              <input type="text" value="${doc.data().AdvantagesOfSuggestedMethodologicalApproach}" id="a_advantages_of_suggested_methodological_approach"  required>
            </div>
            <div class="input-box">
              <span class="details">Available resources</span>
              <input type="text" value="${doc.data().AvailableResources}" id="a_available_resources" required>
            </div>
            <div class="input-box">
              <span class="details">Needed Resources</span>
              <input type="text" value="${doc.data().NeededResources}" id="a_needed_resources" required>
            </div>
            <div class="input-box">
              <span class="details">Beneficiary of the Project Research Project</span>
              <input type="text" value="${doc.data().BeneficiaryOfTheProjectResearchProject}" id="a_beneficiary_of_the_project_research_project" required>
            </div>
            <div class="input-box">
              <span class="details">Briefly describe the technical Deliverables</span>
              <input type="text" value="${doc.data().BrieflyDescribeTheTechnicalDeliverables}" id="a_briefly_describe_the_technical_deliverables" required>
            </div>
          </div>

        <div class="form_section">SECTION-B: PERFORMA OF EVALUATION</div>
            <div class="user-details">
              <div class="input-box">
              <span class="details">
                <input type="text" id="a_checkbox_box1" value="${doc.data().WorkProposedIsOriginal}" > </span>
              </div>
              <div class="input-box">
              <span class="details">
                <input type="text" id="a_checkbox_box2" value="${doc.data().UsefulToTheStateUniversity}" > </span>
              </div>
              <div class="input-box">
              <span class="details">
                <input type="text" id="a_checkbox_box3" value="${doc.data().SuchProposedResearchWorkIsGoingElsewhereOrNot}" > </span>
              </div>
              <div class="input-box">
              <span class="details">
                <input type="text" id="a_checkbox_box4" value="${doc.data().PossibilityOfCommercialization}" > </span>
              </div>
              <div class="input-box">
              <span class="details">
                <input type="text" id="a_checkbox_box5" value="${doc.data().PossibilityOfFurtherResearch}" > </span>
              </div>
              <div class="input-box">
              <span class="details">
                <input type="text" id="a_checkbox_box6" value="${doc.data().FinancialAssistanceAskedIsJustified}" > </span>
              </div>
              <div class="input-box">
                <span class="details">Any other Comments :</span>
                <input type="text" value="${doc.data().AnyOtherComment}" id="a_comment" >
              </div>
            </div>
  
          <div class="form_section">SECTION-C: PARTICIPATING RESEARCHERS AND THEIR ROLES</div>
  
          <div class="underline_title"><u>Name of the Principal Investigator</u></div>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" value="${doc.data().PIName}"  id="a_pi_name" required>
            </div>
            <div class="input-box">
              <span class="details">Institute Name</span>
              <input type="text" value="${doc.data().PIInstituteName}"  id="a_pi_institute_name" required>
            </div>
            <div class="input-box">
              <span class="details">Qualification</span>
              <input type="text" value="${doc.data().PIQualification}" id="a_pi_qualification" required>
            </div>
            <div class="input-box">
              <span class="details">Designation</span>
              <input type="text" value="${doc.data().PIDesignation}" id="a_pi_designation" required>
            </div>
            <div class="input-box">
              <span class="details">Contact</span>
              <input type="text" value="${doc.data().PIContact}" id="a_pi_contact" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" value="${doc.data().PIEmail}" id="a_pi_email" required>
            </div>
          </div>
          <div class="underline_title"><u>Researcher leading the work</u></div>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" value="${doc.data().ResearcherName}" id="a_researcher_name" required>
            </div>
            <div class="input-box">
              <span class="details">Institute Name</span>
              <input type="text" value="${doc.data().ResearcherInstituteName}" id="a_researcher_institute_name" required>
            </div>
            <div class="input-box">
              <span class="details">Qualification</span>
              <input type="text" value="${doc.data().ResearcherQualification}" id="a_researcher_qualification" required>
            </div>
            <div class="input-box">
              <span class="details">Designation</span>
              <input type="text" value="${doc.data().ResearcherDesignation}" id="a_researcher_designation" required>
            </div>
            <div class="input-box">
              <span class="details">Contact</span>
              <input type="text" value="${doc.data().ResearcherContact}" id="a_researcher_contact" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" value="${doc.data().ResearcherEmail}" id="a_researcher_email" required>
            </div>
          </div>
          <div class="underline_title"><u>Name of the other participating researchers</u></div>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" value="${doc.data().OResearcherName}" id="a_oresearcher_name" required>
            </div>
            <div class="input-box">
              <span class="details">Institute Name</span>
              <input type="text" value="${doc.data().OResearcherInstituteName}" id="a_oresearcher_institute_name" required>
            </div>
            <div class="input-box">
              <span class="details">Qualification</span>
              <input type="text" value="${doc.data().OResearcherQualification}" id="a_oresearcher_qualification" required>
            </div>
            <div class="input-box">
              <span class="details">Designation</span>
              <input type="text" value="${doc.data().OResearcherDesignation}" id="a_oresearcher_designation" required>
            </div>
            <div class="input-box">
              <span class="details">Contact</span>
              <input type="text" value="${doc.data().OResearcherContact}" id="a_oresearcher_contact" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" value="${doc.data().OResearcherEmail}" id="a_oresearcher_email" required>
            </div>
          </div>
          
         <div class="form_section">SECTION–D: TENTATIVE BUDGET SUMMARY</div>
          <div class="underline_title"><u>Tentative budget</u></div>
          <div class="user-details">
            <table class="table">
                <tr id="header">
                  <th>Detail</th>
                  <th>1st Year</th>
                  <th>2nd Year</th>
                  <th>3rd Year</th>
                  <th>4th Year</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <th>Equipment(s)</th>
                  <th><input type="text"class="inputText" value="${doc.data().Equipment1}" id="e1"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Equipment2}" id="e2"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Equipment3}" id="e3"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Equipment4}" id="e4"></th>
                  <th><input type="text"class="inputText" value="${doc.data().EquipmentTotal}" id="etotal"></th>
                </tr>
                <tr>
                  <th>Recurring</th>
                  <th><input type="text"class="inputText" value="${doc.data().Recurring1}" id="r1"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Recurring2}" id="r2"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Recurring3}" id="r3"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Recurring4}" id="r4"></th>
                  <th><input type="text"class="inputText" value="${doc.data().RecurringTotal}" id="rtotal"></th>
                </tr>
                <tr>
                  <th>Travel </th>
                  <th><input type="text"class="inputText" value="${doc.data().Travel1}" id="t1"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Travel2}" id="t2"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Travel3}" id="t3"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Travel4}" id="t4"></th>
                  <th><input type="text"class="inputText" value="${doc.data().TravelTotal}" id="ttotal"></th>
                </tr>
                <tr>
                  <th>contingency</th>
                  <th><input type="text"class="inputText" value="${doc.data().Contingency1}" id="c1"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Contingency2}" id="c2"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Contingency3}" id="c3"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Contingency4}" id="c4"></th>
                  <th><input type="text"class="inputText" value="${doc.data().ContingencyTotal}" id="ctotal"></th>
                </tr>
                <tr>
                  <th>consumables</th>
                  <th><input type="text"class="inputText" value="${doc.data().Consumables1}" id="con1"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Consumables2}" id="con2"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Consumables3}" id="con3"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Consumables4}" id="con4"></th>
                  <th><input type="text"class="inputText" value="${doc.data().ConsumablesTotal}" id="contotal"></th>
                </tr>
                <tr>
                  <th>Total (in rupees)</th>
                  <th><input type="text"class="inputText" value="${doc.data().Total1}" id="total1"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Total2}" id="total2"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Total3}" id="total3"></th>
                  <th><input type="text"class="inputText" value="${doc.data().Total4}" id="total4"></th>
                  <th><input type="text"class="inputText" value="${doc.data().TotalTotal}" id="totaltotal"></th>
                </tr>
            </table>
          </div>
  
          <div class="form_section">SECTION –E: DETAILS OF REFEREES</div>
          <div class="underline_title"><u>Provide name of proposed referees</u></div>
          <div class="underline_title"><u>Referee no. 1</u></div>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" value="${doc.data().R1Name}" id="a_r1_name" required>
            </div>
            <div class="input-box">
              <span class="details">Designation</span>
              <input type="text" value="${doc.data().R1Designation}" id="a_r1_designation" required>
            </div>
            <div class="input-box">
              <span class="details">Qualification</span>
              <input type="text" value="${doc.data().R1Qualification}" id="a_r1_qualification" required>
            </div>
            <div class="input-box">
              <span class="details">Institute Name</span>
              <input type="text" value="${doc.data().R1InstituteName}" id="a_r1_institute_name" required>
            </div>
            <div class="input-box">
              <span class="details">Website</span>
              <input type="text" value="${doc.data().R1Website}" id="a_r1_website" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" value="${doc.data().R1Email}" id="a_r1_email" required>
            </div>
          </div>
          <div class="underline_title"><u>Referee no. 2</u></div>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Name</span>
              <input type="text" value="${doc.data().R2Name}" id="a_r2_name" required>
            </div>
            <div class="input-box">
              <span class="details">Designation</span>
              <input type="text" value="${doc.data().R2Designation}" id="a_r2_designation" required>
            </div>
            <div class="input-box">
              <span class="details">Qualification</span>
              <input type="text" value="${doc.data().R2Qualification}" id="a_r2_qualification" required>
            </div>
            <div class="input-box">
              <span class="details">Institute Name</span>
              <input type="text" value="${doc.data().R2InstituteName}" id="a_r2_institute_name" required>
            </div>
            <div class="input-box">
              <span class="details">Website</span>
              <input type="text" value="${doc.data().R2Website}" id="a_r2_website" required>
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input type="text" value="${doc.data().R2Email}" id="a_r2_email" required>
            </div>
          </div>
      `;
              formDetails.innerHTML = html; 
              let q = `${doc.data().Status}`.slice(0,11);
              if(q == "Disapproved"){
                rsbmt.forEach(item => item.style.display='flex');
                rsbmt.forEach(item => item.style.cursor='pointer');
                dlt.forEach(item => item.style.display='flex');
                dlt.forEach(item => item.style.cursor='pointer');
                document.getElementById('applyForm').style.pointerEvents = "all";
              }

          })
          app.forEach(item => item.style.display='none');
          disapp.forEach(item => item.style.display='none');
          applyForm = document.querySelector('.applyForm');
          applyForm.addEventListener('submit',(e)=>{
                
            e.preventDefault();
            db.collection('forms').doc().set({
              FullName : applyForm['a_fullname'].value,
              Email : applyForm['a_email'].value,
              Department : applyForm['a_department'].value,
              TitleOfResearchGrant : applyForm['a_title_of_research_grant'].value,
              NameOfThePrincipalInvestigator : applyForm['a_name_of_the_principal_investigator'].value,
              ProposedBudgetFor1stYear : applyForm['a_proposed_budget_for_1st_year'].value,
              ProvideTheOutlineOfYourProposedSolution : applyForm['a_provide_the_outline_of_your_proposed_solution'].value,
              ProjectDuration : applyForm['a_project_duration'].value,
              ProvideAConciseBackgroundOfTheProjectHighlightingTheProblemsToBeAddressed : applyForm['a_provide_a_concise_background_of_the_project_highlighting_the_problems_to_be_addressed'].value,
              DefineTheSpecificResearchActivitiesAlongWithTimeFrameToBePursuedDuringProjectPeriod : applyForm['a_define_the_specific_research_activities_along_with_time_frame_to_be_pursued_during_project_period'].value,
              ProvideAComprehensiveDescriptionOfTechniquesTechnologiesToBeUsed : applyForm['a_provide_a_comprehensive_description_of_techniques/technologies_to_be_used'].value,
              AdvantagesOfSuggestedMethodologicalApproach : applyForm['a_advantages_of_suggested_methodological_approach'].value,
              AvailableResources : applyForm['a_available_resources'].value,
              NeededResources : applyForm['a_needed_resources'].value,
              BeneficiaryOfTheProjectResearchProject : applyForm['a_beneficiary_of_the_project_research_project'].value,
              BrieflyDescribeTheTechnicalDeliverables : applyForm['a_briefly_describe_the_technical_deliverables'].value,
              
      
      
              WorkProposedIsOriginal : applyForm['a_checkbox_box1'].value,
              UsefulToTheStateUniversity : applyForm['a_checkbox_box2'].value,
              SuchProposedResearchWorkIsGoingElsewhereOrNot : applyForm['a_checkbox_box3'].value,
              PossibilityOfCommercialization : applyForm['a_checkbox_box4'].value,
              PossibilityOfFurtherResearch : applyForm['a_checkbox_box5'].value,
              FinancialAssistanceAskedIsJustified : applyForm['a_checkbox_box6'].value,
              AnyOtherComment : applyForm['a_comment'].value,
      
      
      
              PIName : applyForm['a_pi_name'].value,
              PIInstituteName : applyForm['a_pi_institute_name'].value,
              PIQualification : applyForm['a_pi_qualification'].value,
              PIDesignation : applyForm['a_pi_designation'].value,
              PIContact : applyForm['a_pi_contact'].value,
              PIEmail : applyForm['a_pi_email'].value,
              ResearcherName : applyForm['a_researcher_name'].value,
              ResearcherInstituteName : applyForm['a_researcher_institute_name'].value,
              ResearcherQualification : applyForm['a_researcher_qualification'].value,
              ResearcherDesignation : applyForm['a_researcher_designation'].value,
              ResearcherContact : applyForm['a_researcher_contact'].value,
              ResearcherEmail : applyForm['a_researcher_email'].value,
              OResearcherName : applyForm['a_oresearcher_name'].value,
              OResearcherInstituteName : applyForm['a_oresearcher_institute_name'].value,
              OResearcherQualification : applyForm['a_oresearcher_qualification'].value,
              OResearcherDesignation : applyForm['a_oresearcher_designation'].value,
              OResearcherContact : applyForm['a_oresearcher_contact'].value,
              OResearcherEmail : applyForm['a_oresearcher_email'].value,
      
              R1Name : applyForm['a_r1_name'].value,
              R1Designation : applyForm['a_r1_designation'].value,
              R1Qualification : applyForm['a_r1_qualification'].value,
              R1InstituteName : applyForm['a_r1_institute_name'].value,
              R1Website : applyForm['a_r1_website'].value,
              R1Email : applyForm['a_r1_email'].value,
              R2Name : applyForm['a_r2_name'].value,
              R2Designation : applyForm['a_r2_designation'].value,
              R2Qualification : applyForm['a_r2_qualification'].value,
              R2InstituteName : applyForm['a_r2_institute_name'].value,
              R2Website : applyForm['a_r2_website'].value,
              R2Email : applyForm['a_r2_email'].value,
      
              Equipment1 : applyForm['e1'].value,
              Equipment2 : applyForm['e2'].value,
              Equipment3 : applyForm['e3'].value,
              Equipment4 : applyForm['e4'].value,
              EquipmentTotal : applyForm['etotal'].value,
              Recurring1 : applyForm['r1'].value,
              Recurring2 : applyForm['r2'].value,
              Recurring3 : applyForm['r3'].value,
              Recurring4 : applyForm['r4'].value,
              RecurringTotal : applyForm['rtotal'].value,
              Travel1 : applyForm['t1'].value,
              Travel2 : applyForm['t2'].value,
              Travel3 : applyForm['t3'].value,
              Travel4 : applyForm['t4'].value,
              TravelTotal : applyForm['ttotal'].value,
              Contingency1 : applyForm['c1'].value,
              Contingency2 : applyForm['c2'].value,
              Contingency3 : applyForm['c3'].value,
              Contingency4 : applyForm['c4'].value,
              ContingencyTotal : applyForm['ctotal'].value,
              Consumables1 : applyForm['con1'].value,
              Consumables2 : applyForm['con2'].value,
              Consumables3 : applyForm['con3'].value,
              Consumables4 : applyForm['con4'].value,
              ConsumablesTotal : applyForm['contotal'].value,
              Total1 : applyForm['total1'].value,
              Total2 : applyForm['total2'].value,
              Total3 : applyForm['total3'].value,
              Total4 : applyForm['total4'].value,
              TotalTotal : applyForm['totaltotal'].value,
              Status : 'Pending'
              
          }).then(()=>{

            db.collection('forms').doc(id).delete().then(() => {
              console.log("Document successfully deleted!");
          }).catch((error) => {
              console.error("Error removing document: ", error);
          });
          
            alert("Your form has been submitted");
            window.location= `/student/sdash.html`;
          })
          
        })
        dlt.forEach(item => item.addEventListener('click',()=>{

              alert("Your form will be deleted!");

              db.collection('forms').doc(id).delete().then(() => {
              console.log("Document successfully deleted!");
              }).catch((error) => {
              console.error("Error removing document: ", error);
              });

              window.location= `/student/sdash.html`;

          }));
              }
              })


    }
    else{

    }
})
