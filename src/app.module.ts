import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityModule } from './entities/entity.module';
import { environment } from './environments/environment';
import { UserModule } from './components/users/users/user.module';
import { AuthenticationModule } from './components/authentication/authentication.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: environment.DATABASE_TYPE as any,
      host: environment.DATABASE_HOST,
      port: environment.DATABASE_PORT,
      database: environment.DATABASE_NAME,
      entities: [],
      username: environment.DATABASE_USER,
      password: environment.DATABASE_PASSWORD,
      synchronize: environment.DB_SYNCHRONIZE,
      autoLoadEntities: environment.DB_AUTO_LOAD_ENTITIES
    }),
    EntityModule,

    AuthenticationModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
