import { ForbiddenException, Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/config/exception/exceptions.service';
import { AxiosService } from '../axios/axios.service';
import { IAxios } from '../axios/interfaces/connect';

@Injectable()
export class GuardsService {
  constructor(
      private readonly exceptions: ExceptionsService,
      private readonly axios: AxiosService
  ) {};

  validateDiscount = async (data: IAxios): Promise<Boolean> => {
    const storedToken = await this.axios.validateDiscount(data);
    return true;
  };
};