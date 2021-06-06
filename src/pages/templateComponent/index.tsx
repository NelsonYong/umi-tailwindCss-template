import { useRequest } from 'umi';
import { requestInstanceGET } from '../request';
import { TemplateType } from './data';
import { useURL } from '@/hooks';

const TemplateComponent = () => {
  const { value: url1 } = useURL('个人信息1');
  const { data } = useRequest(() => requestInstanceGET<TemplateType>(url1));
  console.log(data);

  return (
    <div className="bs-border text-white w-full h-full">
      <div>hello qdm bs</div>
    </div>
  );
};

export default TemplateComponent;
