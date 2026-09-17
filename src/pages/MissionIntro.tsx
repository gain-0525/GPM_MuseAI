import { useNavigate } from "react-router-dom";
import "./Mission.css";

const MissionIntro = () => {
  const navigate = useNavigate();

  return (
    <div className="mission-page">
      <div className="mission-content">
        <p className="mission-subtitle">MUSEAI × GPM</p>

        <h1>
          GPM 여러분,
          <br />
          환영합니다!
        </h1>

        <p className="mission-description">
          국립중앙박물관에서
          <br />
          특별한 유물 찾기 미션을 시작해보세요.
        </p>

        <div className="mission-info">
          <div>
            <span>⏱️</span>
            <strong>120분</strong>
            <p>유물 찾기 미션</p>
          </div>

          <div>
            <span>👥</span>
            <strong>6팀</strong>
            <p>팀당 5명</p>
          </div>
        </div>

        <button
          className="mission-button"
          onClick={() => navigate("/mission/guide")}
        >
          미션 확인하기 →
        </button>
      </div>
    </div>
  );
};

export default MissionIntro;
