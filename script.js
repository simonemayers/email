var appData ={
    name:"Gmail", 
    mailboxes: [
        {name:"unread", 
        messages:[
            {message: "Your item is ready to use", from: "American Airlines"},
            {message: "Five flatbread pizzas to pick from.", from: "Panera Bread"}
            ]
        }, 
        {name:"drafts", 
        messages: [
            {message: "An assignment has been graded", to: "CFHWIN"}, 
            {message: "Support for Ukraine Through UNICEF", to:"Winthrop University"}
            ]
        }, {name:"sent", 
            messages: [
                {message: "Additional Information", to: "PCC"}, 
                {message: "Full Stack Engineer Strong In React", to: "Google"}
            ]
            }
    ],
    contacts:[
        {name:"Erin", lastMessage: "I wont be in class today"}, 
        {name: "Matt", lastMessage: "Today we are going to rock it!"}
    ]
}

// console.log(appData)
// console.log(appData.name)

//Get a list of inbox names
let mailboxes = []
function getInboxNames(){
    appData.mailboxes.map(m => mailboxes.push(m.name))
    // console.log(mailboxes)
    return mailboxes
}
getInboxNames()

//Get a list of emails
let emails = []; 
function getListOfEmails(){
    appData.mailboxes.map(m=> emails.push(m.messages))
    emails = emails.flat()
    // console.log(emails)
    return emails
}
getListOfEmails()

//Get the text of the second email in visisble list
let emailText = []
function getSecondEmailText(){
    appData.mailboxes.map(m => emailText.push(m.messages[1].message))
    // console.log(emailText)
    return emailText; 
}
getSecondEmailText()

//Mark an email as sent; 
function markEmailAsSent(emailText){
    let messages =[]; 
    appData.mailboxes.map(m=> messages.push(m["messages"]))
    let unsent = messages.flat().find(m=> m["message"] === emailText)
    let sentMessages = appData.mailboxes.find(m=> m["name"] === "sent")["messages"]
    sentMessages.push(unsent)
    // console.log(sentMessages)
    return sentMessages
}
markEmailAsSent("An assignment has been graded")


//Add a draft email to the drafts mailbox
function draftEmails(draftMessage, draftTo){
    let draftEmails = appData.mailboxes.find(m=> m["name"] === "drafts")["messages"]
    console.log(draftEmails)
    let newEmail = {message: draftMessage, to: draftTo}
    console.log(newEmail)
    console.log(draftEmails)
}
draftEmails("Hello", "Mom")
