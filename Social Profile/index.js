var About = /** @class */ (function () {
    function About(emailId, dateOfBirth, gender, aboutYou, interestedIn, relationshipStatus, mobileNumber) {
        var _this = this;
        this.address = "";
        this.listOfLanguages = [];
        this.otherPlacesLived = [];
        this.listOfFamilyMembers = {}; //[{nameOfTheMember,Relation}.....]
        this.lifeEvents = {}; //[{date,lifeevent},-----] 
        this.listOfHighSchools = {}; //[{place,schoolName},----] 
        this.listOfUniversities = {}; //[{place,universityName},-----]
        this.listOfProfessionalSkills = [];
        this.getEmailId = function () {
            return _this.emailId;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth[0] + " " + _this.dateOfBirth[1] + "," + _this.dateOfBirth[2];
        };
        this.getAge = function () {
            var date1 = new Date();
            return date1.getFullYear() - _this.dateOfBirth[2];
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getAboutTheUser = function () {
            return _this.aboutYou;
        };
        this.setAboutTheUser = function (about) {
            _this.aboutYou = about;
        };
        this.getRelationshipStatus = function () {
            return _this.relationshipStatus;
        };
        this.setRelationshipStutus = function (status) {
            _this.relationshipStatus = status;
        };
        this.getInterestedIn = function () {
            return _this.interestedIn;
        };
        this.setInterestedIn = function (interestedIn) {
            _this.interestedIn = interestedIn;
        };
        this.getMobileNo = function () {
            return _this.mobileNumber;
        };
        this.setMobileNo = function (mobile) {
            _this.mobileNumber = mobile;
        };
        this.getAddress = function () {
            return _this.address;
        };
        this.setAddress = function (address) {
            _this.address = address;
        };
        this.getListOfLanguages = function () {
            for (var _i = 0, _a = _this.listOfLanguages; _i < _a.length; _i++) {
                var x = _a[_i];
                console.log(x);
            }
        };
        this.addToListOfLanguages = function (language) {
            _this.listOfLanguages.push(language);
        };
        this.getCurrentCity = function () {
            return _this.currentCity;
        };
        this.setCurrentCity = function (city) {
            _this.currentCity = city;
        };
        this.getListOfOtherPlacesLived = function () {
            for (var _i = 0, _a = _this.otherPlacesLived; _i < _a.length; _i++) {
                var x = _a[_i];
                console.log(x);
            }
        };
        this.addToListOfOtherPlacesLived = function (place) {
            _this.otherPlacesLived.push(place);
        };
        this.getListOfFamilyMembers = function () {
            for (var x in _this.listOfFamilyMembers) {
                console.log(x + " " + _this.listOfFamilyMembers[x]);
            }
        };
        this.addToListOfFamilyMembers = function (member, relation) {
            _this.listOfFamilyMembers[relation] = member;
        };
        this.getLifeEvents = function () {
            for (var x in _this.lifeEvents) {
                console.log(" " + x + " " + _this.lifeEvents[x]);
                // console.log(this.lifeEvents[x])
            }
        };
        this.addToLifeEvents = function (date, lifeEvent) {
            _this.lifeEvents[date] = lifeEvent;
        };
        this.getWorkPlace = function () {
            console.log(_this.workplace);
        };
        this.setWorkPlace = function (workplace) {
            _this.workplace = workplace;
        };
        this.getListOfHighSchools = function () {
            for (var x in _this.listOfHighSchools) {
                console.log(x + "  " + _this.listOfHighSchools[x]);
            }
        };
        this.addToListOfHighSchools = function (place, schoolName) {
            _this.listOfHighSchools[place] = schoolName;
        };
        this.getListOfUniversities = function () {
            for (var x in _this.listOfUniversities) {
                console.log(x + "  " + _this.listOfUniversities[x]);
            }
        };
        this.addToLIstOfUniversities = function (place, universityName) {
            _this.listOfUniversities[place] = universityName;
        };
        this.getWebsiteLink = function () {
            console.log(_this.websiteLink);
        };
        this.setWebsiteLink = function (websiteLink) {
            _this.websiteLink = websiteLink;
        };
        this.getSocialLink = function () {
            return _this.socialLink;
        };
        this.setSocialLink = function (socialLink) {
            _this.socialLink = socialLink;
        };
        this.getListOfProfessionalSkills = function () {
            for (var _i = 0, _a = _this.listOfProfessionalSkills; _i < _a.length; _i++) {
                var x = _a[_i];
                console.log(x);
            }
        };
        this.addToListOfProfessionalSkills = function (skill) {
            _this.listOfProfessionalSkills.push(skill);
        };
        this.emailId = emailId;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        if (aboutYou) {
            this.aboutYou = aboutYou;
        }
        if (interestedIn) {
            this.interestedIn = interestedIn;
        }
        if (relationshipStatus) {
            this.relationshipStatus = relationshipStatus;
        }
        if (mobileNumber) {
            this.mobileNumber = mobileNumber;
        }
    }
    return About;
}());
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
myself.addToLifeEvents("17/06/2018", "Graduated from college");
myself.addToLifeEvents("21/10/2018", "Joined my first company");
myself.getLifeEvents();
myself.setWorkPlace("Bangalore");
myself.getWorkPlace();
myself.addToListOfHighSchools("Moradabad", "SS children academy");
myself.getListOfHighSchools();
myself.addToLIstOfUniversities("Noida", "JIIT");
myself.getListOfUniversities();
myself.setWebsiteLink("ayush-jaiswal.github.io");
myself.getWebsiteLink();
myself.setSocialLink("www.facebook.com/ayushjaiswalaj");
myself.getSocialLink();
myself.addToListOfProfessionalSkills("MEAN Stack Trainee");
myself.addToListOfProfessionalSkills("Hadoop Developer");
myself.getListOfProfessionalSkills();
