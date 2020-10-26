<template>
  <div class="about" style="justify-content: center; display: flex">
    <timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      :show-day-and-month="true"
      :colorDots="colorDots"
      order="desc"
    ></timeline>
  </div>
</template>
<script>
import Timeline from "timeline-vuejs";
export default {
  components: {
    Timeline,
  },
  data() {
    return {
      messageWhenNoItems: "There arent items",
      colorDots: "#41B983",
      dataTimeline: [
        {
          from: new Date(2020, 4),
          title: "헬로디지털 프론트엔드 (~)",
          description:
            " 프론트엔드 개발, 크로스 플랫폼 앱 개발 <br> React-native/Vue.js/React.js / CSS / HTML <br>QA <br>  ",
        },
        {
          from: new Date(2020, 1),
          title: "Launchpack 프론트엔드 (3개월)",
          description:
            "런치팩 솔루션 프론트엔드 개발 <br> Vue.js / CSS / HTML <br>QA <br>  ",
        },
        {
          from: new Date(2019, 1),
          title: "넥슨 네트웍스 모바일 게임 QA (4개월)",
          description: "테스트 케이스 작성<br>Jira /Excel <br>",
        },
        {
          from: new Date(2018, 8),
          title: "어보브 반도체 연구소 QA (5개월)",
          description: "블루투스 칩 개발 QA<br>버그 구현 <br> 실험 결과 정리 ",
        },
        {
          from: new Date(2015, 1),
          title: "Princess Noura University Technician( 3년 2개월)",
          description:
            "사우디아라비아 왕립대학교 체육관 회원 관리 /운영 / 유지 보수<br> 운영 시스템 기획 <br> ",
        },
        {
          from: new Date(2014, 1),
          title: "학점은행제 멀티미디어 학사 졸업",
          description: "자료구조, C언어, 웹디자인, 영상 편집,",
        },
        {
          from: new Date(2013, 11),
          title: "정보처리 / 사무자동화 산업기사",
          description: "",
        },
        {
          from: new Date(2012, 2),
          title:
            "컴활2급 ,보육교사2급, 한식/양식/제빵 기능사,<br>스피닝 강사 자격증",
          description: "",
        },
        {
          from: new Date(2011, 2),
          title: "KC대학교 피아노과 중퇴",
          description: "",
        },
      ],
    };
  },
};
</script>
