/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  compiler: {
    styledComponents: {
      ssr: true, // SSR을 위한 설정
      displayName: true, // 클래스명에 컴포넌트 이름을 붙임
      pure: true, // dead code elimination (사용되지 않는 속성 제거)
    },
  },
};

module.exports = nextConfig;
