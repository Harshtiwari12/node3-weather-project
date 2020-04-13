const request = require('request');
const chalk = require('chalk')

var weather = (lat,lon,callback)=> {
    var url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e8cde246c8e175455f7354975fd34a4a`;
    request({url,json:true,proxy:'http://10.10.12.2:8080'},(err,res,body)=> {
        if(err)
        {
            // console.log(chal.red.bgWhite('connection not established with openweather'));
            callback('error',undefined,undefined)
        }
        else
        {
            // console.log(body)
            // console.log(chalk.green.bgWhite.inverse(`the temp is ${body.main.temp} and the visibility is ${body.visibility} in ${body.name}`) )
            callback(undefined,body.main.temp,body.name);
        }
        
    })
}


module.exports = weather;