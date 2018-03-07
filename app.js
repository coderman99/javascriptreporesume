console.log("edward hart".toUpperCase());
console.log("Career: Full Stack Web Developer");
console.log("Description: I am a student of the fullstack bootcamp from covalence. I am currently learning javascript.");
console.log("\n" + "My Interests:");
console.log("*" + " Fantasy Football");
console.log("*" + " College Football");
console.log("*" + " Netflix");
console.log("\n" + "My Previous Experience");

function displayPosition(company, job, description){
    console.log("* " + job + " at" + company + " -" + description);
};
displayPosition("MattressFirm", "Assistant Store Manager", "Invoice product. Sell product based on current marketing strategy.");
displayPosition("Winn-Dixie", "Deli-Associate", "Maintain clean environment. Design customer orders.");
displayPosition("Goodies Eatery", "Runner", "Deliver food. Take orders. Design order specifically to customer needs.");

console.log("\n" + "My Skills");
function displaySkill(skill, BAM){
    let coolSkill = "* ";
    if (BAM){
        coolSkill += "BAM "
    }
    console.log(coolSkill + skill);
}

displaySkill("Coding", true);
displaySkill("Trained in Windows", false);
displaySkill("Sales", true);





