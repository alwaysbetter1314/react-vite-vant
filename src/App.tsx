import React,{ useState } from 'react';
import { Tabbar } from 'react-vant';
// pages
import Home from "./pages/home/index" // 可以es6 import导入页面组件， 也可以用React.lazy动态导入。

export default () => {

    const [active, setActive] = useState<any>(0);
    // 渲染主要视图
    const content = ()=>{
        const Foo = React.lazy(() => import('./pages/home'));
        const Bar = React.lazy(() => import('./pages/other'));
    
        switch(active){
          case 0: return (
            <React.Suspense fallback={<div>loading...</div>}>
                  <Foo/>
              </React.Suspense>
          );break;
    
          case 1: return (
            <React.Suspense fallback={<div>loading...</div>}>
                  <Bar/>
              </React.Suspense>
          );break;

          default : return <Home value={'其他'}></Home>; break;
        }
      }

  return (
    <>
        <div style={{width:'100%',overflow: 'auto', maxHeight:'90vh',  background:'#f0f0f0'}}>
            {content()}
        </div>
        
        <Tabbar value={active} onChange={ v=>setActive(v) }>
            <Tabbar.Item icon="home-o">主页</Tabbar.Item>
            {/* <Tabbar.Item icon="search">其他</Tabbar.Item> */}
        </Tabbar>
    </>
  );
};