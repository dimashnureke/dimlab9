const data = require('./categories.json')

Object.keys(data).map(key => {
    data[key].map(cate=>{
        console.log(cate)
    })
})