import { Injectable } from '@nestjs/common';
import { ExceptionsService } from 'src/config/exception/exceptions.service';
import { IAxios } from './interfaces/connect';
import axios from 'axios'

@Injectable()
export class AxiosService {
  constructor(
    private readonly exceptions: ExceptionsService,
  ) {};

  validateDiscount = async (params: IAxios) => {
    const res = await axios(params);
    if(res.data.status == false) this.exceptions.badRequestException({code:400, message:"invalid discount", error:"Conflict"});
    return res;
  };
};