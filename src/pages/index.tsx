import './tailwind.css';
import './index.less';

export default function IndexPage() {
  return (
    <div className="h-screen w-screen flex flex-col bs-bg bg relative ">
      <div
        className=" w-full bs-bg-title"
        style={{
          background: `url(“标题文件路径”) no-repeat center top`,
          backgroundSize: 'cover',
          position: 'relative',
          bottom: '0.6rem',
          flexBasis: '60px',
          flexShrink: 0,
        }}
      >
        <div
          className="absolute left-4 top-10 text-blue-300 "
          style={{ fontSize: '0.8vw' }}
        >
          更新时间：
          <span>{''}</span>
        </div>

        <div
          className="absolute right-4 top-10 text-blue-300 flex"
          style={{ fontSize: '0.8vw' }}
        >
          {/* 顶部弹窗 */}
          <div
            className=" text-blue-300  flex items-center mr-4"
            style={{ fontSize: '0.8vw', cursor: 'pointer' }}
          >
            <div className="pr-2"></div>
          </div>
        </div>
      </div>

      {/* 组件内使用 bs-border 样式 */}
      <div className=" flex flex-row w-screen flex-1">
        <div className=" h-full w-1/4">
          <div className="h-1/3 w-full p-2 pb-1 pt-2 bs-border">{/* 1 */}</div>
          <div className="h-1/3 w-full pl-2 pr-2 pb-1 pt-1 bs-border">
            {/* 2 */}
          </div>
          <div className="h-1/3 w-full p-2 pb-2 pt-1 bs-border">{/* 3 */}</div>
        </div>
        <div className="w-2/4 h-full">
          <div className="h-1/4 pt-2 pb-1 bs-border">{/* 4 */}</div>
          <div className="h-3/4 pt-2 pb-2 bs-border ">
            <div className="h-full w-full bs-border">
              <div className="h-4/5 ">{/* 5 */}</div>
              <div className="h-1/5 ">{/* 6 */}</div>
            </div>
          </div>
        </div>
        <div className="w-1/4 h-full">
          <div className="h-1/3 w-full p-2 pb-1 bs-border">{/* 7 */}</div>
          <div className="h-2/3 w-full p-2 pb-2 pt-1 bs-border">{/* 8 */}</div>
        </div>
      </div>
    </div>
  );
}
