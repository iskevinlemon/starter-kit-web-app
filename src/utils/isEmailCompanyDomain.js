import { authDomain } from "../config/authDomain";

function isEmailCompanyDomain(email) {
    // Extract the domain from the email address
    var emailParts = email.split('@');
    
    // Check if the domain from the email matches the company domain
    if (emailParts.length === 2) {
        var emailDomain = emailParts[1];
        return emailDomain === authDomain;
    }

    // Invalid email format (missing '@' or more than one '@')
    return false;
}

export default isEmailCompanyDomain;