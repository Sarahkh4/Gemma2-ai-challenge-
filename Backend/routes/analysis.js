const express = require('express');
const router = express.Router();
const multer = require('multer');
const analysisController = require('../Features/ResumeAnalysis');
const careerPathController = require("../Features/careerPathSuggestions");
const SkillsRecommend = require('../Features/SkillsRecommendation');
const Storage = require('../utilities/FileStorage');

const upload = multer({ storage: Storage });

router.post('/uploadResume', upload.single('file'), (req, res) => {
    try {
        console.log("File uploaded and saved as 'resume.pdf'");
        res.send({ message: "File uploaded successfully!", file: req.file });
    } catch (error) {
        console.log(error)
    }
});


router.post('/getanalysis', analysisController.analysisControler);
router.post("/suggestCareerPaths", careerPathController.suggestCareerPaths);
router.post('/getskillsrecommendation', SkillsRecommend.RecommendSkills);

module.exports = router;