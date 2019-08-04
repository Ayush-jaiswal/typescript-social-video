class About{
     private emailId:string;
     private dateOfBirth:[number,string,number];
    private gender:string;
    private aboutYou:string;
    private interestedIn:string;
    private relationshipStatus:string;
    private mobileNumber:string;
    private address:string = "";
    private listOfLanguages:string[]=[]; 
    private currentCity:string;
    private otherPlacesLived:string[]=[];
    private listOfFamilyMembers:any={}; //[{nameOfTheMember,Relation}.....]
    private lifeEvents:any={}; //[{date,lifeevent},-----] 
    private workplace:string;
    private listOfHighSchools:any={}; //[{place,schoolName},----] 
    private listOfUniversities:any={}; //[{place,universityName},-----]
    private websiteLink:string;
    private socialLink:string;
    private listOfProfessionalSkills:string[]=[];


    constructor(emailId: string, dateOfBirth: [number, string, number], gender: string, aboutYou?: string, interestedIn?: string, relationshipStatus?: string, mobileNumber?: string){
        this.emailId=emailId
        this.dateOfBirth=dateOfBirth
        this.gender=gender

        
        if(aboutYou){
            this.aboutYou = aboutYou
        }
        if(interestedIn){
            this.interestedIn = interestedIn
        }
        if(relationshipStatus){
            this.relationshipStatus = relationshipStatus
        }
        if(mobileNumber){
            this.mobileNumber = mobileNumber
        }
        
    }

     getEmailId=()=>{
        return this.emailId

    }

     getDateOfBirth=()=>{
        return this.dateOfBirth[0]+" "+this.dateOfBirth[1]+","+this.dateOfBirth[2] 
    }

     getAge=()=>{
        let date1=new Date();
        return date1.getFullYear()-this.dateOfBirth[2]

    }

     getGender=()=>{
        return this.gender

    }

     getAboutTheUser=()=>{
        return this.aboutYou
    }

     setAboutTheUser=(about:string)=>{
        this.aboutYou=about

    }

     getRelationshipStatus=()=>{
        return this.relationshipStatus

    }

     setRelationshipStutus=(status:string)=>{
        this.relationshipStatus=status

    }

     getInterestedIn=()=>{
        return this.interestedIn
    }

     setInterestedIn=(interestedIn:string)=>{
        this.interestedIn=interestedIn
    }

     getMobileNo=()=>{
        return this.mobileNumber

    }

     setMobileNo=(mobile:string)=>{
        this.mobileNumber=mobile

    }

     getAddress=()=>{
        return this.address

    }

     setAddress=(address:string)=>{
        this.address=address
    }

     getListOfLanguages=()=>{
        for(let x of this.listOfLanguages){
            console.log(x)
        }

    }

     addToListOfLanguages=(language:string)=>{
        this.listOfLanguages.push(language)
    }

     getCurrentCity=()=>{
        return this.currentCity

    }

     setCurrentCity=(city:string)=>{
        this.currentCity=city

    }

     getListOfOtherPlacesLived=()=>{
        for ( let x of this.otherPlacesLived){
            console.log(x)
        }

    }

     addToListOfOtherPlacesLived=(place:string)=>{
        this.otherPlacesLived.push(place)
    }

     getListOfFamilyMembers=()=>{
        for(let x in this.listOfFamilyMembers){
            console.log(`${x} ${this.listOfFamilyMembers[x]}`)
        }

    }

     addToListOfFamilyMembers=(member:string,relation:string)=>{
        this.listOfFamilyMembers[relation]=member
    }

     getLifeEvents=()=>{
        for (let x in this.lifeEvents) {
            console.log(` ${x} ${this.lifeEvents[x]}`)
            // console.log(this.lifeEvents[x])
        }
        

    }

     addToLifeEvents=(date:string,lifeEvent:string)=>{
        this.lifeEvents[date]=lifeEvent

    }

     getWorkPlace=()=>{
        console.log(this.workplace)

    }

     setWorkPlace=(workplace:string)=>{
        this.workplace=workplace

    }

     getListOfHighSchools=()=>{
        for (let x in this.listOfHighSchools){
            console.log(`${x}  ${this.listOfHighSchools[x]}`)
        }

    }

     addToListOfHighSchools=(place:string,schoolName:string)=>{
        this.listOfHighSchools[place]=schoolName


    }

     getListOfUniversities=()=>{
        for (let x in this.listOfUniversities){
            console.log(`${x}  ${this.listOfUniversities[x]}`)
        }

    }

     addToLIstOfUniversities=(place:string,universityName:string)=>{
        this.listOfUniversities[place]=universityName
    }

     getWebsiteLink=()=>{
        console.log(this.websiteLink) 

    }

     setWebsiteLink = (websiteLink:string)=>{
        this.websiteLink = websiteLink

    }

     getSocialLink=()=>{
        return this.socialLink

    }

     setSocialLink = (socialLink:string)=>{
        this.socialLink=socialLink

    }

     getListOfProfessionalSkills=()=>{
        for(let x of this.listOfProfessionalSkills){
            console.log(x)
        }

    }

     addToListOfProfessionalSkills=(skill:string)=>{
        this.listOfProfessionalSkills.push(skill)
    }

    



}

var myself = new About("ayushjaiswalaj@gmail.com", [21, "march", 1995], "Male", "looking forward for good opportunities", "female", "single", "7838263758");
console.log(myself.getEmailId());
console.log(myself.getDateOfBirth());
console.log(myself.getAge());
console.log(myself.getGender());
console.log(myself.getAboutTheUser());
console.log(myself.getRelationshipStatus());
myself.setInterestedIn("sports and programming");
console.log(myself.getInterestedIn());
console.log(myself.getMobileNo());
myself.setAddress("Ram Ganga Vihar phase 1 Moradabad, Uttar Pradesh ");
console.log(myself.getAddress());
myself.addToListOfLanguages("Hindi");
myself.addToListOfLanguages("English");
myself.getListOfLanguages();
myself.setCurrentCity("Moradabad");
console.log(myself.getCurrentCity());
myself.addToListOfOtherPlacesLived("Delhi");
myself.addToListOfOtherPlacesLived("Noida");
myself.getListOfOtherPlacesLived();
myself.addToListOfFamilyMembers("Anant", "brother");
myself.addToListOfFamilyMembers("Kanika", "sister");
myself.getListOfFamilyMembers();
myself.addToLifeEvents("17/06/2018","Graduated from college")
myself.addToLifeEvents("21/10/2018","Joined my first company")
myself.getLifeEvents()
myself.setWorkPlace("Bangalore")
myself.getWorkPlace()
myself.addToListOfHighSchools("Moradabad","SS children academy")
myself.getListOfHighSchools()
myself.addToLIstOfUniversities("Noida","JIIT")
myself.getListOfUniversities()
myself.setWebsiteLink("ayush-jaiswal.github.io")
myself.getWebsiteLink()
myself.setSocialLink("www.facebook.com/ayushjaiswalaj")
myself.getSocialLink()
myself.addToListOfProfessionalSkills("MEAN Stack Trainee")
myself.addToListOfProfessionalSkills("Hadoop Developer")
myself.getListOfProfessionalSkills()

