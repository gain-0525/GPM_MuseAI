import { useNavigate } from "react-router-dom";
import "./Mission.css";

const MissionGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="mission-page mission-guide-page">
      <div className="mission-content">
        <p className="mission-subtitle">GPM MISSION</p>

        <h1>
          유물 찾기
          <br />
          미션
        </h1>

        <p className="mission-description">
          국립중앙박물관을 돌아다니며
          <br />
          미션에 주어진 유물을 찾아보세요!
        </p>

        {/* 미션 기본 정보 */}
        <div className="mission-sheet">
          <h2>📌 미션 안내</h2>

          <ul>
            <li>
              <strong>미션 시간</strong>
              <span>
                120분
                <small>※ 60분 이후부터 인정</small>
              </span>
            </li>

            <li>
              <strong>팀 구성</strong>
              <span>
                팀당 5명 / 총 6팀
                <small>※ 한국인 단원 1명 이상 포함</small>
              </span>
            </li>

            <li>
              <strong>점수</strong>
              <span>일반 미션 1점 / 보너스 미션 2점</span>
            </li>
          </ul>

          <p className="mission-note">
            완료한 미션 수와 보너스 미션 결과를 바탕으로 우승팀을 선정합니다.
            <br />
            동점팀 발생 시 미션 수행의 성실도를 판단합니다.
          </p>
        </div>

        {/* 일반 미션 */}
        <div className="mission-list">
          <h2>🔍 Mission</h2>

          <div className="mission-card">
            <div className="mission-number">MISSION 01</div>
            <h3>'경천사십층석탑' 앞에서 단체 셀카 찍기</h3>
            <span className="mission-score">+1점</span>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/8")}
            >
              {" "}
              설명 바로가기 →{" "}
            </button>
          </div>

          <div className="mission-card">
            <div className="mission-number">MISSION 02</div>
            <h3>
              백제 무령왕릉에서 발견된 관 꾸미개 또는 신라 금관과 팀원 2명
              이상이 함께 찍기
            </h3>
            <p className="mission-hint">※ 두 유물 중 하나를 선택하세요.</p>
            <span className="mission-score">+1점</span>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/5")}
            >
              {" "}
              관 꾸미기 설명 바로가기 →{" "}
            </button>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/7")}
            >
              {" "}
              금관 설명 바로가기 →{" "}
            </button>
          </div>

          <div className="mission-card">
            <div className="mission-number">MISSION 03</div>
            <h3>
              한국에서 현존하는 가장 오래된 '철불'이 무엇인지 찾고, 해당 유물과
              함께 팀원 2명 이상이 나오게 사진 찍기
            </h3>
            <span className="mission-score">+1점</span>
          </div>

          <div className="mission-card">
            <div className="mission-number">MISSION 04</div>
            <h3>외규장각 의궤와 팀원 2명 이상이 함께 나오게 사진 찍기</h3>
            <span className="mission-score">+1점</span>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/12")}
            >
              {" "}
              설명 바로가기 →{" "}
            </button>
          </div>

          <div className="mission-card">
            <div className="mission-number">MISSION 05</div>
            <h3>'사유의 방'에서 팀원 모두가 나오도록 단체 셀카 찍기</h3>
            <span className="mission-score">+1점</span>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/15")}
            >
              {" "}
              설명 바로가기 →{" "}
            </button>
          </div>

          <div className="mission-card">
            <div className="mission-number">MISSION 06</div>
            <h3>금속활자와 팀원 한 명이 함께 나오도록 사진 찍기</h3>
            <span className="mission-score">+1점</span>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/10")}
            >
              {" "}
              설명 바로가기 →{" "}
            </button>
          </div>

          <div className="mission-card">
            <div className="mission-number">MISSION 07</div>
            <h3>
              대한제국 황제의 도장 '칙명지보'와 팀원 한 명이 나오도록 사진 찍기
            </h3>
            <span className="mission-score">+1점</span>
            <button
              className="mission-detail-button"
              onClick={() => navigate("/detail/17")}
            >
              {" "}
              설명 바로가기 →{" "}
            </button>
          </div>
        </div>

        {/* 보너스 미션 */}
        <div className="bonus-mission">
          <div className="mission-number">⭐ BONUS MISSION</div>

          <h2>가장 인상 깊었던 유물은?</h2>

          <p>
            관람한 유물 중 팀원들이 가장 인상 깊었던 유물 하나를 정해주세요.
          </p>

          <p>
            해당 유물의 사진과 함께
            <strong> 인상 깊었던 이유</strong>를 설명해주세요.
          </p>

          <span className="mission-score">+2점</span>

          <p className="mission-hint">
            ※ 미션 1~7에 해당하는 유물은 제외합니다.
          </p>
        </div>

        {/* 제출 방법 */}
        <div className="mission-sheet">
          <h2>📸 미션 결과 제출</h2>

          <p>
            미션을 완료한 후 팀장님이
            <strong> 팀장 전용 오픈채팅방</strong>으로 수행 결과 사진을
            보내주세요.
          </p>

          <div className="submission-steps">
            <div>
              <strong>01</strong>
              <span>미션 수행</span>
            </div>

            <div>
              <strong>02</strong>
              <span>사진 촬영</span>
            </div>

            <div>
              <strong>03</strong>
              <span>팀장이 오픈채팅방에 제출</span>
            </div>
          </div>
        </div>

        <button className="mission-button" onClick={() => navigate("/home")}>
          MuseAI 시작하기 →
        </button>
      </div>
    </div>
  );
};

export default MissionGuide;
