import React from "react";
import { Cell } from "@/components/Cell";
import { Row } from "@/components/Row";

export type FieldProps = {
  sizes: {width: number; height: number},
  cells: any,
  handleCellClick: (serialNumber: number) => void
}

const Field = (props: FieldProps) => {

  console.log("-- f p- ---", props);

  let index = -1;

  return (
    <div>
      {
        [...Array(props.sizes.height)].map(() => (
          <Row key={index}>
            {
              [...Array(props.sizes.width)].map(() => {
                index++;
                return (
                  <Cell
                    key={index}
                    cell={props.cells[index]}
                    handleCellClick={props.handleCellClick}
                  />
                );
              })
            }
          </Row>
        ))
      }
    </div>
  );
};

export {Field};