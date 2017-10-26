var db = require('./../models/db')

module.exports.getStock = (date, callback) => {
  var d = new Date(date)
  var stock = {}
  var currentStock = {
    "pipes": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "bricks": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "cement": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "dust": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "aggregate": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "sand": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "steelWire": {
      "details": [],
      "cost": 0,
      "quantity": 0
    },
    "steelBar": {
      "details": [],
      "cost": 0,
      "quantity": 0
    }
  }

  db.getAllData((err, data) => {
    for(var i=0;i<data.pipes.length;i++){
      if(data.pipes[i].date.toDateString() == d.toDateString()){
        currentStock.pipes.details.push(data.pipes[i])
        currentStock.pipes.cost += data.pipes[i].cost
        currentStock.pipes.quantity += data.pipes[i].quantity
      }
    }

    for(var i=0;i<data.bricks.length;i++){
      if(data.bricks[i].date.toDateString() == d.toDateString()){
        currentStock.bricks.details.push(data.bricks[i])
        currentStock.bricks.cost += data.bricks[i].cost
        currentStock.bricks.quantity += data.bricks[i].quantity
      }
    }

    for(var i=0;i<data.cement.length;i++){
      if(data.cement[i].date.toDateString() == d.toDateString()){
        currentStock.cement.details.push(data.cement[i])
        currentStock.cement.cost += data.cement[i].cost
        currentStock.cement.quantity += data.cement[i].quantity
      }
    }

    for(var i=0;i<data.dust.length;i++){
      if(data.dust[i].date.toDateString() == d.toDateString()){
        currentStock.dust.details.push(data.dust[i])
        currentStock.dust.cost += data.dust[i].cost
        currentStock.dust.quantity += data.dust[i].quantity
      }
    }

    for(var i=0;i<data.aggregate.length;i++){
      if(data.aggregate[i].date.toDateString() == d.toDateString()){
        currentStock.aggregate.details.push(data.aggregate[i])
        currentStock.aggregate.cost += data.aggregate[i].cost
        currentStock.aggregate.quantity += data.aggregate[i].quantity
      }
    }

    for(var i=0;i<data.sand.length;i++){
      if(data.sand[i].date.toDateString() == d.toDateString()){
        currentStock.sand.details.push(data.sand[i])
        currentStock.sand.cost += data.sand[i].cost
        currentStock.sand.quantity += data.sand[i].quantity
      }
    }

    for(var i=0;i<data.steelWire.length;i++){
      if(data.steelWire[i].date.toDateString() == d.toDateString()){
        currentStock.steelWire.details.push(data.steelWire[i])
        currentStock.steelWire.cost += data.steelWire[i].cost
        currentStock.steelWire.quantity += data.steelWire[i].quantity
      }
    }
    for(var i=0;i<data.steelBar.length;i++){
      if(data.steelBar[i].date.toDateString() == d.toDateString()){
        currentStock.steelBar.details.push(data.steelBar[i])
        currentStock.steelBar.cost += data.steelBar[i].cost
        currentStock.steelBar.quantity += data.steelBar[i].quantity
      }
    }

    stock.cost = currentStock.pipes.cost + currentStock.bricks.cost + currentStock.aggregate.cost + currentStock.cement.cost + currentStock.dust.cost + currentStock.sand.cost + currentStock.steelWire.cost + currentStock.steelBar.cost
    stock.particulars = currentStock

    callback(err, stock)
  })
}