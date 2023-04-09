import React, { useEffect, useState } from "react";
import { title } from "../../ultis/title";
import { useNavigate } from "react-router-dom";
import { getDataScoreByMSSV } from "../../apis";

const MyScore = () => {
  document.title = title.my_scoreboard;
  const navigate = useNavigate();
  const mssv = localStorage.getItem("mssv");

  const [scores, setScores] = useState([]);

  useEffect(() => {
    getDataScoreByMSSV({mssv: mssv}).then((reponse) => {
      setScores(reponse.data);
    });
  }, [mssv]);

  return (
    <>
      {mssv !== null ? (
        <div className="px-8 text-center">
          <table style={{ width: "100%" }}>
            <thead>
              <tr className="uppercase">
                <th>MSSV</th>
                <th>Họ và tên</th>
                <th>Lớp</th>
                <th>Đơn vị</th>
                <th>Gmail</th>
                <th>LISTENING</th>
                <th>READING</th>
                <th>TỔNG điểm</th>
              </tr>
            </thead>
            <tbody>
              {scores.map((score, index) => (
                <tr key={index}>
                  <td>{score.MSSV}</td>
                  <td>{score.HoTen}</td>
                  <td>{score.tenLop}</td>
                  <td>{score.tenDonVi}</td>
                  <td>{score.Gmail}</td>
                  <td>{score.LISTENING}</td>
                  <td>{score.READING}</td>
                  <td>{score.READING + score.LISTENING}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[85vh]">
          <button onClick={() => navigate("/login")} className="btn p-5">
            Đăng nhập ngay để xem thông tin
          </button>
        </div>
      )}
    </>
  );
};

export default MyScore;
