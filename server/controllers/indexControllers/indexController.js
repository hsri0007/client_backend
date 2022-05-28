// import { Op, Sequelize, QueryTypes, query } from "sequelize";
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const gpc = require("generate-pincode");
dotenv.config();

const {
  User,
  sequelize,
  Products,
  DashboardFolder,
  Dashboards,
} = require("../../models");
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");
const saltRounds = 10;
const secret = "sri";
module.exports = {
  async getAllproducts(req, res) {
    try {
      return Products.findAll({
        where: {
          is_active: 1,
        },
      })
        .then((user) => {
          return res.status(200).json({
            success: true,
            message: "Products",
            final_obj: user,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async resetToken(req, res) {
    const pin = gpc(4);

    try {


      const data = await User.findOne({
        where: {
          email: req.query.email,
        },
      });

      if(!data){
        return res.status(500).json({
          success: false,
          message: "user Not found",
        });

      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "candyreddy1995@gmail.com",
          pass: "9963009324",
        },
      });

      const mailOptions = {
        from: "candyreddy@gmail.com",
        to: req.query.email,
        subject: "Dont Share this Code",
        text: pin,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      return res.status(200).json({
        success: true,
        message: "Products",
        code: pin,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async verifyuserToken(req, res) {
    console.log(req.query.token);
    try {
      jwt.verify(req.query.token, secret, async (err, decoded) => {
        if (err) {
          return res.status(401).send({
            message: "Unauthorized!",
          });
        }

        const data = await User.findOne({
          where: {
            id: decoded.id,
          },
        });

        return res.status(200).json({
          success: true,
          message: "user",
          final_obj: data,
        });
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getAllproductsbyAdmin(req, res) {
    try {
      return Products.findAll()
        .then((user) => {
          return res.status(200).json({
            success: true,
            message: "Products",
            final_obj: user,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async updateProducts(req, res) {
    try {
      const data = await Products.update(req.body, {
        where: { id: req.body.id },
      }).then((resp) => {
        console.log(resp);
        return resp;
      });

      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async updateDashBoard(req, res) {
    try {
      const data = await Dashboards.update(req.body, {
        where: { id: req.body.id },
      }).then((resp) => {
        console.log(resp);
        return resp;
      });

      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async updateDashBoardFolders(req, res) {
    try {
      const data = await DashboardFolder.update(
        { ...req.body, created_at: sequelize.literal("CURRENT_TIMESTAMP") },
        {
          where: { id: req.body.id },
        }
      ).then((resp) => {
        console.log(resp);
        return resp;
      });

      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async postProducts(req, res) {
    try {
      return Products.create(req.body)
        .then((user) => {
          return res.status(200).json({
            success: true,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async postDashBoard(req, res) {
    try {
      return Dashboards.create(req.body)
        .then((user) => {
          return res.status(200).json({
            success: true,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async postDashBoardFolders(req, res) {
    try {
      return DashboardFolder.create({
        ...req.body,
        created_at: sequelize.literal("CURRENT_TIMESTAMP"),
      })
        .then((user) => {
          return res.status(200).json({
            success: true,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getAllDashBoardFolders(req, res) {
    try {
      return DashboardFolder.findAll({
        where: {
          is_active: 1,
        },
      })
        .then((dashboard) => {
          return res.status(200).json({
            success: true,
            message: "DashboardFolders",
            final_obj: dashboard,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getAllDashBoards(req, res) {
    try {
      return Dashboards.findAll({
        where: {
          is_active: 1,
        },
      })
        .then((dashboard) => {
          return res.status(200).json({
            success: true,
            message: "Dashboards",
            final_obj: dashboard,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getSingleDashBoards(req, res) {
    console.log("im trigerring")
    try {
      return Dashboards.findOne({
        where: {
          is_active: 1,
          id: req.params.id,
        },
      })
        .then((dashboard) => {
          return res.status(200).json({
            success: true,
            message: "Dashboards",
            final_obj: dashboard,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getAllDashBoardsforAdmin(req, res) {
    try {
      return Dashboards.findAll()
        .then((dashboard) => {
          console.log(dashboard,"hjhhjh")
          return res.status(200).json({
            success: true,
            message: "Dashboards",
            final_obj: dashboard,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getUsersforAdmin(req, res) {
    try {
      return User.findAll()
        .then((usersdata) => {
          return res.status(200).json({
            success: true,
            message: "Users",
            final_obj: usersdata,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getAllDashBoardsFoldersforAdmin(req, res) {
    try {
      return DashboardFolder.findAll()
        .then((dashboard) => {
          return res.status(200).json({
            success: true,
            message: "Dashboards Folders",
            final_obj: dashboard,
          });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async createUser(req, res) {
    try {
      let final_obj;
      const password = req.body.password;
      const hash = await bcrypt.hash(password, saltRounds);
    const data = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hash,
      type: "TRIAL",
      is_active: 1,
      trial_date: req.body.trial_date,
      is_admin: "false",
    });
    const token = jwt.sign({ id: data.id, email: req.body.email }, secret);

    return res.status(200).json({
      id: data.id,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      type: data.type,
      trial_date: data?.trial_date,
      accessToken: token,
      is_admin: data.is_admin,
    });

   }catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error,
    });
  }

     
  },
  async loginUser(req, res) {
    return User.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        // req.session.user = user;

        const token = jwt.sign({ id: user.id, email: req.body.email }, secret);
        console.log(user);
        return res.status(200).json({
          id: user.id,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          type: user.type,
          accessToken: token,
          trial_date: user?.trial_date,
          is_admin: user.is_admin,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err.message });
      });
  },
  async updateUser(req, res) {
    console.log(req);
    try {
      const body = req.body;
      const data = await User.update(body, {
        where: { id: req.body.id },
      });
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: [],
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async updatePass(req, res) {
    console.log(req);
    try {
      const password = req.body.password;
      const hash = await bcrypt.hash(password, saltRounds);
      const data = await User.update(
        { password: hash },
        {
          where: { id: req.body.id },
        }
      );
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: [],
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async updatePassbyemail(req, res) {
    console.log(req);
    try {
      const password = req.body.newPassword;
      const hash = await bcrypt.hash(password, saltRounds);
      const data = await User.update(
        { password: hash },
        {
          where: { email: req.body.email },
        }
      );
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data: [],
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
};
