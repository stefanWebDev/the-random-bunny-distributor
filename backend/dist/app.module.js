"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const Module_1 = require("./modules/auth/Module");
const app_controller_1 = require("./app.controller");
const Module_2 = require("./modules/prisma/Module");
const Middleware_1 = require("./modules/auth/Middleware");
const Module_3 = require("./modules/bunny/Module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(Middleware_1.AuthMiddleware)
            .exclude({ path: 'login', method: common_1.RequestMethod.GET }, { path: 'register', method: common_1.RequestMethod.GET })
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', '..', 'client', 'dist'),
            }),
            core_1.RouterModule.register([
                {
                    path: 'api',
                    module: Module_1.OAuthModule,
                },
                {
                    path: 'api',
                    module: Module_3.BunnyModule,
                },
            ]),
            Module_1.OAuthModule,
            Module_2.PrismaModule,
            Module_3.BunnyModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map