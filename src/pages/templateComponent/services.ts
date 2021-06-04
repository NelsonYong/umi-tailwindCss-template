import { request } from 'umi';
import { TemplateType } from './data';

export async function templateReqyest(params?: any) {
  return request<API.Basis<{ list: Partial<TemplateType>[]; total: number }>>(
    'url',
    {
      params,
    },
  );
}
