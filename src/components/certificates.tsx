import { Image, Pagination, PaginationProps } from "antd";
import { useState } from "react";
import back from "./../assets/img/back.png";
import delving from "./../assets/img/delving.png";
import dep from "./../assets/img/dep.png";
import devops from "./../assets/img/devops.png";
import discover from "./../assets/img/discover.png";
import front from "./../assets/img/front.png";
import fullstack from "./../assets/img/fullstack.png";
import http from "./../assets/img/http.png";
import java from "./../assets/img/java.png";
import net from "./../assets/img/net.png";
import nlwp from "./../assets/img/nlwp.png";
import sql from "./../assets/img/sql.png";
import node from "./../assets/img/node.png";
import python from "./../assets/img/python.png";
import reactjs from "./../assets/img/reactjs.png";
import reactnlw from "./../assets/img/reactnlw.png";
import reactnt from "./../assets/img/reactnt.png";
import rf from "./../assets/img/rf.png";

export function Certificates() {
  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <div>
      {current === 1 ? (<div className="flex gap-8">
        <Image src={back}  width={400} />
        <Image src={delving}  width={400} />
        <Image src={dep}  width={400} />
        <Image src={java}  width={400} />
      </div>) : null}
      {current === 2 ? (<div className="flex gap-8">
        <Image src={devops}  width={400} />
        <Image src={fullstack}  width={400} />
        <Image src={net}  width={400} />
        <Image src={front}  width={400} />
      </div>) : null}
      {current === 3 ? (<div className="flex gap-8">
        <Image src={discover}  width={400} />
        <Image src={nlwp}  width={400} />
        <Image src={http}  width={400} />
        <Image src={node}  width={400} />
      </div>) : null}
      {current === 4 ? (<div className="flex gap-8">
        <Image src={python}  width={400} />
        <Image src={reactjs}  width={400} />
        <Image src={reactnlw}  width={400} />
        <Image src={reactnt}  width={400} />
      </div>) : null}
      {current === 5 ? (<div className="flex gap-8">
        <Image src={rf}  width={200} />
        <Image src={sql}  width={195} />
      </div>) : null}
      <Pagination className="mt-4 text-center" current={current} onChange={onChange} total={50} />
    </div>
    </Image.PreviewGroup>
  );
}