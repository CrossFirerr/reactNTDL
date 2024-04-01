import React from "react";

export const Table = ({ entryList }) => {
  const entries = entryList.filter((item) => item.type === "entry");
  const badEntries = entryList.filter((item) => item.type === "bad");
  return (
    <div className="row mt-5 gap-2">
      {/* <!-- entry list --> */}
      <div className="col-md">
        <h3 className="text-center">Entry List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="entryList">
            {entries.map((item, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{item.task}</td>
                <td>{item.hr}hrs</td>
                <td className="text-end">
                  <button
                    onClick="handOnDelete('{
             item.id
           }')"
                    className="btn btn-danger btn-sm"
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <button
                    onClick="switchTask('{
             item.id
           }', 'bad')"
                    className="btn btn-success btn-sm"
                  >
                    <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <!-- bad list --> */}
      <div className="col-md">
        <h3 className="text-center">Bad List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="badList"></tbody>
        </table>
        <div className="alert alert-success" role="alert">
          You could have saved = <span id="total-bad">0</span>hrs last week
        </div>
      </div>
    </div>
  );
};
