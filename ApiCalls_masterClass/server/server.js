const app = require("./app.js")
const port = 20000
// const port = process.env.PORT || 20000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
