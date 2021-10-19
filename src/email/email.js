require("dotenv").config();
const sgMail = require("@sendgrid/mail");
const { generateJWT } = require("../services/jwt");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmailWelcome = async (user) => {
  const encodeToken = await generateJWT(user._id);

  const msg = {
    personalizations: [
      {
        to: [
          {
            email: user.email,
            name: user.username,
          },
        ],
        dynamic_template_data: {
          subject: `Hi ${user.username} Welcome to the Questionnaire`,
          urlConfirm: `http://localhost:5000/api/v1/confirmationEmail/${encodeToken}`,
        },
      },
    ],
    from: {
      email: "alan199912@gmail.com",
      name: "Welcome",
    },
    template_id: process.env.TEMPLATE_WELCOME,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log(error);
    });
};

const sendEmailRecoveryPassword = async (user) => {
  const encodeToken = await generateJWT(user._id);

  const msg = {
    personalizations: [
      {
        to: [
          {
            email: user.email,
            name: user.username,
          },
        ],
        dynamic_template_data: {
          subject: `${user.username} Recovery your password`,
          urlRecovery: `http://localhost:4200/auth/restore-password/${Buffer.from(
            user.id
          ).toString("base64")}/${encodeToken}`,
        },
      },
    ],
    from: {
      email: "alan199912@gmail.com",
      name: "Recovery your password",
    },
    template_id: process.env.TEMPLATE_RECOVERY_PASSWORD,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Message sent");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  sendEmailWelcome,
  sendEmailRecoveryPassword,
};
