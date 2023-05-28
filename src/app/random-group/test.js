const DTR_MEMBERS = [
  { id: 1, name: "김성무", chapter: "clev", captain_count: 0, group_no: 0 },
  { id: 2, name: "이규민", chapter: "clev", captain_count: 0, group_no: 0 },
  { id: 3, name: "박민성", chapter: "clev", captain_count: 0, group_no: 0 },
  { id: 4, name: "이민호", chapter: "svc", captain_count: 0, group_no: 0 },
  { id: 6, name: "임송이", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 8, name: "이시원", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 10, name: "방승민", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 11, name: "유지연", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 13, name: "서예슬", chapter: "svc", captain_count: 0, group_no: 0 },
  { id: 15, name: "김원일", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 16, name: "사인영", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 18, name: "박지유", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 19, name: "최고은", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 20, name: "송재혁", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 21, name: "오윤경", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 22, name: "이인표", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 23, name: "김문정", chapter: "svc", captain_count: 0, group_no: 0 },
  { id: 24, name: "이경아", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 25, name: "신연수", chapter: "svc", captain_count: 0, group_no: 0 },
  { id: 27, name: "전상아", chapter: "stf", captain_count: 0, group_no: 0 },
  { id: 28, name: "이승균", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 29, name: "나종협", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 30, name: "이혜주", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 31, name: "배상현", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 32, name: "박다솜", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 33, name: "김재은", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 34, name: "김의태", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 35, name: "노혜미", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 36, name: "이승준", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 37, name: "이형구", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 38, name: "오영주", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 40, name: "김윤정", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 41, name: "이종형", chapter: "frt", captain_count: 0, group_no: 0 },
  { id: 42, name: "김남상", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 43, name: "이유진", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 44, name: "정세화", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 45, name: "정승호", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 46, name: "강준혁", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 47, name: "조아라", chapter: "stf", captain_count: 0, group_no: 0 },
  { id: 48, name: "고명진", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 49, name: "나규민", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 50, name: "안현숙", chapter: "ops", captain_count: 0, group_no: 0 },
  { id: 51, name: "노은빈", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 52, name: "박결", chapter: "des", captain_count: 0, group_no: 0 },
  { id: 54, name: "최윤철", chapter: "be", captain_count: 0, group_no: 0 },
  { id: 55, name: "백아리", chapter: "mkt", captain_count: 0, group_no: 0 },
  { id: 56, name: "강웅석", chapter: "data", captain_count: 0, group_no: 0 },
  { id: 57, name: "김영진", chapter: "svc", captain_count: 0, group_no: 0 },
];
const GROUP_MIN_MAX = [3, 4];
let i = 0;
let memory = DTR_MEMBERS;
/**
 * 1. 조 인원은 3~4
 * 2. 같은 챕터는 같은 조로 배정하지 않음
 * 3. 이전 n회까지 같은 조였던 사람은 배정하지 않음. (디폴트 3회)
 * 4. 신규입사자 겹치지 않게
 */

const chunkByMinMax = (total, [min, max]) => {
  let chunked = [];

  // 총 인원이 최소 인원보다 적거나 최대 인원보다 많은 경우, 조를 만들 수 없음
  if (total < min) return [total];

  // 인원을 조로 나누는 로직
  while (total > 0) {
    let chunkSize = total % max > 0 ? min : max;
    chunked.unshift(chunkSize);
    total -= chunkSize;
  }

  return chunked;
};
const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

const chunkedNumberOfGroups = chunkByMinMax(DTR_MEMBERS.length, GROUP_MIN_MAX);

function matching() {
  console.log("try count ..." + i++);
  let members = memory.slice();

  const createGroup = (size) => {
    const groupMembers = [];
    const groupChapters = [];
    const groupNos = [];

    // add member
    const addMember = () => {
      const targets = members.filter(({ chapter, group_no }) => {
        // 같은 챕터는 같은 그룹이 될 수 없음
        if (groupChapters.includes(chapter)) return;
        if (groupNos.includes(group_no)) return;
        //
        return true;
      });
      const target = targets[getRandomIndex(targets)];

      if (!target) return;
      groupMembers.push(target);
      groupChapters.push(target.chapter);

      if (target.group_no > 0) groupNos.push(target.group_no);
      members = members.filter(({ id }) => id !== target.id);

      if (groupMembers.length < size) {
        addMember();
        groupMembers.sort((a, b) => a.captain_count - b.captain_count);
      }
    };

    addMember();

    return groupMembers;
  };
  const groups = chunkedNumberOfGroups.map((size) => createGroup(size));

  if (members.length > 0) {
    matching();
  } else {
    const update_members = [];
    groups.map((gms, gi) => {
      gms.map((gm, i) => {
        const u = { ...gm, group_no: gi + 1 };
        update_members.push(
          !!i ? u : { ...u, captain_count: u.captain_count + 1 }
        );
      });
    });
    memory = update_members;
    console.log(
      memory.map((v) => ({
        n: v.name,
        c: v.chapter,
        cc: v.captain_count,
        gn: v.group_no,
      }))
    );
  }
}

Array.from({ length: 100 }).map(() => matching());
