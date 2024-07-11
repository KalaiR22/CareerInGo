const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@mernjob.cmk1ku9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");

    const db = client.db("mernJobPortal");
    const jobsCollection = db.collection('demoJobs');

    // Post a job
    app.post('/post-job', async (req, res) => {
      const body = req.body;
      body.createAt = new Date();
      try {
        const result = await jobsCollection.insertOne(body);
        res.status(200).send(result);
      } catch (error) {
        console.error("Error inserting job:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get all jobs
    app.get('/all-jobs', async (req, res) => {
      try {
        const jobs = await jobsCollection.find({}).toArray();
        res.send(jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get job by ID
    app.get('/all-jobs/:id', async (req, res) => {
      const id = req.params.id;
      try {
        const job = await jobsCollection.findOne({ _id: new ObjectId(id) });
        res.send(job);
      } catch (error) {
        console.error("Error fetching job by ID:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Get jobs by email
    app.get('/myJobs/:email', async (req, res) => {
      try {
        const jobs = await jobsCollection.find({ postedBy: req.params.email }).toArray();
        res.send(jobs);
      } catch (error) {
        console.error("Error fetching jobs by email:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Delete a job
    app.delete('/job/:id', async (req, res) => {
      const id = req.params.id;
      try {
        const filter = { _id: new ObjectId(id) };
        const result = await jobsCollection.deleteOne(filter);
        res.send(result);
      } catch (error) {
        console.error("Error deleting job:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    // Update a job
    app.patch("/update-job/:id", async (req, res) => {
      const id = req.params.id;
      const jobData = req.body;
      try {
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updateDoc = { $set: { ...jobData } };
        const result = await jobsCollection.updateOne(filter, updateDoc, options);
        res.send(result);
      } catch (error) {
        console.error("Error updating job:", error);
        res.status(500).send({ message: "Internal Server Error" });
      }
    });

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

run().catch(console.dir);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
