const express = require('express');
const router = require('express').Router();
const Listing = require('../models/Listings');

// Create a listing

router.post('/', async (req, res) => {
    const newListing = new Listing(req.body);
    try {
      const savedListing = await newListing.save();
      res.status(200).json(savedListing);
    } catch (err) {
        res.status(500).json(err);
    }
})

//get all listings

router.get('/', async (req, res) => {
    try {
        const listings = await Listing.find();
        res.status(200).json(listings);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;