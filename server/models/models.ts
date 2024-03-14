import sequelize from "../db";
import DataType from 'sequelize'

const User = sequelize.define('user', {
  id: {
    type: DataType.INTEGER, //значит что числовой
    primaryKey: true,//первичный ключ
    autoIncrement: true//автоматически как бы нарастает 1 2 3 и т.д.
  },
  email: {
    type: DataType.STRING,//тип
    unique: true,//уникальный
  },
  password: {
    type: DataType.STRING,

  },
  role: {
    type: DataType.STRING,
    defaultValue: 'USER'//default user or Admin
  }
})

const Basket = sequelize.define('basket', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketDevice = sequelize.define('basket_device', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
})

const Device = sequelize.define('device', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING, unique: true, allowNull: false},
  price: {type: DataType.INTEGER, allowNull: false},
  rating: {type: DataType.INTEGER, defaultValue: 0},
  img: {type: DataType.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataType.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  rate: {type: DataType.INTEGER, allowNull: false},
})

const DeviceInfo = sequelize.define('device_info', {
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataType.STRING, allowNull: false},
  description: {type: DataType.STRING, allowNull: false},
})

//связующая таблица
const TypeBrand = sequelize.define('type_brand',{
  id: {type: DataType.INTEGER, primaryKey: true, autoIncrement: true},
})



//связь пользователя и карзины один к одному
User.hasOne(Basket);
Basket.belongsTo(User);//карзина пренадлежит пользователю

User.hasMany(Rating);
Rating.belongsTo(User)

Basket.hasMany(BasketDevice);
BasketDevice.belongsTo(Basket);

Type.hasMany(Device);
Device.belongsTo(Type)

Brand.hasMany(Device);
Device.belongsTo(Brand)

Device.hasMany(Rating);
Rating.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Device.hasMany(DeviceInfo);
DeviceInfo.belongsTo(Device);

Device.hasMany(BasketDevice);
BasketDevice.belongsTo(Device);

Type.belongsToMany(Brand, {through:TypeBrand});
Brand.belongsToMany(Type, {through:TypeBrand});

export default {
  User,
  Basket,
  BasketDevice,
  Device,
  Type,
  Brand,
  Rating,
  TypeBrand,
  DeviceInfo
}
