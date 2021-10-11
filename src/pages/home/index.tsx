import React, { useState } from 'react'
import { Button, Uploader } from 'react-vant';
import styles from './index.module.less'
import ProcessImage from 'react-imgpro';

function filetoDataURL(file,fn){
  var reader = new FileReader();
  reader.onloadend = function(e){
    fn(e.target.result);
  };
  reader.readAsDataURL(file);
};

export default (props: any) => {
  const [imgurl, setImgUrl] = useState("https://img1.baidu.com/it/u=1940887259,2610438367&fm=26&fmt=auto")

  return (
    <div>
      <input type="file" onChange={(v:any)=>{
        console.log(v.target.files[0]);
        filetoDataURL(v.target.files[0], setImgUrl)
      }}/>
      {/* <img src={imgurl} width="100%"></img> */}
      <ProcessImage
        image={imgurl}
        greyscale={true}
        processedImage={(src, err) => setImgUrl(src)}
      />
    </div>

  )
}