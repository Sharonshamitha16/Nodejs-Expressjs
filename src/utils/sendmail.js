const nodemailer = require('nodemailer');
const mailsend = async (email, username, password) => {
    //   console.log('Email:', email);
    // console.log('Username:', username);
    // console.log('Password:', password);
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "sharonshamitha16@gmail.com",
                pass: "gpfw votj wnqs dxfe"
                // user:process.env.EMAIL_ID,
                // pass:process.env.PASS_KEY
            },
            tls: {
                rejectUnauthorized: false // Disable SSL verification for debugging (not recommended for production)
            }
        })
        let mailOptions = {
            from: "sharonshamitha16@gmail.com",
            to: email,
            subject: "welcome .. to our Website",
            text: `Heloo ${username}. This is ur password ${password}`
        }
        await transporter.sendMail(mailOptions)
        console.log("mail sent..");

    }

    catch (e) {
        console.error("Error sending mail:", e.message);


    }
}
// mailsend()
module.exports = mailsend;