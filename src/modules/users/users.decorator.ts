import { createParamDecorator } from '@nestjs/common';

// tslint:disable-next-line
export const User = createParamDecorator(
    (data, [root, args, ctx, info]) => ctx.req.user
);
