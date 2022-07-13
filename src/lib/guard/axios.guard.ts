import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GuardsService } from './guard.service';

@Injectable()
export class ValidDiscountGuard implements CanActivate {
    constructor(
        private readonly guardService: GuardsService,
    ) { };

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const body = req.body;
        const url = "https://622271e2666291106a26a17c.mockapi.io/discount/v1/new"
        const method = "post"
        if(body.discountCode) await this.guardService.validateDiscount({ method: method, url: url, data: { userId: body.id, houseId: body.houseId, discountCode: body.discountCode } });
        return true;
    };
};