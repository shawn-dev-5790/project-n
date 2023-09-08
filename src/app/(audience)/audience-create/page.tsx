export default function Page() {
  return (
    <div>
      <h2>pagename=audience-create</h2>
      <p>오디언스를 통해서 대상자를 관리하세요</p>
      <pre>
        <code>
          {JSON.stringify(
            {
              _name: '고객정보',
              아이디: 'user-123',
              회원등급: 1,
              적립금: 10000,
              회원가입일: '2023.01.01',
              마지막로그인일: '2023.01.02',
              방문일: ['2023.01.01', '2023.01.02'],
              사용할수있는쿠폰목록: [1, 2, 3],
              구매가능성점수: 80,
              구매주기이탈률조건: 25,
              구매이력: [
                {
                  금액: 3000,
                  구매일자: '2023.01.02',
                },
              ],
              장바구니조건:[]
            },
            null,
            2
          )}
        </code>
      </pre>
      <div>
        <p>전체 고객중 다음 대상자를 제외합니다.</p>
        대상자 + 조건 1 + 조건 1 = 10000명
      </div>
      <div>대상자 + 조건 2 + 조건 2 = 600명</div>
      <div> {10000 - 600} 명</div>
    </div>
  )
}

/*
대상자 만들기 ( 모든 고객 )
대상자 - 조건 추가


*/
