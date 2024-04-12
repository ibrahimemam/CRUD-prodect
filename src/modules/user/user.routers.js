import {Router} from "express"
const routers=Router()

import {signup,signin,allget,deleteuser,update, search} from './user.controller.js'

routers.post('/signup',signup );
routers.post('/signin',signin );
routers.route('/user/:id').put(update).delete(deleteuser)
routers.get("/alluser",allget)
routers.get('/users/search',search )


export default routers