    
import admin from './admin'
import system from './system'

export default app =>{
    app.use('/admin', admin)
    app.use('/system', system)
    app.use('/', function (req, res){
        res.send('132')
    })
}