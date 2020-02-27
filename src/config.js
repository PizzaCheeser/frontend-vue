import development from './config/development'
console.log(development)

var env = process.env.NODE_ENV || 'development'

var config = {
  development: development,
}

export default config[env]
