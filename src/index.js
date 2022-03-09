/**
 * Import app.js to load express configuration
 * Immport database configuration to connect database
 * Import dotEnv to call all global constants
 */
import app from './app.js'
import './database'
import dotEnv from './config'


try {
app.listen(dotEnv.PORT||3001);
console.log(`Server on Port ${dotEnv.PORT}`);
} catch (error) {
    console.log(error)
}
