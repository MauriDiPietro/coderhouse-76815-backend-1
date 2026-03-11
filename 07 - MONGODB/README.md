# Comandos MongoDB

## Ver bases de datos disponibles
- `show databases`
- `show dbs`

## Crear base de datos
- `use ecommerce`

## Crear una colección
- `db.createCollection('test')`
- `show dbs`

## Renombrar la colección
- `db.test.renameCollection('products')`

## Insertar un documento en una colección
- `db.products.insertOne({name: 'prod1', price: 500})`
- `const array = [{name: 'prod2', price: 600},{name: 'prod3', price: 300},{name: 'prod4', price: 500}]`
- `db.products.insertMany(array)`

## Fecha
- `db.products.insertOne({name: 'prod5', price: 500, date: ISODate()})`

## Leer documentos
- `db.products.findOne({name: 'Aceite'})`
- `db.products.findOne({name: 'Café', price: 1500})`

## Borrar documentos
- `db.products.deleteOne({name: 'Aceite'})`

## Contadores
- `db.products.count()`
- `db.products.find().limit(10)`
- `db.products.countDocuments({price: 1500})`

## Operadores de comparación
- `db.products.find({price: {$eq: 1500}})`
- `db.products.find({price: {$ne: 1500}})`
- `db.products.find({price: {$gt: 500}})`
- `db.products.find({price: {$gte: 1500}})`
- `db.products.find({price: {$lt: 1500}})`
- `db.products.find({price: {$lte: 1500}})`

## Operador in
- `db.products.find({section: {$in: ['bebidas', 'comestibles']}})`

## Operador nin
- `db.products.find({section: {$nin: ['comestibles']}})`

## Operador exists
- `db.products.find({promo: {$exists: true}})`

## Filtros combinados
- `db.products.find({$or: [{stock: 100}, {stock: 200}]})`
- `db.productos.find({$and: [{active: true}, {section: 'bebidas'}]})`

## Expresiones regulares
- `db.products.find({name: /^Té/})`
- `db.products.find({ name: /Boldo$/ })`
- `db.products.find({ name: /Té/ })`
- `db.products.find({ name: /té/i })`

## Proyecciones
- `db.products.find({}, {active: true})`
- `db.products.find({}, {active: false})`

## Ordenamiento
- `db.products.find({}).sort({name: 1})`
- `db.products.find({}).sort({name: -1})`

## Skip
- `db.products.skip(0).limit(5)`
- `db.products.skip(5).limit(5)`
- `db.products.skip(10).limit(5)`

## Update
- `db.products.updateOne({_id: ObjectId('safafdsdff')}, { $set: {active: false} })`
- `db.products.updateOne({ _id: ObjectId('asfadfdf') }, { $unset: {stock: ""} })`
- `db.products.updateOne({ _id: ObjectId('sdfdsfdsf') }, { $rename: { 'section': 'rubro' } })`
- `db.products.updateOne({_id: ObjectId('sdfsdfds')}, {$inc: {stock: 100}})`
- `db.products.updateMany({active: false}, { $set: { active: true } })`

## Delete
- `db.products.deleteMany({})`
- `db.products.deleteMany({active: false})`
- `db.products.deleteOne({name: 'Aceite'})`