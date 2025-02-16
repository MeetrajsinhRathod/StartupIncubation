auth.onAuthStateChanged(user=>{
    if(user){


        //verification for students (as only student can apply for request) 
        db.collection('users').doc(user.uid).get().then(doc => {

            if(doc.data().role == 'ADMIN'){
                alert('Only students can apply this form!')
                window.location = "/student/home.html";
            }
            else if(doc.data().role == 'HOD'){
        
                alert('Only students can apply this form!')
                window.location = "/student/home.html";
            }
            else if(doc.data().role == 'FACULTY'){
        
                alert('Only students can apply this form!')
                window.location = "/student/home.html";
            }
            else{
        
            }
            })
    }
    else{
        
    }
})




//to submit form

document.getElementById('applyForm').addEventListener('submit', submitForm);

function checkValue(id){
    var ch = applyForm[`${id}`];
    var str= '';

    if(ch.checked === true){
         str += ch.value+" Yes";
    }
    else{
        str += ch.value+" No";
    }
    return str;

}

        
//to get values of each checkbox 
function cb1(){
    if(a_checkbox_box1.checked){
        var a = applyForm['a_checkbox_box1'].value
        return a+':- Yes';
    }
    else{
        var a = applyForm['a_checkbox_box1'].value
        return a+':- No';
    }
}
function cb2(){
    if(a_checkbox_box2.checked){
        var a = applyForm['a_checkbox_box2'].value
        return a+':- Yes';
    }
    else{
        var a = applyForm['a_checkbox_box2'].value
        return a+':- No';
    }
}
function cb3(){
    if(a_checkbox_box3.checked){
        var a = applyForm['a_checkbox_box3'].value
        return a+':- Yes';
    }
    else{
        var a = applyForm['a_checkbox_box3'].value
        return a+':- No';
    }
}
function cb4(){
    if(a_checkbox_box4.checked){
        var a = applyForm['a_checkbox_box4'].value
        return a+':- Yes';
    }
    else{
        var a = applyForm['a_checkbox_box4'].value
        return a+':- No';
    }
}
function cb5(){
    if(a_checkbox_box5.checked){
        var a = applyForm['a_checkbox_box5'].value
        return a+':- Yes';
    }
    else{
        var a = applyForm['a_checkbox_box5'].value
        return a+':- No';
    }
}
function cb6(){
    if(a_checkbox_box6.checked){
        var a = applyForm['a_checkbox_box6'].value
        return a+':- Yes';
    }
    else{
        var a = applyForm['a_checkbox_box6'].value
        return a+':- No';
    }
}
function submitForm(e){
    e.preventDefault();

        db.collection('forms').add({
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
        


        WorkProposedIsOriginal : cb1(),
        UsefulToTheStateUniversity : cb2(),
        SuchProposedResearchWorkIsGoingElsewhereOrNot : cb3(),
        PossibilityOfCommercialization : cb4(),
        PossibilityOfFurtherResearch : cb5(),
        FinancialAssistanceAskedIsJustified : cb6(),
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


        
    }) 
    




    //alert("Your form has been submitted");
    document.querySelector('.form-msg').style.display = 'block';

    setTimeout(function(){
        document.querySelector('.form-msg').style.display = 'none';
    },5000);

    document.getElementById('applyForm').reset();

   
   
}
