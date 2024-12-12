require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connecting to the main database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create a Schema and Model for Contact in the main database
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});
const Contact = mongoose.model('Contact', contactSchema);

// Create a Schema and Model for Resources in each category
const categories = [
  'leadership-toolkits',
  'research-papers',
  'training-materials',
  'case-studies',
  'policy-briefs',
  'webinar-archives',
];

const categoryModels = {};
categories.forEach((category) => {
  const resourceSchema = new mongoose.Schema({
    title: String,
    category: { type: String, default: category },
  });
  categoryModels[category] = mongoose.model(category, resourceSchema);
});

// Seed data for each category collection (optional)
(async () => {
  for (const [category, ResourceModel] of Object.entries(categoryModels)) {
    const resourceCount = await ResourceModel.countDocuments();
    if (resourceCount === 0) {
      await ResourceModel.insertMany([
        { title: `${category} Item 1`, category },
        { title: `${category} Item 2`, category },
        { title: `${category} Item 3`, category },
      ]);
      console.log(`Seed data inserted for ${category}`);
    }
  }
})();

// POST endpoint for Contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return res.status(201).json({
      success: true,
      message: 'Message saved successfully',
      data: {
        _id: newContact._id,
        name: newContact.name,
        email: newContact.email,
        message: newContact.message,
      },
    });
  } catch (err) {
    console.error('Error saving message:', err);
    return res.status(500).json({ success: false, message: 'Failed to save message' });
  }
});

// GET endpoint to fetch all contacts
app.get('/api/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    console.error('Error fetching contacts:', err);
    res.status(500).json({ message: 'Failed to fetch contacts' });
  }
});

// API endpoints for resources in each category collection
categories.forEach((category) => {
  app.get(`/api/${category}`, async (req, res) => {
    try {
      const ResourceModel = categoryModels[category];
      const data = await ResourceModel.find({ category });
      res.status(200).json(data);
    } catch (err) {
      console.error(`Error fetching ${category} data:`, err);
      res.status(500).json({ message: `Failed to fetch ${category} data` });
    }
  });
});

// PUT endpoint to update an item in a specific collection
app.put('/api/data/:collection/:id', async (req, res) => {
  const { collection, id } = req.params;
  const updatedData = req.body;

  try {
    let result;
    switch (collection) {
      case 'leadership-toolkits':
        result = await categoryModels['leadership-toolkits'].findByIdAndUpdate(id, updatedData, { new: true });
        break;
      case 'research-papers':
        result = await categoryModels['research-papers'].findByIdAndUpdate(id, updatedData, { new: true });
        break;
      case 'training-materials':
        result = await categoryModels['training-materials'].findByIdAndUpdate(id, updatedData, { new: true });
        break;
      case 'case-studies':
        result = await categoryModels['case-studies'].findByIdAndUpdate(id, updatedData, { new: true });
        break;
      case 'policy-briefs':
        result = await categoryModels['policy-briefs'].findByIdAndUpdate(id, updatedData, { new: true });
        break;
      case 'webinar-archives':
        result = await categoryModels['webinar-archives'].findByIdAndUpdate(id, updatedData, { new: true });
        break;
      default:
        return res.status(400).json({ error: 'Invalid collection name' });
    }

    if (result) {
      res.status(200).json({ message: 'Update successful', data: result });
    } else {
      res.status(404).json({ error: 'Item not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the item', details: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
