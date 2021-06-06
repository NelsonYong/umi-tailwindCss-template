import { useRequest } from 'umi';
import { requestInstanceGET } from '../request';
import { TemplateType } from './data';
import { useURL } from '@/hooks';
import Contain from '@/components/Contain';

const TemplateComponent = () => {
  // 发送请求
  const { value: url1 } = useURL('个人信息1');
  const { data } = useRequest(() => requestInstanceGET<TemplateType>(url1));
  console.log(data);

  return (
    <Contain className="text-lg">
      {/* 填写大屏的图表组件 */}
      <div className="text-white">qdm bs </div>
    </Contain>
  );
};

export default TemplateComponent;
