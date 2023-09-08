export {

}

/**
 * data assets : 
 * - 데이터 에셋으로 분류된 녀석들은 테이블로 표현이 가능해야 한다
 * - 테이블 요소에는 기본적으로 row,cell 형식으로 표현되는 공통 규격으로 표현한다
 * - 테이블 요소는 검색이 가능해야 한다
 * - 테이블 요소는 페이징이 가능해야 한다
 * - 테이블 요소는 필터링이 가능해야 한다
 * - 테이블 요소는 정렬이 가능해야 한다
 * - URL 정책 : {data-asset-name}s/:id?search={search-string}&page={page-number}&page-by={20}&=filter={attr-string}&sort={attr}&sort-by={asc,dsc}
 * 
 * user
 * site
 * campaign
 * audience
 * schedule
 * action (event-trigger)
 * channel
 * report
 * product
 * customer
 * 
 */