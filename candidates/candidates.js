const router = require("express").Router({ mergeParams: true });
const got = require("got");

router.get("/", async (req,res) => {
    try{
        const candidatesData = await got("https://hs-resume-data.herokuapp.com/v3/candidates/all_data_b1f6-acde48001122")
        return res
            .status(200)
            .send(candidatesData.body);

    }catch (e){
        console.log("there was an error". e)
        res.status(500).send(e);
    }
})

module.exports = router;
