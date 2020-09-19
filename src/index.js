const express = require('express')
require('./db/mongoose')
const path = require('path')
const app = express()
const port = process.env.port || 3002
const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))
const equipmentRouter = require('./routers/equipment')
const facilityRouter = require('./routers/facility')
const workerRouter = require('./routers/worker')
const workOrderRouter = require('./routers/workOrder')

app.use(express.json())
app.use(equipmentRouter)
app.use(facilityRouter)
app.use(workerRouter)
app.use(workOrderRouter)

app.get('/upload', (req,res) => {
    res.send("hi")
})


app.listen(port, () => {
    console.log("Server is on port " + port)
})

// const User = require('./models/user')
// const Post = require('./models/post')
// const main = async () => {

//     const user = User.findById('5f2ef6f319e72f17083d7cc4')
//     await user.populate('posts').execPopulate()
//     console.log(user.posts)

//     const post = Post.findById('5f2f9e7d5a85f22043917bb5')
//     await post.populate('CreatedBy').execPopulate()
//     console.log(post.owner)

// }
// main()




