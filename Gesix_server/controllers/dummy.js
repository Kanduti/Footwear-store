const router =  require('express').Router()

router.get('/', (req,res) => {
    res.send("I am doing smthing")
})

module.exports = router