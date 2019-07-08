import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { Role } from './entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([Role])
    ],
    providers: [RolesService],
    exports: [RolesService]
})
export class RolesModule {}
