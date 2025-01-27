"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarController = void 0;
const common_1 = require("@nestjs/common");
const calendar_service_1 = require("./calendar.service");
const create_calendar_dto_1 = require("./dto/create-calendar.dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const find_user_dto_1 = require("./dto/find-user.dto");
let CalendarController = class CalendarController {
    constructor(calendarService) {
        this.calendarService = calendarService;
    }
    async create(createCalendarDto) {
        const { title, start, end_time, description, user_id, viewer_id } = createCalendarDto;
        const event = await this.calendarService.createCalendar({
            user_id,
            title,
            start,
            end_time,
            description,
            viewer_id,
        });
        return event;
    }
    async getAllCalendar() {
        const events = await this.calendarService.findAllCalendar();
        return events;
    }
    async createUser(createUserDto) {
        const user = await this.calendarService.createUser(createUserDto);
        return user;
    }
    async findUser(findUserDto) {
        const user = await this.calendarService.findUser(findUserDto);
        return user;
    }
};
exports.CalendarController = CalendarController;
__decorate([
    (0, common_1.Post)('/createSchedule'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_calendar_dto_1.CreateCalendarDto]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/allCalendar'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "getAllCalendar", null);
__decorate([
    (0, common_1.Post)('/createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)('/findUser'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_user_dto_1.FindUserDto]),
    __metadata("design:returntype", Promise)
], CalendarController.prototype, "findUser", null);
exports.CalendarController = CalendarController = __decorate([
    (0, common_1.Controller)('api'),
    __metadata("design:paramtypes", [calendar_service_1.CalendarService])
], CalendarController);
//# sourceMappingURL=calendar.controller.js.map