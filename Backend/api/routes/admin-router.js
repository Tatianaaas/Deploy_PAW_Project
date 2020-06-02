const express = require('express')

const authorize = require('../middleware/authorizeAdmin')
const session = require('../middleware/session')

const testController = require("../controllers/testController")
const userController = require('../controllers/userController')
const adminController = require('../controllers/adminController')

const adminRouter = express.Router()

//Editar utilizador
adminRouter.put("/update/:userId", session, authorize, userController.updateUser);

//Editar password do administrador
adminRouter.put('/updatepass/:userId', session, authorize, adminController.updateAdminPassword);

//Ver um determinado utilizador pelo ID
adminRouter.get('/show/:userId', userController.getUserById);

//Criar novos técnicos
adminRouter.post('/signuptechnics', session, authorize, adminController.createTechnics);

//Eliminar utilizadores
adminRouter.delete("/delete/:userId", session, authorize, adminController.deleteUser);

//Logout
//adminRouter.post("/logout", session, authorize, userController.logout)

//Obter numero de testes por dia , por pessoa e infetados
adminRouter.post("/tests/day", session, authorize, testController.getTestsByDay);

//Obter numero de testes por pessoa
adminRouter.get("/tests/:username", testController.getTestsByPerson);

//Obter numero total de infetados
adminRouter.post("/tests/infected", session, authorize, testController.getinfetados);

//Obter todos os testes realizados
adminRouter.get("/tests", testController.getOrders);

module.exports = adminRouter