export { GET, POST } from "@/auth";

/**
 * [...nextauth] 경로 처리'
 * catch-all 라우트 처리
 * ex) /api/auth/[...nextauth]/a~b 전부다됨
 * http://localhost:3000/api/auth/callback/credentials
 * http://localhost:3000/api/auth/session
 * http://localhost:3000/api/auth/signin
 * http://localhost:3000/api/auth/signout
 * http://localhost:3000/api/auth/csrf
 * http://localhost:3000/api/auth/providers
 * http://localhost:3000/api/auth/verify-request
 * 이런식으로 모든게다됨
 * @see https://next-auth.js.org/configuration/initialization#route-configuration
 */
