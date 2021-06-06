type Lable = '个人信息1' | '个人信息2';

const urls: { lable: Lable; value: string }[] = [
  {
    lable: '个人信息1',
    value: 'url1',
  },
  {
    lable: '个人信息2',
    value: 'url2',
  },
];

/**
 *
 * @param label 目标地址的lael,可自定义
 * @returns
 */
export default function useURL(label: Lable) {
  return urls.find((item) => item.lable === label) ?? { label: '', value: '' };
}
