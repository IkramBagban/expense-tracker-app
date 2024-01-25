const { validationResult } = require("express-validator");
const Expense = require("../model/expense");
// const {validationResult}

exports.postExpense = async (req, res) => {
  const { userId, title, date, amount } = req.body;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        message: "Error in Expense Creation.",
        success: false,
        errors: errors.array(),
      });
    }
    const expense = new Expense({
      userId: userId,
      title: title,
      date: date,
      amount: amount,
    });

    const response = await expense.save();

    res.status(201).json({
      message: "Expense has been created",
      success: true,
      data: response,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
  }
};