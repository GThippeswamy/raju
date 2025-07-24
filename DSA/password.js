function generatePassword(length, includeNumbers = true, includeSpecialChars = false) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "@#$!&*?";

    let allChars = uppercaseChars + lowercaseChars;

    if (includeNumbers) {
        allChars += numberChars;
    }

    if (includeSpecialChars) {
        allChars += specialChars;
    }

    let password = [];

    password.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]);

    if (includeNumbers) {
        password.push(numberChars[Math.floor(Math.random() * numberChars.length)]);
    }

    if (includeSpecialChars) {
        password.push(specialChars[Math.floor(Math.random() * specialChars.length)]);
    }

    while (password.length < length) {
        let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        password.push(randomChar);
    }

    for (let i = password.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
    }

    return password.join('');
}

console.log("Generated Password:", generatePassword(10, true, true));
