import { Pagination, PaginationProps, Image } from "antd";
import { useState } from "react";
import sub1 from "./../assets/img/sub1.png";
import sub2 from "./../assets/img/sub2.png";

export function Subjects() {
  const [current, setCurrent] = useState(1);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div>
      <p></p>{" "}
      {current === 1 ? (
        <div>
          <Image src={sub1} />
        </div>
      ) : null}
      {current === 2 ? (
        <div>
          <Image src={sub2} />
        </div>
      ) : null}
      <Pagination
        className="mt-4 "
        current={current}
        onChange={onChange}
        total={20}
      />
    </div>
  );
}
