const mongoose = require('mongoose');
const Router = require('express');
const router = Router();
const qr = require('../schema.js/qr');

router.post('/', function(req, res) {
    const { amount, purpose } = req.body;

    const QR = new qr({ 
        amount: amount, 
        purpose: purpose, 
        numberofscans: 0 
    });

    QR.save()
        .then((savedQR) => {
            console.log('qr created successfully');
            // Return the response AFTER the database confirms save success
            return res.status(201).json({
                mssg: "qr created successfully",
                token: savedQR._id
            });
        })
        .catch((err) => {
            console.error('Error creating QR:', err);
            return res.status(500).json({ 
                error: "Internal server error while creating QR" 
            });
        });
});

module.exports = router;