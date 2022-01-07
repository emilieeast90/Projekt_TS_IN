show dbs
use bookface

show collections
db.users.drop()

db.users.find()
// Predefined users
db.users.insertOne({
    username: 'areeven',
    password: 'secret',
    email: 'emilie@gmail.com'
})

db.users.insertOne({
    username: 'zerdar',
    password: 'password',
    email: 'mattias@gmail.com'
})

db.users.insertOne({
    username: 'deskavaenkelt',
    password: 'hemligaste',
    email: 'lars@gmail.com'
})

show collections

db.users.find()
db.users.findOne({username: 'deskavaenkelt'})
db.users.findOne({password: 'password'})
db.users.findOne({email: 'emilie@gmail.com'})


db.messages.find()
// Predefined users
db.messages.insertOne({
    subject: 'hello',
    privateMessage: 'secret'
})

db.messages.insertOne({
    subject: 'hola',
    privateMessage: 'whatcha doiiin?'
})

db.messages.insertOne({
    subject: 'bonjour',
    privateMessage: 'Ca va?'
})

show collections

db.messages.find()
db.messages.findOne({subject: 'hello'})
db.messages.findOne({privateMessage: 'watcha doiiin?'})


db.flows.find()
// Predefined users
db.flows.insertOne({
    username: 'emilie',
    post: 'wow'
})

db.flows.insertOne({
    username: 'lars',
    post: 'gymma idag igen då'
})

db.flows.insertOne({
    username: 'emilie',
    post: 'titta havet'
})

show collections

db.flows.find()
db.flows.findOne({username: 'emilie'})
db.flows.findOne({post: 'gymma idag igen då'})