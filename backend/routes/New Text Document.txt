const express = require('express');
const router = express.Router();
const Resource = require('../models/resource');

// Create a new resource
router.post('/', async (req, res) => {
  const { title, category } = req.body;
  try {
    const newResource = new Resource({ title, category });
    const savedResource = await newResource.save();
    res.status(201).json(savedResource);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create resource', details: err });
  }
});

// Read all resources
router.get('/', async (req, res) => {
  try {
    const resources = await Resource.find();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resources', details: err });
  }
});

// Read a single resource by ID
router.get('/:id', async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.status(200).json(resource);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch resource', details: err });
  }
});

// Update a resource by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedResource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.status(200).json(updatedResource);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update resource', details: err });
  }
});

// Delete a resource by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndDelete(req.params.id);
    if (!deletedResource) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    res.status(200).json({ message: 'Resource deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete resource', details: err });
  }
});

module.exports = router;
