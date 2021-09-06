const express = require('express')
const cors = require('cors')

const mockToken = '672de54be2a32bc44f31bc0e5f1aaa0997178a75a70314bca4f922233f7de13f'
const mockUser = {
    id: 1,
    name: 'anousone',
    email: 'anousone@gmail.com'
}

const app = express()

app.use(cors())
app.use(express.json())

const router = express.Router()

router.post('/login', (req, res) => {
    const { email, password } = req.body

    if(email === 'admin@admin.com' && password === 'smpidpmr'){
        return res.json({
            user: mockUser,
            token: mockToken
        })
    }else{
        return res.status(401).json({message: 'Invalid password der'})
    }
})

router.get('/me', (req, res) => {
    const headers = req.headers.authorization
    const token = headers && headers.split(' ')[1] // Bearer <TOKEN>
    
    if(token === mockToken){
        return res.json({
            user: mockUser
        })
    }else{
        return res.status(401).json({message: 'Invalid token'})
    }
})

app.use(router)

module.exports = {
    path: '/api',
    handler: app
}