function HouseKeeper (name, workLicence, yearsOfExperience, cleaningRepetoire){
    this.name = name;
    this.workLicence = workLicence;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepetoire = cleaningRepetoire;
    this.clean = function () {
        alert("Cleaning in progress...");
    }
}

var housekeeper1 = new HouseKeeper ('Hanuma', true, 3, ['bathroom', 'hall']);
