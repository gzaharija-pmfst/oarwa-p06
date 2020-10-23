const mongoose = require('mongoose')

const password = 'bazapodataka'
const dbname = 'poruke-api'

const url = `mongodb+srv://oarwa-gz:${password}@cluster0.l0kev.mongodb.net/${dbname}?retryWrites=true&w=majority`

mongoose.connect(url, {    	
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
 })

 const porukaSchema = new mongoose.Schema({
     sadrzaj: String,
     datum: Date,
     vazno: Boolean
 })

 const Poruka = mongoose.model('Poruka', porukaSchema, 'poruke')

 const novaPoruka = new Poruka({
     sadrzaj: 'Mongoose je zabavan',
     datum: new Date(),
     vazno: true
 })





