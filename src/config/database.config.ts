import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Product } from 'src/product/product.entity';
import { User } from 'src/users/user.entity';

export default (): TypeOrmModuleOptions => ({
  type: (process.env.DATABASE_TYPE as 'postgres' ) || 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,  
    username: process.env.DATABASE_USER || 'postgres',
    password: process.env.DATABASE_PASSWORD || 'password',
    database: process.env.DATABASE_NAME || 'mydb',
  synchronize: true,
  autoLoadEntities: true
    
  
  // logging: true,
  // logger: 'advanced-console',
    
    
    
})